<?php

namespace App\Service;

use App\Entity\Address;
use App\Entity\UserAccount;
use App\Repository\AddressRepository;
use Symfony\Component\Validator\ConstraintViolationListInterface;

class AddressService
{

    private $addressRepository;

    public function __construct(AddressRepository $repository)
    {
        $this->addressRepository = $repository;
    }

    public function addressParse(array $data)
    {
        $address = new Address();

        foreach ($data as $key => $value) {
            switch ($key) {
                case 'address':
                    $address->setAddress($value);
                    break;
                case 'complement':
                    $address->setComplement($value);
                    break;
                case 'zipCode':
                    $address->setZipCode($value);
                    break;
                case 'city':
                    $address->setCity($value);
                    break;
                case 'country':
                    $address->setCountry($value);
                    break;

                default:
                    break;
            }
        }
        return $address;
    }

    public function addressSave(Address $address, Bool $flag)
    {
        $this->addressRepository->add($address, $flag);
    }

    public function addressFindOneBy(array $array): ?Address
    {
        $address = $this->addressRepository->findOneBy($array);
        return $address;
    }

    public function addressFormatValidateMessage(ConstraintViolationListInterface $violations): array
    {
        $response = [];
        $tmpErrors = (string) $violations;
        $errorsArray = explode('The ', $tmpErrors);
        for ($i = 1; $i < count($errorsArray); $i++) {
            $response[] = substr($errorsArray[$i], 0, - (strlen($errorsArray[$i]) - strpos($errorsArray[$i], ' (')));
        }
        return $response;
    }

    public function addressDelete(Address $address, Bool $flag)
    {
        $this->addressRepository->remove($address, $flag);
    }

    public function addressCreateAnonymous(): Address
    {
        $address = new Address();
        $this->addressSetAnonymous($address);
        $address->setZipCode("********");
        $address->setCity("********");
        $address->setCountry("********");
        $this->addressSave($address, true);
        return $address;
    }

    public function addressSetAnonymous(Address $address)
    {
        $address->setAddress("********");
        $address->setComplement("********");
    }

    public function addressesDeleteByUser(UserAccount $user)
    {
        $addresses = $user->getAddress();
        foreach ($addresses as $address) {
            if (count($address->getUserAccounts()) <= 1) {
                $this->addressSetAnonymous($address);
                $this->addressSave($address, true);
            } else {
                $user->removeAddress($address);
            }
        }
    }
}
