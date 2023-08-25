<?php

namespace App\Service;

use App\Entity\ContactMessage;
use App\Repository\ContactMessageRepository;

class ContactMessageService
{
    private $contactMessageRepository;

    public function __construct(ContactMessageRepository $repository)
    {
        $this->contactMessageRepository = $repository;
    }

    public function contactMessageCheckAnonymous(array $datas): array
    {
        $errors = [];
        if (!array_key_exists("email", $datas)) {
            $errors[] = "Email missing";
        } else {
            if ($datas['email'] === "") {
                $errors[] = "Email Empty";
            }
        }
        if (!array_key_exists("subject", $datas)) {
            $errors[] = "Subject missing";
        } else {
            if ($datas['subject'] === "") {
                $errors[] = "Subject Empty";
            }
        }
        if (!array_key_exists("message", $datas)) {
            $errors[] = "Message missing";
        } else {
            if ($datas['message'] === "") {
                $errors[] = "Message Empty";
            }
        }
        if (count($errors) < 1) {
            if (!filter_var($datas["email"], FILTER_VALIDATE_EMAIL)) {
                $errors[] = "Invalid Email";
            }
        }
        return $errors;
    }
}
