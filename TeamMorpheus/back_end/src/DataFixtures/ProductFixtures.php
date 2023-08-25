<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\Product;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class ProductFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {

        require_once 'vendor/autoload.php';

        $faker = Factory::create('fr_FR');


        for ($i = 0; $i < 50; $i++) {
            $product = (new Product())
                ->setName($faker->company())
                ->setTag($faker->words(1, true))
                ->setDescription($faker->realText(200, 2))
                ->setWeight($faker->randomFloat())
                ->setMaterial($faker->words(1, true))
                ->setBrand($faker->words(1, true))
                ->setQuantity($faker->randomDigit())
                ->setPrice($faker->numberBetween(0, 100))
                ->setImglink($faker->imageUrl(640, 480, '', true));
            $manager->persist($product);
        }


        $manager->flush();
    }
}
