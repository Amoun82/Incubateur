<?php

namespace App\Entity;

use App\Repository\ProductLanguageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProductLanguageRepository::class)]
class ProductLanguage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['detailProducts'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['detailProducts'])]
    private $product_language_name;

    #[ORM\OneToMany(mappedBy: 'product_language', targetEntity: Product::class)]
    private $products;

    public function __construct()
    {
        $this->products = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProductLanguageName(): ?string
    {
        return $this->product_language_name;
    }

    public function setProductLanguageName(string $product_language_name): self
    {
        $this->product_language_name = $product_language_name;

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
            $product->setProductLanguage($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        if ($this->products->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getProductLanguage() === $this) {
                $product->setProductLanguage(null);
            }
        }

        return $this;
    }
}
