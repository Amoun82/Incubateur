<?php

namespace App\Entity;

use App\Repository\CommentRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommentRepository::class)]
class Comment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'date')]
    private $comment_date;

    #[ORM\Column(type: 'integer')]
    private $evaluation;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $comment;

    #[ORM\ManyToOne(targetEntity: UserAccount::class, inversedBy: 'comments')]
    #[ORM\JoinColumn(nullable: false)]
    private $comment_user;

    #[ORM\ManyToOne(targetEntity: Product::class, inversedBy: 'comments')]
    #[ORM\JoinColumn(nullable: false)]
    private $comment_product;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCommentDate(): ?\DateTimeInterface
    {
        return $this->comment_date;
    }

    public function setCommentDate(\DateTimeInterface $comment_date): self
    {
        $this->comment_date = $comment_date;

        return $this;
    }

    public function getEvaluation(): ?int
    {
        return $this->evaluation;
    }

    public function setEvaluation(int $evaluation): self
    {
        $this->evaluation = $evaluation;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getCommentUser(): ?UserAccount
    {
        return $this->comment_user;
    }

    public function setCommentUser(?UserAccount $comment_user): self
    {
        $this->comment_user = $comment_user;

        return $this;
    }

    public function getCommentProduct(): ?Product
    {
        return $this->comment_product;
    }

    public function setCommentProduct(?Product $comment_product): self
    {
        $this->comment_product = $comment_product;

        return $this;
    }
}
