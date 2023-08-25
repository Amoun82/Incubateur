<?php

namespace App\Controller;

use App\Entity\ContactMessage;
use App\Service\ContactMessageService;
use App\Service\MailerService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ContactMessageController extends AbstractController
{
    #[Route('/api/contact/message/anonymous', name: 'app_contact_message_anonymous', methods: ['POST'])]
    public function contactMessageAnonymous(Request $request, ContactMessageService $contactMessageService, MailerService $mailerService): JsonResponse
    {
        try {
            $datas = $request->toArray();
            $errors = $contactMessageService->contactMessageCheckAnonymous($datas);
            if (count($errors) < 1) {
                $mailerService->contactMessageMail($datas['email'], $datas['subject'], $datas['message']);
                $mailerService->contactMessageSenderMail($datas['email'], $datas['subject'], $datas['message']);
                return new JsonResponse(["message" => "Mail sent"], Response::HTTP_OK, [], false);
            } else {
                return new JsonResponse(["errors" => $errors], Response::HTTP_BAD_REQUEST, [], false);
            }
        } catch (\Throwable $th) {
            return new JsonResponse(['message' => $th->getMessage()], Response::HTTP_BAD_REQUEST, [], false);
        }
    }
}
