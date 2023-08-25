<?php

namespace App\Service;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Symfony\Component\Validator\ConstraintViolationListInterface;

class CategoryService
{
    private $CategoryRepository;

    public function __construct(CategoryRepository $repository)
    {
        $this->CategoryRepository = $repository;
    }

    public function selectCategoryByPartentId(int $id)
    {
        // requete pour recupere le produit par rapport aa la category
        $queryCategory = $this->CategoryRepository->createQueryBuilder('category')
            ->select('c')
            ->from('App\Entity\Category', 'c')
            ->where('c.id = :id')
            ->setParameter('id', $id);

        return $queryCategory->getQuery()->getResult();
    }

    public function getChlidrenByCategoryId(int $id)
    {

        $queryCategory = $this->CategoryRepository->createQueryBuilder('category')
            ->select('c')
            ->from('App\Entity\Category', 'c')
            ->innerJoin('c.parent', 'parent')
            ->where('parent.id = :id')
            ->setParameter('id', $id);

        return $queryCategory->getQuery()->getResult();
    }

    public function findAll()
    {
        return $this->CategoryRepository->findAll();
    }

    public function find($id)
    {
        return $this->CategoryRepository->find($id);
    }

    public function categorySave(Category $category, Bool $flag)
    {
        $this->CategoryRepository->add($category, $flag);
    }

    public function categoryDelete(Category $category, Bool $flag)
    {
        $this->CategoryRepository->remove($category, $flag);
    }

    public function categoryFormatValidateMessage(ConstraintViolationListInterface $violations): array
    {
        $response = [];
        $tmpErrors = (string) $violations;
        $errorsArray = explode('The ', $tmpErrors);
        for ($i = 1; $i < count($errorsArray); $i++) {
            $response[] = substr($errorsArray[$i], 0, - (strlen($errorsArray[$i]) - strpos($errorsArray[$i], ' (')));
        }
        return $response;
    }

    public function categoryCheck(array $datas): array
    {
        $errors = [];
        if (!array_key_exists("name", $datas)) {
            $errors[] = "Name missing";
        } else {
            if ($datas['name'] === "") {
                $errors[] = "Name Empty";
            }
        }
        if (!array_key_exists("description", $datas)) {
            $errors[] = "Description missing";
        } else {
            if ($datas['description'] === "") {
                $errors[] = "Description Empty";
            }
        }
        $optionsInt = array(
            'options' => array(
                'default' => null,
                'min_range' => 1
            ),
            'flags' => FILTER_NULL_ON_FAILURE,
        );
        if (!array_key_exists("parent", $datas)) {
            $errors[] = "Parent missing";
        } else {
            if (!($datas['parent'] === 0 || $datas['parent'] === "0")) {
                if ($datas["parent"] === true) {
                    $errors[] = "Invalid Parent";
                } else if (!filter_var($datas["parent"], FILTER_VALIDATE_INT, $optionsInt)) {
                    $errors[] = "Invalid Parent not int";
                }
            }
        }

        return $errors;
    }

    public function getCategoryById(int $id)
    {
        return $this->CategoryRepository->find($id);
    }
}
