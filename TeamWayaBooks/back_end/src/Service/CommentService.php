<?php

namespace App\Service;

use App\Entity\Comment;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManager;

// use Symfony\Component\Validator\ConstraintViolationListInterface;

class CommentService
{

    private $commentRepository;

    public function __construct(CommentRepository $repository)
    {
        $this->commentRepository = $repository;
    }

    public function getCommentsAverageAndTotalByProductId(int $id): array
    {
        $test = $this->commentRepository->createQueryBuilder('comsAT');

        // $test->select($test->expr()->countDistinct('c'))
        // $test->select('COUNT(DISTINCT c)')
        $test->select('COUNT(DISTINCT c) as countEvaluations, AVG(c.evaluation) as averageEvaluation')
            ->from('App\Entity\Comment', 'c')
            ->where('c.comment_product = :id')
            ->setParameter('id', $id);
        $query = $test->getQuery();
        $result = $query->getResult();
        return $result;
    }

    public function getCommentsAverageByProductId(int $id): mixed
    {
        $test = $this->commentRepository->createQueryBuilder('comsA');
        $test->select('AVG(c.evaluation)')
            ->from('App\Entity\Comment', 'c')
            ->where('c.comment_product = :id')
            ->setParameter('id', $id);
        $query = $test->getQuery();
        $result = $query->getSingleScalarResult();
        return $result;
    }

    public function getCommentsTotalByProductId(int $id): mixed
    {
        $test = $this->commentRepository->createQueryBuilder('comsT');
        $test->select('COUNT(DISTINCT c)')
            ->from('App\Entity\Comment', 'c')
            ->where('c.comment_product = :id')
            ->setParameter('id', $id);
        $query = $test->getQuery();
        $result = $query->getSingleScalarResult();
        return $result;
    }
}
