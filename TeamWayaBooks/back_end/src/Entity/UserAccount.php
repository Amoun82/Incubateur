<?php

namespace App\Entity;

use App\Repository\UserAccountRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: UserAccountRepository::class)]
class UserAccount implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(["getAddresses", "getUserAccounts", "getUserWithAddress", "getUser", "getUserEdit"])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotNull(message: 'The Firstname could not be null')]
    #[Assert\NotBlank(message: 'The Firstname could not be blank')]
    #[Groups(["getAddresses", "getUserAccounts", "getUserWithAddress", "getUser", "getUserEdit"])]
    private $firstname;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotNull(message: 'The Lastname could not be null')]
    #[Assert\NotBlank(message: 'The Lastname could not be blank')]
    #[Groups(["getAddresses", "getUserAccounts", "getUserWithAddress", "getUser", "getUserEdit"])]
    private $lastname;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\Email(message: 'The Email {{ value }} is not a valid email.')]
    #[Assert\NotNull(message: 'The Email could not be null')]
    #[Assert\NotBlank(message: 'The Email could not be blank')]
    #[Groups(["getAddresses", "getUserAccounts", "getUserWithAddress", "getUser", "getUserEmail", "getUserEdit"])]
    private $email;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotNull(message: 'The Password could not be null')]
    #[Assert\NotBlank(message: 'The Password could not be blank')]
    #[Groups(["getAddresses", "getUserAccounts"])]
    private $password;

    #[ORM\ManyToMany(targetEntity: UserRole::class, inversedBy: 'userAccounts')]
    #[Groups(["getAddresses", "getUserAccounts"])]
    private $user_role;

    #[ORM\ManyToMany(targetEntity: Address::class, inversedBy: 'userAccounts')]
    #[Groups(["getUserAccounts", "getUserWithAddress", 'getUserAddresses'])]
    private $address;

    #[ORM\OneToMany(mappedBy: 'comment_user', targetEntity: Comment::class)]
    private $comments;

    #[ORM\OneToMany(mappedBy: 'message_from', targetEntity: ContactMessage::class)]
    private $contactFromMessages;

    #[ORM\OneToMany(mappedBy: 'message_to', targetEntity: ContactMessage::class)]
    private $contactToMessages;

    #[Groups(["getUser"])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $token;

    #[Groups(["getUser"])]
    #[ORM\Column(type: 'boolean', nullable: true)]
    private $isChecked;

    public function __construct()
    {
        $this->user_role = new ArrayCollection();
        $this->address = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->contactFromMessages = new ArrayCollection();
        $this->contactToMessages = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @return Collection<int, UserRole>
     */
    public function getUserRole(): Collection
    {
        return $this->user_role;
    }

    public function addUserRole(UserRole $userRole): self
    {
        if (!$this->user_role->contains($userRole)) {
            $this->user_role[] = $userRole;
        }

        return $this;
    }

    public function removeUserRole(UserRole $userRole): self
    {
        $this->user_role->removeElement($userRole);

        return $this;
    }

    /**
     * @return Collection<int, Address>
     */
    public function getAddress(): Collection
    {
        return $this->address;
    }

    public function addAddress(Address $address): self
    {
        if (!$this->address->contains($address)) {
            $this->address[] = $address;
        }

        return $this;
    }

    public function removeAddress(Address $address): self
    {
        $this->address->removeElement($address);

        return $this;
    }

    /**
     * @return Collection<int, Comment>
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setCommentUser($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getCommentUser() === $this) {
                $comment->setCommentUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ContactMessage>
     */
    public function getContactFromMessages(): Collection
    {
        return $this->contactFromMessages;
    }

    public function addContactFromMessage(ContactMessage $contactFromMessage): self
    {
        if (!$this->contactFromMessages->contains($contactFromMessage)) {
            $this->contactFromMessages[] = $contactFromMessage;
            $contactFromMessage->setMessageFrom($this);
        }

        return $this;
    }

    public function removeContactFromMessage(ContactMessage $contactFromMessage): self
    {
        if ($this->contactFromMessages->removeElement($contactFromMessage)) {
            // set the owning side to null (unless already changed)
            if ($contactFromMessage->getMessageFrom() === $this) {
                $contactFromMessage->setMessageFrom(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ContactMessage>
     */
    public function getContactToMessages(): Collection
    {
        return $this->contactToMessages;
    }

    public function addContactToMessage(ContactMessage $contactToMessage): self
    {
        if (!$this->contactToMessages->contains($contactToMessage)) {
            $this->contactToMessages[] = $contactToMessage;
            $contactToMessage->setMessageTo($this);
        }

        return $this;
    }

    public function removeContactToMessage(ContactMessage $contactToMessage): self
    {
        if ($this->contactToMessages->removeElement($contactToMessage)) {
            // set the owning side to null (unless already changed)
            if ($contactToMessage->getMessageTo() === $this) {
                $contactToMessage->setMessageTo(null);
            }
        }

        return $this;
    }

    public function getUserIdentifier(): string
    {
        return $this->getEmail();
    }

    public function getUsername(): string
    {
        return $this->getEmail();
    }

    public function getRoles(): array
    {
        $roles = [];
        $rolesList = $this->getUserRole();
        foreach ($rolesList as $key => $value) {
            if (!in_array($value->getUserRoleName(), $roles)) {
                $roles[] = $value->getUserRoleName();
            }
        }

        return $roles;
    }
    public function getSalt(): ?string
    {
        return null;
    }

    public function eraseCredentials()
    {
    }

    public function getToken(): ?string
    {
        return $this->token;
    }

    public function setToken(?string $token): self
    {
        $this->token = $token;

        return $this;
    }

    public function isIsChecked(): ?bool
    {
        return $this->isChecked;
    }

    public function setIsChecked(?bool $isChecked): self
    {
        $this->isChecked = $isChecked;

        return $this;
    }
}
