<?php

namespace App\Entity;

use App\Repository\AddressRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: AddressRepository::class)]
class Address
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['getAddress', "getAddresses", "getUserAccounts", 'getUserAddresses'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotNull(message: 'The Address could not be null')]
    #[Assert\NotBlank(message: 'The Address could not be blank')]
    #[Groups(['getAddress', "getAddresses", "getUserAccounts", "getUserWithAddress", 'getUserAddresses'])]
    private $address;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['getAddress', "getAddresses", "getUserAccounts", "getUserWithAddress", 'getUserAddresses'])]
    private $complement;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotNull(message: 'The Zip code could not be null')]
    #[Assert\NotBlank(message: 'The Zip code could not be blank')]
    #[Groups(['getAddress', "getAddresses", "getUserAccounts", "getUserWithAddress", 'getUserAddresses'])]
    private $zip_code;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotNull(message: 'The City could not be null')]
    #[Assert\NotBlank(message: 'The City could not be blank')]
    #[Groups(['getAddress', "getAddresses", "getUserAccounts", "getUserWithAddress", 'getUserAddresses'])]
    private $city;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotNull(message: 'The Country could not be null')]
    #[Assert\NotBlank(message: 'The Country could not be blank')]
    #[Groups(['getAddress', "getAddresses", "getUserAccounts", "getUserWithAddress", 'getUserAddresses'])]
    private $country;

    #[ORM\ManyToMany(targetEntity: UserAccount::class, mappedBy: 'address')]
    private $userAccounts;

    #[ORM\OneToMany(mappedBy: 'delivering_address', targetEntity: ProductOrder::class)]
    private $productOrderDeliveries;

    #[ORM\OneToMany(mappedBy: 'billing_address', targetEntity: ProductOrder::class)]
    private $productOrderBills;

    public function __construct()
    {
        $this->userAccounts = new ArrayCollection();
        $this->productOrderDeliveries = new ArrayCollection();
        $this->productOrderBills = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getComplement(): ?string
    {
        return $this->complement;
    }

    public function setComplement(?string $complement): self
    {
        $this->complement = $complement;

        return $this;
    }

    public function getZipCode(): ?string
    {
        return $this->zip_code;
    }

    public function setZipCode(string $zip_code): self
    {
        $this->zip_code = $zip_code;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    /**
     * @return Collection<int, UserAccount>
     */
    public function getUserAccounts(): Collection
    {
        return $this->userAccounts;
    }

    public function addUserAccount(UserAccount $userAccount): self
    {
        if (!$this->userAccounts->contains($userAccount)) {
            $this->userAccounts[] = $userAccount;
            $userAccount->addAddress($this);
        }

        return $this;
    }

    public function removeUserAccount(UserAccount $userAccount): self
    {
        if ($this->userAccounts->removeElement($userAccount)) {
            $userAccount->removeAddress($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, ProductOrder>
     */
    public function getProductOrderDeliveries(): Collection
    {
        return $this->productOrderDeliveries;
    }

    public function addProductOrderDelivery(ProductOrder $productOrderDelivery): self
    {
        if (!$this->productOrderDeliveries->contains($productOrderDelivery)) {
            $this->productOrderDeliveries[] = $productOrderDelivery;
            $productOrderDelivery->setDeliveringAddress($this);
        }

        return $this;
    }

    public function removeProductOrderDelivery(ProductOrder $productOrderDelivery): self
    {
        if ($this->productOrderDeliveries->removeElement($productOrderDelivery)) {
            // set the owning side to null (unless already changed)
            if ($productOrderDelivery->getDeliveringAddress() === $this) {
                $productOrderDelivery->setDeliveringAddress(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ProductOrder>
     */
    public function getProductOrderBills(): Collection
    {
        return $this->productOrderBills;
    }

    public function addProductOrderBill(ProductOrder $productOrderBill): self
    {
        if (!$this->productOrderBills->contains($productOrderBill)) {
            $this->productOrderBills[] = $productOrderBill;
            $productOrderBill->setBillingAddress($this);
        }

        return $this;
    }

    public function removeProductOrderBill(ProductOrder $productOrderBill): self
    {
        if ($this->productOrderBills->removeElement($productOrderBill)) {
            // set the owning side to null (unless already changed)
            if ($productOrderBill->getBillingAddress() === $this) {
                $productOrderBill->setBillingAddress(null);
            }
        }

        return $this;
    }
}
