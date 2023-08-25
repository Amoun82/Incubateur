<?php

namespace App\Controller;

use App\Service\CommentService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CommentController extends AbstractController
{
    #[Route('/comment', name: 'app_comment')]
    public function index(): JsonResponse
    {
        return $this->json([
            'message' => 'Welcome to your Comment controller!',
            'path' => 'CommentController.php',
        ]);
    }

    #[Route('/api/comments/product/{id}/average', name: 'app_comment_avg', methods: ['GET'])]
    public function commentsAverageByProductId(int $id, CommentService $commentService)
    {
        $resultat = $commentService->getCommentsAverageByProductId($id);
        return  new JsonResponse($resultat, Response::HTTP_OK, [], false);
    }

    #[Route('/api/comments/product/{id}/count', name: 'app_comment_count', methods: ['GET'])]
    public function commentsTotalByProductId(int $id, CommentService $commentService)
    {
        $resultat = $commentService->getCommentsTotalByProductId($id);
        return  new JsonResponse($resultat, Response::HTTP_OK, [], false);
    }

    #[Route('/api/comments/product/{id}', name: 'app_comment_avg_count', methods: ['GET'])]
    public function commentsAverageAndTotalByProductId(int $id, CommentService $commentService)
    {
        $resultat = $commentService->getCommentsAverageAndTotalByProductId($id);
        return  new JsonResponse($resultat, Response::HTTP_OK, [], false);
    }
}
