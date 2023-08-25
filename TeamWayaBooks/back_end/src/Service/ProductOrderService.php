<?php

namespace App\Service;

use App\Entity\Address;
use App\Entity\OrderStatus;
use App\Repository\AddressRepository;
use App\Repository\UserAccountRepository;
use App\Repository\AuthorRepository;
use App\Repository\ProductOrderRepository;

class ProductOrderService
{
    private $userRepository;
    private $addressRepository;
    private $authorRepository;
    private $productOrderRepository;

    public function __construct(UserAccountRepository $repository, AddressRepository $addressRepository, AuthorRepository $authorRepository, ProductOrderRepository $productOrderRepository)
    {
        $this->userRepository = $repository;
        $this->addressRepository = $addressRepository;
        $this->authorRepository = $authorRepository;
        $this->productOrderRepository = $productOrderRepository;
    }

    public function findProductOrdersByAddressId(int $id)
    {
        return $this->productOrderRepository->createQueryBuilder('qb')->select('p')->from('\App\Entity\ProductOrder', 'p')
            ->Where('p.delivering_address = :val')
            ->orWhere('p.billing_address = :val')
            ->setParameter('val', $id)
            ->orderBy('p.id', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
