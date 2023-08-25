<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use App\Service\ProductService;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ProductController extends AbstractController
{
    #[Route('api/product/tag', name: 'app_product_tag', methods: ["GET"], priority: 2)]
    public function productByTag(ProductService $productService, SerializerInterface $serializer, Request $request): JsonResponse
    {
        $page = (int) $request->get('page');
        $limit = (int) $request->get('limit');
        $tag = (int) $request->get('tag');

        if ($tag != '') {
            $countProduct = $productService->countProductsByTagId($tag);
        }

        if ($page === 0 || $limit === 0 || $tag === 0) {
            if ($tag > 0) {
                $products = array_slice($productService->selectProductsByTagId($tag), 0, 4);
            } else {
                $products = $productService->allProduct();
            }
        } else {
            if ($page > 0 && $limit > 0 && $tag > 0) {
                $products = array_slice($productService->selectProductsByTagId($tag), ($page - 1) * $limit, $limit);
            } else {
                $products = $productService->allProduct();
            }
        }

        // serialisation par rapport au produit avec le groupe tagProducts
        $jsonProduct = $serializer->serialize($products, 'json', ['groups' => 'tagProducts']);
        return new JsonResponse($jsonProduct, Response::HTTP_OK, ['countProduct' => $countProduct, 'access-control-expose-headers' => 'countProduct'], true);
    }

    #[Route('api/product/category', name: 'app_product_category', methods: ["GET"])]
    public function productByCategory(ProductService $productService, SerializerInterface $serializer, Request $request): JsonResponse
    {
        $page = (int) $request->get('page');
        $limit = (int) $request->get('limit');
        $category = (int) $request->get('category');

        if ($category != '') {
            $countProduct = $productService->countProductsByCategoryId($category);
        }

        if ($page === 0 || $limit === 0 || $category === 0) {
            if ($category > 0) {
                $products = array_slice($productService->selectProductsByCategoryId($category), 0, 4);
            } else {
                $products = $productService->allProduct();
            }
        } else {
            if ($page > 0 && $limit > 0 && $category > 0) {
                $products = array_slice($productService->selectProductsByCategoryId($category), ($page - 1) * $limit, $limit);
            } else {
                $products = $productService->allProduct();
            }
        }

        // serialisation par rapport au produit avec le groupe categoryProducts
        $jsonProduct = $serializer->serialize($products, 'json', ['groups' => 'categoryProducts']);
        //dd($products);
        return new JsonResponse($jsonProduct, Response::HTTP_OK, ['countProduct' => $countProduct, 'access-control-expose-headers' => 'countProduct'], true);
    }

    #[Route('api/product/all', name: 'app_product_all', methods: ["GET"])]
    public function productAll(ProductService $productService, SerializerInterface $serializer, Request $request): JsonResponse
    {
        $page = $request->get('page', 1);
        $limit = $request->get('limit', 8);

        $countProduct = $productService->countProducts();
        $products = $productService->allProduct($page, $limit);

        // serialisation par rapport au produit avec le groupe tagProducts
        $jsonProduct = $serializer->serialize($products, 'json', ['groups' => 'tagProducts']);
        return new JsonResponse($jsonProduct, Response::HTTP_OK, ['countProduct' => $countProduct, 'access-control-expose-headers' => 'countProduct'], true);
    }

    #[Route('api/product/search/{search}', name: 'app_product_search', methods: ["GET"])]
    public function productSearch(string $search, LoggerInterface $logged, ProductService $productService, SerializerInterface $serializer): JsonResponse
    {
        $logged->info($search);
        if ($search != '') {
            $product = $productService->findByWord($search);
            $jsonProduct = $serializer->serialize($product, 'json', ['groups' => 'simpleSearch']);
            return new JsonResponse($jsonProduct, Response::HTTP_OK, [], true);
        } else {
            return $this->json(['message' => 'erreur dans la recherhe']);
        }
    }

    #[Route('api/commercial/products/{id}', name: 'app_com_product', methods: ["GET"])]
    public function productById(ProductService $productService, SerializerInterface $serializer, Request $request, int $id): JsonResponse
    {
        $product = $productService->findOneById($id);

        $jsonProduct = $serializer->serialize($product, 'json', ['groups' => 'comProduct']);
        return new JsonResponse($jsonProduct, Response::HTTP_OK, [], true);
    }

    #[Route('api/commercial/products', name: 'app_com_products_list', methods: ["GET"])]
    public function products(ProductService $productService, SerializerInterface $serializer, Request $request): JsonResponse
    {
        $products = $productService->findAll();

        $jsonProducts = $serializer->serialize($products, 'json', ['groups' => 'comListProducts']);
        return new JsonResponse($jsonProducts, Response::HTTP_OK, [], true);
    }

    #[Route('api/product/detail/{id}', name: 'app_product_detail', methods: ["GET"])]
    public function productDetail(int $id, LoggerInterface $logged, ProductService $productService, SerializerInterface $serializer): JsonResponse
    {
        $logged->info('id detail produit : ' . $id);
        if ($id != '') {
            $product = $productService->detailProductById($id);
            $jsonProduct = $serializer->serialize($product, 'json', ['groups' => 'detailProducts']);
            return new JsonResponse($jsonProduct, Response::HTTP_OK, [], true);
        } else {
            return $this->json(['message' => 'erreur dans la recherhe']);
        }
    }
}
