<?php

namespace App\Service;

use App\Entity\Product;
use App\Repository\ProductRepository;
use App\Repository\UserRoleRepository;
use Doctrine\ORM\EntityManagerInterface;

class ProductService
{
    private $productRepository;

    public function __construct(ProductRepository $repository)
    {
        $this->productRepository = $repository;
    }

    public function detailProductById(int $id)
    {
         // requete pour recupere le produit par rapport au tag
         $queryTag = $this->productRepository->createQueryBuilder('product')
         ->select('p')
         ->from('App\Entity\Product','p')
         ->where('p.id = :id')
         ->setParameter('id', $id)
         ->orderBy('p.id','ASC');
 
         return $queryTag->getQuery()->getSingleResult();
    }

    public function selectProductsByTagId(int $id)
    {
        // requete pour recupere le produit par rapport au tag
        $queryTag = $this->productRepository->createQueryBuilder('product')
            ->select('p')
            ->from('App\Entity\Product', 'p')
            ->innerJoin('p.tags', 'tags')
            ->where('tags.id = :id')
            ->setParameter('id', $id)
            ->orderBy('p.id', 'ASC');

        return $queryTag->getQuery()->getResult();
    }

    public function countProductsByTagId(int $id)
    {
         // requete pour recupere le produit par rapport au tag
         $queryTag = $this->productRepository->createQueryBuilder('product')
            ->select('COUNT(DISTINCT p.id)')
            ->from('App\Entity\Product', 'p')
            ->innerJoin('p.tags', 'tags')
            ->where('tags.id = :id')
            ->setParameter('id', $id);
         
         return $queryTag->getQuery()->getSingleScalarResult();
    }

    public function selectProductsByCategoryId(int $id)
    {
        // requete pour recupere le produit par rapport a la category
        $queryTag = $this->productRepository->createQueryBuilder('product')
            ->select('p')
            ->from('App\Entity\Product', 'p')
            ->innerJoin('p.category', 'category')
            ->where('category.id = :id')
            ->setParameter('id', $id)
            ->orderBy('p.id', 'ASC');

        return $queryTag->getQuery()->getResult();
    }

    public function countProductsByCategoryId(int $id)
    {
         // requete pour recupere le produit par rapport a la category
         $queryTag = $this->productRepository->createQueryBuilder('product')
         ->select('COUNT(DISTINCT p.id)')
         ->from('App\Entity\Product', 'p')
         ->innerJoin('p.category', 'category')
         ->where('category.id = :id')
         ->setParameter('id', $id);
         
         return $queryTag->getQuery()->getSingleScalarResult();
    }

    public function searchSimple(string $search)
    {
        $result = $this->productRepository->findBy(['product_name' => "$search"]);
        if (!$result) {
            return null;
        }
        return $result[0];
    }

    public function allProduct(int $page = 1, int $limit = 8)
    {
        $result = $this->productRepository->findAllWithPagination($page, $limit);
        return $result;
    }

    public function findByWord($keyword)
    {
        $query = $this->productRepository->createQueryBuilder('a')
            ->where('a.product_name LIKE :key')->orWhere('a.description LIKE :key')
            ->setParameter('key', '%' . $keyword . '%')->getQuery();

        return $query->getResult();
    }

    public function findAll()
    {
        return $this->productRepository->findAll();
    }

    public function countProducts()
    {
         // requete pour recupere le produit par rapport au tag
         $queryTag = $this->productRepository->createQueryBuilder('product')
         ->select('COUNT(DISTINCT p.id)')
         ->from('App\Entity\Product','p');
         
         return $queryTag->getQuery()->getSingleScalarResult();
    }

    public function findOneById(int $id): ?Product
    {
        return $this->productRepository->findOneBy(['id' => $id]);
    }
}
