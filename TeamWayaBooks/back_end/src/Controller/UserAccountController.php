<?php

namespace App\Controller;

use App\Entity\Address;
use App\Entity\UserAccount;
use App\Repository\UserAccountRepository;
use App\Service\AddressService;
use App\Service\MailerService;
use App\Service\UserService;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Validator\ConstraintViolationList;

class UserAccountController extends AbstractController
{
    #[Route('/api/users', name: 'app_users', methods: ["GET"])]
    #[IsGranted('ROLE_COMMERCIAL')]
    public function index(UserAccountRepository $userAccountRepository, SerializerInterface $serializer): JsonResponse
    {
        $userAccountList = $userAccountRepository->findAll();
        $jsonUserAccountList = $serializer->serialize($userAccountList, 'json', ['groups' => 'getUserAccounts']);
        return new JsonResponse($jsonUserAccountList, Response::HTTP_OK, [], true);
    }

    #[Route('/api/users/getid', name: 'app_users_get_id', methods: ["GET"], priority: 2)]
    #[IsGranted('ROLE_USER')]
    public function userGetId(): JsonResponse
    {
        $currentUser = $this->getUser();
        if ($currentUser instanceof UserAccount) {
            $id = $currentUser->getId();
            return new JsonResponse(['id' => $id], Response::HTTP_OK, [], false);
        }
        return new JsonResponse(null, Response::HTTP_NOT_FOUND);
    }

    #[Route('/api/users/fullname', name: 'app_users_get_full_name', methods: ["GET"], priority: 2)]
    #[IsGranted('ROLE_COMMERCIAL')]
    public function userfullname(): JsonResponse
    {
        $currentUser = $this->getUser();
        if ($currentUser instanceof UserAccount) {
            $lastname = $currentUser->getLastname();
            $firstname = $currentUser->getfirstname();
            return new JsonResponse(['lastname' => $lastname, 'firstname' => $firstname], Response::HTTP_OK, [], false);
        }
        return new JsonResponse(null, Response::HTTP_NOT_FOUND);
    }

    #[Route('/api/users/{id}', name: 'app_users_detail', methods: ["GET"])]
    public function userDetail(UserAccountRepository $userAccountRepository, int $id, SerializerInterface $serializer): JsonResponse
    {
        $userAccount = $userAccountRepository->find($id);
        if ($userAccount) {
            $jsonUserAccount = $serializer->serialize($userAccount, 'json', ['groups' => 'getUserAccounts']);
            return new JsonResponse($jsonUserAccount, Response::HTTP_OK, [], true);
        }
        return new JsonResponse(null, Response::HTTP_NOT_FOUND);
    }

    #[Route('/api/users/{id}', name: 'app_users_detail', methods: ["DELETE"])]
    #[IsGranted('ROLE_USER')]
    public function userDelete(AddressService $addressService, UserService $userService, int $id, UserPasswordHasherInterface $passwordHasher): JsonResponse
    {
        $currentUser = $this->getUser();
        if ($currentUser instanceof UserAccount && ($currentUser->getId() === $id)) {
            $addressService->addressesDeleteByUser($currentUser);
            $userService->userAnonymise($currentUser);
            $password = $passwordHasher->hashPassword($currentUser, $userService->generateNumericString(17));
            $currentUser->setPassword($password);
            $userService->userSave($currentUser, true);
            return new JsonResponse(['message' => 'Ok pour suppression'], Response::HTTP_OK);
        }
        return new JsonResponse(null, Response::HTTP_NOT_FOUND);
    }



