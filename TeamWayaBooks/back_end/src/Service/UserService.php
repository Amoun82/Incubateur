<?php

namespace App\Service;

use App\Entity\Address;
use App\Entity\UserAccount;
use App\Repository\UserAccountRepository;
use App\Repository\UserRoleRepository;
use Symfony\Component\Validator\ConstraintViolationListInterface;

class UserService
{

    private $userRepository;
    private $userRoleRepository;

    public function __construct(UserAccountRepository $repository, UserRoleRepository $roleRepository)
    {
        $this->userRepository = $repository;
        $this->userRoleRepository = $roleRepository;
    }

    public function userParse(array $data): UserAccount
    {
        $user = new UserAccount();

        foreach ($data as $key => $value) {
            switch ($key) {
                case 'firstname':
                    $user->setFirstname($value);
                    break;
                case 'lastname':
                    $user->setLastname($value);
                    break;
                case 'email':
                    $user->setEmail($value);
                    break;
                case 'password':
                    $user->setPassword($value);
                    break;

                default:
                    break;
            }
        }
        return $user;
    }

    public function userRegistrationVerfification(array $data): array
    {
        $messages = [];

        foreach ($data as $key => $value) {
            if ($value === '' && $key !== 'complement') {
                $string = ucfirst($key);
                $messages[] = "$string is empty.";
            }
        }
        if (!array_key_exists("password", $data)) {
            $messages[] = "Password is null";
        }
        if (!array_key_exists("passwordConfirm", $data)) {
            $messages[] = "Password confirm is null";
        }
        if (!array_key_exists("email", $data)) {
            $messages[] = "Email is null";
        }
        if (!array_key_exists("emailConfirm", $data)) {
            $messages[] = "Email confirm is null";
        }
        if (array_key_exists("email", $data) && array_key_exists("emailConfirm", $data) && $data['email'] !== $data['emailConfirm']) {
            $messages[] = "Email mismatch";
        }
        if (array_key_exists("password", $data) && array_key_exists("passwordConfirm", $data) && $data['password'] !== $data['passwordConfirm']) {
            $messages[] = "Password mismatch";
        }

        return $messages;
    }

    public function userSave(UserAccount $user, Bool $flag)
    {
        $this->userRepository->add($user, $flag);
    }

    public function userAdressRoleUserSave(UserAccount $user, Address $address, Bool $flag): UserAccount
    {
        $user->addAddress($address);
        $user->addUserRole($this->userRoleRepository->find(3));
        $this->userRepository->add($user, $flag);

        return $user;
    }
    public function generateNumericString(int $lenght): string
    {
        $string = '';

        for ($i = 0; $i < $lenght; $i++) {
            $string .= strval(rand(0, 9));
        }
        return $string;
    }
    public function userGenerateToken(UserAccount $user): UserAccount
    {
        $token = $this->generateNumericString(10) . microtime(true) * 10000 . $this->generateNumericString(10);
        $user->setToken($token);
        $user->setIsChecked(false);
        return $user;
    }
    public function userGenerateTokenOnly(UserAccount $user): UserAccount
    {
        $token = $this->generateNumericString(10) . microtime(true) * 10000 . $this->generateNumericString(10);
        $user->setToken($token);
        return $user;
    }

    public function userFindOneBy(array $array): ?UserAccount
    {
        $user = $this->userRepository->findOneBy($array);
        return $user;
    }

    public function userFindByToken(string $token): ?UserAccount
    {
        $user = $this->userRepository->findOneBy(['token' => $token]);
        return $user;
    }

    public function userVerifyToken(string $token, UserAccount $user): Bool
    {
        $response = false;
        if ($token === $user->getToken()) {
            $response = true;
        }
        return $response;
    }

    public function userValidateToken(UserAccount $user): Bool
    {
        $response = false;
        $time = substr_replace($user->getToken(), '', 0, 10);
        $time = floatval(substr_replace($time, '', -10));
        if ($time / 10000 + (3600 * 24) > microtime(true)) {
            $response = true;
        }
        return $response;
    }

    public function userValidateEmail(UserAccount $user): Bool
    {
        $response = false;
        $email = $user->getEmail();
        $emails = $this->userRepository->findBy(['email' => $email]);
        if (count($emails) < 1) {
            $response = true;
        }
        return $response;
    }

    public function stringValidateEmail(string $email): Bool
    {
        $response = false;
        $emails = $this->userRepository->findBy(['email' => $email]);
        if (count($emails) < 1) {
            $response = true;
        }
        return $response;
    }


    public function userFormatValidateMessage(ConstraintViolationListInterface $violations): array
    {
        $response = [];
        $tmpErrors = (string) $violations;
        $errorsArray = explode('The ', $tmpErrors);
        for ($i = 1; $i < count($errorsArray); $i++) {
            $response[] = substr($errorsArray[$i], 0, - (strlen($errorsArray[$i]) - strpos($errorsArray[$i], ' (')));
        }
        return $response;
    }

    public function userAddressesByAddressId(int $id): mixed
    {
        return $this->userRepository->createQueryBuilder('p')
            ->Select('u')
            ->from('\App\Entity\UserAccount', 'u')
            ->innerJoin('u.address', 'addr')
            ->Where('addr.id = :val')
            ->setParameter('val', $id)
            ->getQuery()
            ->getResult();
    }

    public function userAnonymise(UserAccount $user)
    {
        $user->setFirstname('********');
        $user->setLastname('********');
        $user->setEmail('********');
    }
}
