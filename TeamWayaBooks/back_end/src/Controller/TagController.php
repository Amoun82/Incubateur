<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\TagRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class TagController extends AbstractController
{
    #[Route('api/tag/new', name: 'app_tag_new', methods: ["GET"])]
    public function productNew(SerializerInterface $serializer, Request $request, TagRepository $tag): JsonResponse
    {
        $page = $request->get('page', 1);
        $limit = $request->get('limit', 8);

        $tags = $tag->findProductsByTag(1, $page, $limit);

        // serialisation par rapport au produit avec le groupe tagProducts
        $jsonTag = $serializer->serialize($tags,'json',['groups' => 'ProductsNew']);
        return new JsonResponse($jsonTag, Response::HTTP_OK, [], true);
    }

    #[Route('api/tag/name/{id}', name: 'app_tag_product', methods: ["GET"])]
    public function tagByProduct(int $id, TagRepository $tag): JsonResponse
    {
        $tags = $tag->find($id);
        
        return new JsonResponse(['tagName' => $tags->getTagName()], Response::HTTP_OK, [], false);
    }
}
