<?php

namespace App\Service;

use App\Entity\Address;
use App\Entity\Editor;
use App\Repository\AddressRepository;
use App\Repository\EditorRepository;

class EditorService
{
    private $addressRepository;
    private $editorRepository;

    public function __construct(AddressRepository $addressRepository, EditorRepository $editorRepository)
    {
        $this->addressRepository = $addressRepository;
        $this->editorRepository = $editorRepository;
    }

    public function findEditorsByAddressId(int $id)
    {
        return $this->editorRepository->createQueryBuilder('qb')->from('\App\Entity\Editor', 'e')
            ->Where('e.address = :val')
            ->setParameter('val', $id)
            ->orderBy('e.id', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
