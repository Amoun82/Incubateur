<?php

namespace App\Entity;

use App\Repository\UserRoleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserRoleRepository::class)]
class UserRole
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $user_role_name;

    #[ORM\ManyToMany(targetEntity: UserAccount::class, mappedBy: 'user_role')]
    private $userAccounts;

    public function __construct()
    {
        $this->userAccounts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserRoleName(): ?string
    {
        return $this->user_role_name;
    }

    public function setUserRoleName(string $user_role_name): self
    {
        $this->user_role_name = $user_role_name;

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
            $userAccount->addUserRole($this);
        }

        return $this;
    }

    public function removeUserAccount(UserAccount $userAccount): self
    {
        if ($this->userAccounts->removeElement($userAccount)) {
            $userAccount->removeUserRole($this);
        }

        return $this;
    }
}
