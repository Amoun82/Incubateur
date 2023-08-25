<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use App\Entity\Address;
use App\Entity\UserAccount;
use App\Repository\AddressRepository;
use App\Service\AddressService;
use App\Service\EditorService;
use App\Service\ProductOrderService;
use App\Service\UserService;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class AddressController extends AbstractController
{
    #[Route('/api/addresses/user/', name: 'app_address_user', methods: ["GET"])]
    #[IsGranted('ROLE_USER')]
    public function addressUser(AddressRepository $addressRepository, SerializerInterface $serializer, Security $security, Request $request): JsonResponse
    {
        $currentUser = $security->getUser();
        if ($currentUser instanceof UserAccount) {
            $jsonUser = $serializer->serialize($currentUser, 'json', ['groups' => 'getUserAddresses']);
            return new JsonResponse($jsonUser, Response::HTTP_OK, [], true);
        } else {
            return new JsonResponse("user : null", Response::HTTP_OK, [], false);
        }
    }

    #[Route('/api/addresses', name: 'app_address', methods: ["GET"])]
    #[IsGranted('ROLE_COMMERCIAL')]
    public function index(AddressRepository $addressRepository, SerializerInterface $serializer): JsonResponse
    {
        $addressList = $addressRepository->findAll();
        $jsonAddressList = $serializer->serialize($addressList, 'json', ['groups' => 'getAddresses']);
        return new JsonResponse($jsonAddressList, Response::HTTP_OK, [], true);
    }

    #[Route('/api/addresses/{id}', name: 'app_address_detail', methods: ["GET"])]
    #[IsGranted('ROLE_USER')]
    public function addressDetail(int $id, SerializerInterface $serializer, AddressService $addressService, Security $security): JsonResponse
    {
        $address = $addressService->addressFindOneBy(['id' => $id]);
        $user = $security->getUser();
        if ($address && ($user instanceof UserAccount)) {
            if ($user->getAddress()->contains($address) || in_array('ROLE_COMMERCIAL', $user->getRoles())) {
                $jsonAddress = $serializer->serialize($address, 'json', ['groups' => 'getAddresses']);
                return new JsonResponse($jsonAddress, Response::HTTP_OK, [], true);
            }
            return new JsonResponse(null, Response::HTTP_METHOD_NOT_ALLOWED);
        }
        return new JsonResponse(null, Response::HTTP_NOT_FOUND);
    }

    #[Route('/api/addresses/{id}', name: 'app_address_update', methods: ["PATCH"])]
    #[IsGranted('ROLE_USER')]
    public function addressUpdate(Request $request, AddressService $addressService, int $id, Security $security, ValidatorInterface $validator): JsonResponse
    {
        $address = $addressService->addressFindOneBy(['id' => $id]);
        $user = $security->getUser();
        if ($address && ($user instanceof UserAccount)) {
            if ($user->getAddress()->contains($address) || in_array('ROLE_COMMERCIAL', $user->getRoles())) {
                $datas = $request->toArray();
                $tmpAddress = $addressService->addressParse($datas);
                $errorsAddress = $validator->validate($tmpAddress);
                if (count($errorsAddress) < 1) {
                    $address->setAddress($tmpAddress->getAddress());
                    $address->setComplement($tmpAddress->getComplement());
                    $address->setZipCode($tmpAddress->getZipCode());
                    $address->setCity($tmpAddress->getCity());
                    $address->setCountry($tmpAddress->GetCountry());
                    $addressService->addressSave($address, true);
                    return new JsonResponse(null, Response::HTTP_OK, [], false);
                } else {
                    return new JsonResponse(['message' => $addressService->addressFormatValidateMessage($errorsAddress)], Response::HTTP_BAD_REQUEST, [], false);
                }
            }
            return new JsonResponse(null, Response::HTTP_METHOD_NOT_ALLOWED);
        }
        return new JsonResponse(null, Response::HTTP_NOT_FOUND);
    }

    #[Route('/api/addresses', name: 'app_address_create', methods: ["POST"])]
    public function addressCreate(Request $request, AddressService $addressService, UserService $userService, SerializerInterface $serializer, UrlGeneratorInterface $urlGenerator, Security $security, ValidatorInterface $validator): JsonResponse
    {
        try {
            $currentUser = $security->getUser();
            if ($currentUser instanceof UserAccount) {
                // Deserialise object $addressReceived from request content with Entity Addresss
                $addressReceived = $serializer->deserialize($request->getContent(), Address::class, 'json');
                $errorsAddress = $validator->validate($addressReceived);
                if (count($errorsAddress) < 1) {
                    // Add it to addressRepository and flush
                    $addressService->addressSave($addressReceived, true);
                    // $user = $userService->userFindOneBy(['email' => $currentUser->getEmail()]);
                    $currentUser->addAddress($addressReceived);
                    $userService->userSave($currentUser, true);
                    // Serialize $jsonAddress from $addressReceived using Entity Address group 'getAddresses
                    $jsonAddress = $serializer->serialize($addressReceived, 'json', ['groups' => 'getAddress']);
                    // Genrating URL to see the address created
                    $location = $urlGenerator->generate('app_address_detail', ['id' => $addressReceived->getId()], UrlGeneratorInterface::ABSOLUTE_URL);
                    return new JsonResponse($jsonAddress, Response::HTTP_CREATED, ["location" => $location], true);
                } else {
                    return new JsonResponse(['message' => $addressService->addressFormatValidateMessage($errorsAddress)], Response::HTTP_BAD_REQUEST, [], false);
                }
            } else {
                return new JsonResponse(null, Response::HTTP_METHOD_NOT_ALLOWED);
            }
        } catch (\Throwable $th) {
            if ($th instanceof NotEncodableValueException) {
                return new JsonResponse(['message' => 'Invalid Json.'], Response::HTTP_BAD_REQUEST, [], false);
            }
            return new JsonResponse(['message' => 'Bad Request.'], Response::HTTP_BAD_REQUEST, [], false);
        }
    }
    #[Route('/api/addresses/{id}', name: 'app_address_delete', methods: ["DELETE"])]
    #[IsGranted('ROLE_USER')]
    public function addressDelete(int $id, EditorService $editorService, AddressService $addressService, UserService $userService, ProductOrderService $productOrderService, Security $security): JsonResponse
    {
        $address = $addressService->addressFindOneBy(['id' => $id]);
        $user = $security->getUser();
        if ($address && ($user instanceof UserAccount)) {
            if ($user->getAddress()->contains($address) || in_array('ROLE_COMMERCIAL', $user->getRoles())) {
                $addressesOrders = $productOrderService->findProductOrdersByAddressId($id);
                $addressesUserAccounts = $userService->userAddressesByAddressId($id);
                $addressesEditors = $editorService->findEditorsByAddressId($id);
                if ($addressesUserAccounts && count($addressesUserAccounts) === 1 && $user->getAddress()->count() > 1 && !$addressesOrders && !$addressesEditors) {
                    $user->removeAddress($address);
                    $userService->userSave($user, true);
                    $addressService->addressDelete($address, true);
                    return new JsonResponse(['message' => 'Adresse supprimée.'], Response::HTTP_OK, [], false);
                } else if ($addressesUserAccounts && count($addressesUserAccounts) > 1 && $user->getAddress()->count() > 1 && !$addressesOrders && !$addressesEditors) {
                    $user->removeAddress($address);
                    $userService->userSave($user, true);
                    return new JsonResponse(['message' => 'Adresse traitée.'], Response::HTTP_OK, [], false);
                } else {
                    return new JsonResponse(['message' => 'Adresse non traitée car unique.'], Response::HTTP_OK, [], false);
                }
            } else {
                return new JsonResponse(null, Response::HTTP_METHOD_NOT_ALLOWED);
            }
        } else {
            return new JsonResponse(null, Response::HTTP_BAD_REQUEST);
        }
    }
}
