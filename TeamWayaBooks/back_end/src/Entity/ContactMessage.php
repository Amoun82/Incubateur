<?php

namespace App\Entity;

use App\Repository\ContactMessageRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ContactMessageRepository::class)]
class ContactMessage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $subject;

    #[ORM\Column(type: 'string', length: 255)]
    private $message;

    #[ORM\Column(type: 'datetime')]
    private $message_date;

    #[ORM\Column(type: 'boolean')]
    private $is_answered;

    #[ORM\ManyToOne(targetEntity: UserAccount::class, inversedBy: 'contactFromMessages')]
    #[ORM\JoinColumn(nullable: false)]
    private $message_from;

    #[ORM\ManyToOne(targetEntity: UserAccount::class, inversedBy: 'contactToMessages')]
    #[ORM\JoinColumn(nullable: false)]
    private $message_to;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSubject(): ?string
    {
        return $this->subject;
    }

    public function setSubject(string $subject): self
    {
        $this->subject = $subject;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getMessageDate(): ?\DateTimeInterface
    {
        return $this->message_date;
    }

    public function setMessageDate(\DateTimeInterface $message_date): self
    {
        $this->message_date = $message_date;

        return $this;
    }

    public function isIsAnswered(): ?bool
    {
        return $this->is_answered;
    }

    public function setIsAnswered(bool $is_answered): self
    {
        $this->is_answered = $is_answered;

        return $this;
    }

    public function getMessageFrom(): ?UserAccount
    {
        return $this->message_from;
    }

    public function setMessageFrom(?UserAccount $message_from): self
    {
        $this->message_from = $message_from;

        return $this;
    }

    public function getMessageTo(): ?UserAccount
    {
        return $this->message_to;
    }

    public function setMessageTo(?UserAccount $message_to): self
    {
        $this->message_to = $message_to;

        return $this;
    }
}
