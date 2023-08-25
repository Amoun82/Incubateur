<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['simpleSearch', 'tagProducts', 'ProductsNew', 'categoryProducts', 'detailProducts', 'comListProducts'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['simpleSearch', 'tagProducts', 'ProductsNew', 'categoryProducts', 'comListProducts', 'detailProducts'])]
    private $product_name;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['detailProducts', 'comListProducts'])]
    private $isbn;

    #[ORM\Column(type: 'date')]
    #[Groups(['detailProducts'])]
    private $published_date;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['simpleSearch', 'tagProducts', 'ProductsNew', 'categoryProducts', 'detailProducts'])]
    private $description;

    #[ORM\Column(type: 'text')]
    #[Groups(['detailProducts'])]
    private $description_long;

    #[ORM\Column(type: 'integer')]
    #[Groups(['detailProducts', 'detailProducts'])]
    private $pages;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 2)]
    #[Groups(['simpleSearch', 'tagProducts', 'ProductsNew', 'categoryProducts', 'detailProducts', 'comListProducts'])]
    private $price;

    #[ORM\Column(type: 'integer')]
    #[Groups(['detailProducts', 'comListProducts'])]
    private $stock;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['detailProducts'])]
    private $dimensions;

    #[ORM\Column(type: 'integer')]
    #[Groups(['detailProducts'])]
    private $weight;

    #[ORM\Column(type: 'integer', nullable: true)]
    #[Groups(['detailProducts'])]
    private $discount;

    #[ORM\Column(type: 'boolean')]
    #[Groups(['comListProducts'])]
    private $is_public;

    #[ORM\ManyToOne(targetEntity: Category::class, inversedBy: 'products')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['categoryProducts', 'detailProducts'])]
    private $category;

    #[ORM\ManyToMany(targetEntity: Author::class, inversedBy: 'products')]
    #[Groups(['simpleSearch', 'tagProducts', 'ProductsNew', 'categoryProducts', 'detailProducts'])]
    private $author;

    #[ORM\ManyToOne(targetEntity: Taxe::class, inversedBy: 'products')]
    #[ORM\JoinColumn(nullable: false)]
    private $taxe;

    #[ORM\ManyToMany(targetEntity: Tag::class, inversedBy: 'products')]
    #[Groups(['tagProducts', 'detailProducts'])]
    private $tags;

    #[ORM\ManyToOne(targetEntity: Serie::class, inversedBy: 'products')]
    #[Groups(['detailProducts'])]
    private $serie;

    #[ORM\ManyToOne(targetEntity: ProductLanguage::class, inversedBy: 'products')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['detailProducts'])]
    private $product_language;

    #[ORM\ManyToOne(targetEntity: Editor::class, inversedBy: 'products')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['detailProducts'])]
    private $editor;

    #[ORM\OneToMany(mappedBy: 'comment_product', targetEntity: Comment::class)]
    #[Groups(['detailProducts'])]
    private $comments;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['simpleSearch', 'tagProducts', 'ProductsNew', 'categoryProducts', 'detailProducts'])]
    private $product_image;

    public function __construct()
    {
        $this->author = new ArrayCollection();
        $this->tags = new ArrayCollection();
        $this->comments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProductName(): ?string
    {
        return $this->product_name;
    }

    public function setProductName(string $product_name): self
    {
        $this->product_name = $product_name;

        return $this;
    }

    public function getIsbn(): ?string
    {
        return $this->isbn;
    }

    public function setIsbn(string $isbn): self
    {
        $this->isbn = $isbn;

        return $this;
    }

    public function getPublishedDate(): ?\DateTimeInterface
    {
        return $this->published_date;
    }

    public function setPublishedDate(\DateTimeInterface $published_date): self
    {
        $this->published_date = $published_date;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getDescriptionLong(): ?string
    {
        return $this->description_long;
    }

    public function setDescriptionLong(string $description_long): self
    {
        $this->description_long = $description_long;

        return $this;
    }

    public function getPages(): ?int
    {
        return $this->pages;
    }

    public function setPages(int $pages): self
    {
        $this->pages = $pages;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(int $stock): self
    {
        $this->stock = $stock;

        return $this;
    }

    public function getDimensions(): ?string
    {
        return $this->dimensions;
    }

    public function setDimensions(string $dimensions): self
    {
        $this->dimensions = $dimensions;

        return $this;
    }

    public function getWeight(): ?int
    {
        return $this->weight;
    }

    public function setWeight(int $weight): self
    {
        $this->weight = $weight;

        return $this;
    }

    public function getDiscount(): ?int
    {
        return $this->discount;
    }

    public function setDiscount(?int $discount): self
    {
        $this->discount = $discount;

        return $this;
    }

    public function isIsPublic(): ?bool
    {
        return $this->is_public;
    }

    public function setIsPublic(bool $is_public): self
    {
        $this->is_public = $is_public;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    /**
     * @return Collection<int, Author>
     */
    public function getAuthor(): Collection
    {
        return $this->author;
    }

    public function addAuthor(Author $author): self
    {
        if (!$this->author->contains($author)) {
            $this->author[] = $author;
        }

        return $this;
    }

    public function removeAuthor(Author $author): self
    {
        $this->author->removeElement($author);

        return $this;
    }

    public function getTaxe(): ?Taxe
    {
        return $this->taxe;
    }

    public function setTaxe(?Taxe $taxe): self
    {
        $this->taxe = $taxe;

        return $this;
    }

    /**
     * @return Collection<int, Tag>
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(Tag $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
        }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        $this->tags->removeElement($tag);

        return $this;
    }

    public function getSerie(): ?Serie
    {
        return $this->serie;
    }

    public function setSerie(?Serie $serie): self
    {
        $this->serie = $serie;

        return $this;
    }

    public function getProductLanguage(): ?ProductLanguage
    {
        return $this->product_language;
    }

    public function setProductLanguage(?ProductLanguage $product_language): self
    {
        $this->product_language = $product_language;

        return $this;
    }

    public function getEditor(): ?Editor
    {
        return $this->editor;
    }

    public function setEditor(?Editor $editor): self
    {
        $this->editor = $editor;

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
            $comment->setCommentProduct($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getCommentProduct() === $this) {
                $comment->setCommentProduct(null);
            }
        }

        return $this;
    }

    public function getProductImage(): ?string
    {
        return $this->product_image;
    }

    public function setProductImage(string $product_image): self
    {
        $this->product_image = $product_image;

        return $this;
    }
}
