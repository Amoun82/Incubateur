<?php

namespace App\Entity;

use App\Repository\TaxeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TaxeRepository::class)]
class Taxe
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $taxe_name;

    #[ORM\Column(type: 'decimal', precision: 4, scale: 2)]
    private $taxe_value;

    #[ORM\OneToMany(mappedBy: 'taxe', targetEntity: Product::class)]
    private $products;

    public function __construct()
    {
        $this->products = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTaxeName(): ?string
    {
        return $this->taxe_name;
    }

    public function setTaxeName(string $taxe_name): self
    {
        $this->taxe_name = $taxe_name;

        return $this;
    }

    public function getTaxeValue(): ?string
    {
        return $this->taxe_value;
    }

    public function setTaxeValue(string $taxe_value): self
    {
        $this->taxe_value = $taxe_value;

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
            $product->setTaxe($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        if ($this->products->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getTaxe() === $this) {
                $product->setTaxe(null);
            }
        }

        return $this;
    }
}
