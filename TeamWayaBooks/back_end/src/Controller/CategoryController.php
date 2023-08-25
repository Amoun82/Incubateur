<?php

namespace App\Controller;

use App\Entity\Category;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Service\CategoryService;
use PhpParser\Node\Expr\ErrorSuppress;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class CategoryController extends AbstractController
{
    #[Route('api/category/link/{id}', name: 'app_category_link', methods: ["GET"])]
    public function getLinkCategory(int $id, CategoryService $CategoryService, SerializerInterface $serializer): JsonResponse
    {

        $category = $CategoryService->selectCategoryByPartentId($id);

        if (!empty($category)) {

            $tabCategory = [];
            $tempCategory = $category[0];

            while ($tempCategory != null) {
                array_push($tabCategory, $tempCategory);
                $tempCategory = $tempCategory->getParent();
            }

            $jsonCategory = $serializer->serialize($tabCategory, 'json', ['groups' => 'categoryLink']);

            return new JsonResponse($jsonCategory, Response::HTTP_OK, [], true);
        } else {
            return new JsonResponse(["message" => "pas de resultat"], Response::HTTP_NOT_FOUND, [], false);
        }
    }

    #[Route('api/category/children/{id}', name: 'app_category_children', methods: ["GET"])]
    public function getChlidren(CategoryService $CategoryService, SerializerInterface $serializer, int $id): JsonResponse
    {
        //dd($CategoryService->selectCategoryByPartentId(12));
        $categories = $CategoryService->getChlidrenByCategoryId($id);
        $jsonCategories = $serializer->serialize($categories, 'json', ['groups' => 'categoryLink']);
        return new JsonResponse($jsonCategories, Response::HTTP_OK, [], true);
    }

    #[Route('api/commercial/categories', name: 'app_commercial_categories', methods: ["GET"])]
    #[IsGranted('ROLE_COMMERCIAL')]
    public function getCategories(CategoryService $categoryService, SerializerInterface $serializer): JsonResponse
    {
        $categories = $categoryService->findAll();
        $jsonCategories = $serializer->serialize($categories, 'json', ['groups' => 'comListCategories']);
        return new JsonResponse($jsonCategories, Response::HTTP_OK, [], true);
    }

    #[Route('api/commercial/categories/short', name: 'app_commercial_categories_short', methods: ["GET"])]
    #[IsGranted('ROLE_COMMERCIAL')]
    public function getCategoriesShort(CategoryService $categoryService, SerializerInterface $serializer): JsonResponse
    {
        $categories = $categoryService->findAll();
        $jsonCategories = $serializer->serialize($categories, 'json', ['groups' => 'comCategories']);
        return new JsonResponse($jsonCategories, Response::HTTP_OK, [], true);
    }

    #[Route('api/commercial/categories/{id}', name: 'app_commercial_category', methods: ["GET"])]
    #[IsGranted('ROLE_COMMERCIAL')]
    public function getCategory(int $id, CategoryService $categoryService, SerializerInterface $serializer): JsonResponse
    {
        $category = $categoryService->find($id);
        if (!$category) return new  JsonResponse(['message' => 'Inexistant Category'], Response::HTTP_BAD_REQUEST, [], false);
        $jsonCategory = $serializer->serialize($category, 'json', ['groups' => 'comListCategories']);
        return new JsonResponse($jsonCategory, Response::HTTP_OK, [], true);
    }

    #[Route('api/commercial/categories', name: 'app_commercial_categories_add', methods: ["POST"])]
    #[IsGranted('ROLE_COMMERCIAL')]
    public function addCategory(Request $request, CategoryService $categoryService, SerializerInterface $serializer, ValidatorInterface $validator, UrlGeneratorInterface $urlGenerator): JsonResponse
    {
        try {
            $data = $request->toArray();
            $errorsCategory = $categoryService->categoryCheck($data);
            if (count($errorsCategory) < 1) {
                $category = new Category();
                $category->setDescription($data['description']);
                $category->setCategoryName($data['name']);
                if (!($data['parent'] === 0 || $data['parent'] === "0")) {
                    $parent = $categoryService->getCategoryById($data["parent"]);
                    if ($parent !== null) {
                        $category->setParent($parent);
                    } else {
                        return new JsonResponse(['message' => 'Inexistant parent'], Response::HTTP_BAD_REQUEST, [], false);
                    }
                } else {
                    $category->setParent(null);
                }
                $categoryService->categorySave($category, true);
                $jsonCategory = $serializer->serialize($category, 'json', ['groups' => 'comListCategories']);
                $location = $urlGenerator->generate('app_commercial_category', ['id' => $category->getId()], UrlGeneratorInterface::ABSOLUTE_URL);
                return new JsonResponse($jsonCategory, Response::HTTP_OK, ['location' => $location], true);
            } else {
                return new JsonResponse(['message' => $errorsCategory], Response::HTTP_BAD_REQUEST, [], false);
            }
        } catch (\Throwable $th) {
            if ($th instanceof NotEncodableValueException) {
                return new JsonResponse(['message' => 'Invalid Json.'], Response::HTTP_BAD_REQUEST, [], false);
            }
            return new JsonResponse(['message' => 'Bad Request.'], Response::HTTP_BAD_REQUEST, [], false);
        }
    }

    #[Route('api/commercial/categories/{id}', name: 'app_commercial_categories_update', methods: ["PATCH"])]
    #[IsGranted('ROLE_COMMERCIAL')]
    public function updateCategory(int $id, Request $request, CategoryService $categoryService, SerializerInterface $serializer): JsonResponse
    {
        try {
            $data = $request->toArray();
            $errorsCategory = $categoryService->categoryCheck($data);
            if (count($errorsCategory) < 1) {
                $category = $categoryService->find($id);
                if (!$category) return new  JsonResponse(['message' => 'Inexistant Category'], Response::HTTP_BAD_REQUEST, [], false);
                $category->setDescription($data['description']);
                $category->setCategoryName($data['name']);
                if (!($data['parent'] === 0 || $data['parent'] === "0")) {
                    $parent = $categoryService->getCategoryById($data["parent"]);
                    if ($parent !== null) {
                        $category->setParent($parent);
                    } else {
                        return new JsonResponse(['message' => 'Inexistant Parent'], Response::HTTP_BAD_REQUEST, [], false);
                    }
                } else {
                    $category->setParent(null);
                }
                $categoryService->categorySave($category, true);
                return new JsonResponse(null, Response::HTTP_OK, [], false);
            } else {
                return new JsonResponse(['message' => $errorsCategory], Response::HTTP_BAD_REQUEST, [], false);
            }
        } catch (\Throwable $th) {
            if ($th instanceof NotEncodableValueException) {
                return new JsonResponse(['message' => 'Invalid Json.'], Response::HTTP_BAD_REQUEST, [], false);
            }
            return new JsonResponse(['message' => 'Bad Request.'], Response::HTTP_BAD_REQUEST, [], false);
        }
    }

    #[Route('api/commercial/categories/{id}', name: 'app_commercial_categories_delete', methods: ["DELETE"])]
    #[IsGranted('ROLE_COMMERCIAL')]
    public function deleteCategory(int $id, CategoryService $categoryService): JsonResponse
    {
        try {
            $category = $categoryService->find($id);
            if (!$category)  return new JsonResponse(['message' => 'Inexistant Category.'], Response::HTTP_BAD_REQUEST, [], false);
            if ($category->getProducts()->count() > 0) {
                return new JsonResponse(['message' => 'Category with at least a product.'], Response::HTTP_BAD_REQUEST, [], false);
            } else {
                if ($category->getCategories()->count() > 0) {
                    return new JsonResponse(['message' => 'Category with at least a child.'], Response::HTTP_BAD_REQUEST, [], false);
                }
                $categoryService->categoryDelete($category, true);
                return new JsonResponse(['message' => 'Category deleted.'], Response::HTTP_OK, [], false);
            }
        } catch (\Throwable $th) {
            return new JsonResponse(['message' => 'Bad Request.'], Response::HTTP_BAD_REQUEST, [], false);
        }
    }
}
