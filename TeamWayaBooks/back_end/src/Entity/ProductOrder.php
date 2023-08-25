<?php

namespace App\Entity;

use App\Repository\ProductOrderRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductOrderRepository::class)]
class ProductOrder
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'datetime')]
    private $order_date;

    #[ORM\ManyToOne(targetEntity: Address::class, inversedBy: 'productOrderDeliveries')]
    #[ORM\JoinColumn(nullable: false)]
    private $delivering_address;

    #[ORM\ManyToOne(targetEntity: Address::class, inversedBy: 'productOrderBills')]
    #[ORM\JoinColumn(nullable: false)]
    private $billing_address;

    #[ORM\ManyToOne(targetEntity: OrderStatus::class, inversedBy: 'productOrders')]
    #[ORM\JoinColumn(nullable: false)]
    private $order_status;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOrderDate(): ?\DateTimeInterface
    {
        return $this->order_date;
    }

    public function setOrderDate(\DateTimeInterface $order_date): self
    {
        $this->order_date = $order_date;

        return $this;
    }

    public function getDeliveringAddress(): ?Address
    {
        return $this->delivering_address;
    }

    public function setDeliveringAddress(?Address $delivering_address): self
    {
        $this->delivering_address = $delivering_address;

        return $this;
    }

    public function getBillingAddress(): ?Address
    {
        return $this->billing_address;
    }

    public function setBillingAddress(?Address $billing_address): self
    {
        $this->billing_address = $billing_address;

        return $this;
    }

    public function getOrderStatus(): ?OrderStatus
    {
        return $this->order_status;
    }

    public function setOrderStatus(?OrderStatus $order_status): self
    {
        $this->order_status = $order_status;

        return $this;
    }
}