    #[Route('/api/usersfull', name: 'app_users_create', methods: ["POST"])]
    public function userCreate(Request $request, SerializerInterface $serializer, UrlGeneratorInterface $urlGenerator, UserPasswordHasherInterface $passwordHasher, UserService $userService, AddressService $addressService, MailerService $mailerService, ValidatorInterface $validator): JsonResponse
    {
        try {
            $datas = $request->toArray();
            $user = new UserAccount();
            $address = new Address();
            $errorMessage = [];

            $errorMessage = $userService->userRegistrationVerfification($datas);

            if (count($errorMessage) < 1) {
                $password = $datas['password'];
                $datas['password'] = $passwordHasher->hashPassword($user, $password);

                $user = $userService->userParse($datas);
                $address = $addressService->addressParse($datas);
                $errorsUser = $validator->validate($user);
                $errorsAddress = $validator->validate($address);
                if ($userService->userValidateEmail($user) && (count($errorsAddress) < 1) && (count($errorsUser) < 1)) {
                    $addressService->addressSave($address, true);
                    $user = $userService->userGenerateToken($user);
                    $user = $userService->userAdressRoleUserSave($user, $address, true);

                    $jsonUser = $serializer->serialize($user, 'json', ['groups' => 'getUserWithAddress']);
                    $location = $urlGenerator->generate('app_users_detail', ['id' => $user->getId()], UrlGeneratorInterface::ABSOLUTE_URL);
                    $mailerService->registartionMail($user);
                    return new JsonResponse($jsonUser, Response::HTTP_CREATED, ["location" => $location], true);
                } else {
                    ($userService->userValidateEmail($user)) ? $messageValidation = [] : $messageValidation = ['Email already used.'];
                    (count($errorsAddress) < 1) ?: $messageValidation[] = $addressService->addressFormatValidateMessage($errorsAddress);
                    (count($errorsUser) < 1) ?: $messageValidation[] = $userService->userFormatValidateMessage($errorsUser);
                    return new JsonResponse(['message' => $messageValidation], Response::HTTP_BAD_REQUEST, [], false);
                }
            } else {
                return new JsonResponse(['message' => $errorMessage], Response::HTTP_BAD_REQUEST, [], false);
            }
        } catch (\Throwable $th) {
            return new JsonResponse(['message' => $th->getMessage()], Response::HTTP_BAD_REQUEST, [], false);
        }
    }
    #[Route('/api/users/validate/{token}', name: 'app_users_validate', methods: ["POST"])]
    public function userValidate(string $token, UserService $userService): JsonResponse
    {
        $user = $userService->userFindByToken($token);
        if (!$user) {
            return new JsonResponse(['message' => 'Invalid Token'], Response::HTTP_NOT_FOUND, [], false);
        } else {
            if ($userService->userValidateToken($user)) {
                $user->setToken(null);
                $user->setIsChecked(true);
                $userService->userSave($user, true);

                return new JsonResponse(['message' => 'Token ok'], Response::HTTP_OK, [], false);
            } else {
                return new JsonResponse(['message' => 'Expired Token'], Response::HTTP_BAD_REQUEST, [], false);
            }
        }
    }
    #[Route('/api/users/forgotten', name: 'app_users_forgotten', methods: ["POST"])]
    public function userForgotten(Request $request, UserService $userService, MailerService $mailerService): JsonResponse
    {
        $data = $request->toArray();
        $email = $data['email'];
        $user = $userService->userFindOneBy(['email' => $email]);
        if ($user && $user->isIsChecked()) {
            $user = $userService->userGenerateTokenOnly($user);
            $userService->userSave($user, true);
            $mailerService->forgottenPasswordMail($user);
            return new JsonResponse(['message' => 'Demande traitée.'], Response::HTTP_OK, [], false);
        }
        return new JsonResponse(['message' => 'Demande traitée'], Response::HTTP_OK, [], false);
    }
    #[Route('/api/users/reset', name: 'app_users_reset', methods: ["POST"])]
    public function userReset(Request $request, UserService $userService, MailerService $mailerService, UserPasswordHasherInterface $passwordHasher, SerializerInterface $serializer): JsonResponse
    {
        $data = $request->toArray();
        $token = $data['token'];
        $password = $data['password'];
        $user = $userService->userFindOneBy(['token' => $token]);
        if ($user && $user->isIsChecked() && $password !== '') {
            $hashedPassword = $passwordHasher->hashPassword($user, $password);
            $user->setPassword($hashedPassword);
            $user->setToken(null);
            $userService->userSave($user, true);
            $mailerService->changedPasswordMail($user);
            $jsonUser = $serializer->serialize($user, 'json', ['groups' => 'getUserEmail']);
            return new JsonResponse($jsonUser, Response::HTTP_OK, [], true);
        }
        return new JsonResponse(['message' => 'Erreur de traitement'], Response::HTTP_BAD_REQUEST, [], false);
    }
    #[Route('/api/users/edit/password', name: 'app_users_edit_password')]
    #[IsGranted('ROLE_USER')]
    public function editPassword(Request $request, Security $security, MailerService $mailerService, UserPasswordHasherInterface $passwordHasher, UserService $userService): JsonResponse
    {
        try {
            $currentUser = $security->getUser();
            $datas = $request->toArray();

            $password = $datas['password'];
            $passwordNew = $datas['newPassword'];
            $confimationPassword = $datas['passwordConfirm'];


            if ($currentUser instanceof UserAccount) {
                if ($passwordHasher->isPasswordValid($currentUser, $password)) {
                    if ($passwordNew === $confimationPassword) {
                        $hashedPassword = $passwordHasher->hashPassword($currentUser, $passwordNew);
                        $currentUser->setPassword($hashedPassword);
                        $mailerService->changedPasswordMail($currentUser);
                        $userService->userSave($currentUser, true);
                        return $this->json(['message' => 'password saved'], Response::HTTP_OK, []);
                    }
                }
            }

            return $this->json(['message' => 'erreur']);
        } catch (\Throwable $th) {
            return new JsonResponse(['message' => $th->getMessage()], Response::HTTP_BAD_REQUEST, [], false);
        }
    }
    #[Route('/api/users/edit/profile', name: 'app_users_profile', methods: ["GET"])]
    #[IsGranted('ROLE_USER')]
    public function getEditProfil(Security $security, SerializerInterface $serializer): JsonResponse
    {
        // reucpere l'utilisateur courant
        $currentUser = $security->getUser();
        if ($currentUser instanceof UserAccount) {
            $jsonUser = $serializer->serialize($currentUser, 'json', ['groups' => 'getUserEdit']);
            return new JsonResponse($jsonUser, Response::HTTP_OK, [], true);
        } else {
            return new JsonResponse("user : null", Response::HTTP_OK, [], false);
        }
    }
    #[Route('/api/users/edit/profile', name: 'app_users_edit_profile', methods: ["POST"])]
    #[IsGranted('ROLE_USER')]
    public function postEditProfil(Security $security, UserService $userService, Request $request, MailerService $mailerService, UserPasswordHasherInterface $passwordHasher): JsonResponse
    {

        $datas = $request->toArray();
        $password = $datas['password'];
        $currentUser = $security->getUser();
        if ($currentUser instanceof UserAccount) {
            if ($passwordHasher->isPasswordValid($currentUser, $password)) {
                if ($currentUser->getEmail() === $datas['emailEdit']) {
                    $currentUser->setLastname($datas['lastname']);
                    $currentUser->setFirstname($datas['firstname']);
                    $userService->userSave($currentUser, true);
                    $mailerService->changedPorfileMail($currentUser);
                    return $this->json(['message' => 'profile traité'], Response::HTTP_OK, []);
                } else {
                    if ($userService->stringValidateEmail($datas['emailEdit'])) {
                        $currentUser->setLastname($datas['lastname']);
                        $currentUser->setFirstname($datas['firstname']);
                        $currentUser->setEmail($datas['emailEdit']);
                        $userService->userSave($currentUser, true);
                        $mailerService->changedPorfileMail($currentUser);
                        return $this->json(['message' => 'profile traité'], Response::HTTP_OK, []);
                    } else {
                        return $this->json(['message' => 'email already used'], Response::HTTP_BAD_REQUEST, []);
                    }
                }
            }
            return $this->json(['message' => 'password invalid'], Response::HTTP_BAD_REQUEST, []);
        }



        return $this->json(['message' => 'erreur lors de l\'édit'], Response::HTTP_NOT_FOUND, []);
    }
}
