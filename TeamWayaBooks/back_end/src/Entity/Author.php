<?php

namespace App\Entity;

use App\Repository\AuthorRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: AuthorRepository::class)]
class Author
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['simpleSearch','tagProducts', 'ProductsNew', 'categoryProducts', 'detailProducts'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['simpleSearch','tagProducts', 'ProductsNew', 'categoryProducts', 'detailProducts'])]
    private $author_firstname;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['simpleSearch','tagProducts', 'ProductsNew', 'categoryProducts', 'detailProducts'])]
    private $author_lastname;

    #[ORM\Column(type: 'text')]
    private $informations;

    #[ORM\Column(type: 'string', length: 255)]
    private $author_image;

    #[ORM\ManyToMany(targetEntity: Product::class, mappedBy: 'author')]
    private $products;

    public function __construct()
    {
        $this->products = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAuthorFirstname(): ?string
    {
        return $this->author_firstname;
    }

    public function setAuthorFirstname(?string $author_firstname): self
    {
        $this->author_firstname = $author_firstname;

        return $this;
    }

    public function getAuthorLastname(): ?string
    {
        return $this->author_lastname;
    }

    public function setAuthorLastname(string $author_lastname): self
    {
        $this->author_lastname = $author_lastname;

        return $this;
    }

    public function getInformations(): ?string
    {
        return $this->informations;
    }

    public function setInformations(string $informations): self
    {
        $this->informations = $informations;

        return $this;
    }

    public function getAuthorImage(): ?string
    {
        return $this->author_image;
    }

    public function setAuthorImage(string $author_image): self
    {
        $this->author_image = $author_image;

        return $this;
    }

    /**
     * @return Collection<int, Product>
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Product $product): self
    {
        if (!$this->products->contains($product)) {
            $this->products[] = $product;
            $product->addAuthor($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        if ($this->products->removeElement($product)) {
            $product->removeAuthor($this);
        }

        return $this;
    }
}
