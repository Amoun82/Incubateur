<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220627093723 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP SEQUENCE role_id_role_seq CASCADE');
        $this->addSql('ALTER TABLE address ALTER city TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE address ALTER name TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE address ALTER street TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE address ALTER address_aux TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE address ALTER postal_code TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE category ALTER name TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE size ALTER name TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE "user" ALTER email TYPE VARCHAR(255)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE SEQUENCE role_id_role_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('ALTER TABLE category ALTER name TYPE VARCHAR(50)');
        $this->addSql('ALTER TABLE size ALTER name TYPE VARCHAR(50)');
        $this->addSql('ALTER TABLE "user" ALTER email TYPE VARCHAR(180)');
        $this->addSql('ALTER TABLE address ALTER city TYPE VARCHAR(50)');
        $this->addSql('ALTER TABLE address ALTER name TYPE VARCHAR(50)');
        $this->addSql('ALTER TABLE address ALTER street TYPE VARCHAR(50)');
        $this->addSql('ALTER TABLE address ALTER address_aux TYPE VARCHAR(50)');
        $this->addSql('ALTER TABLE address ALTER postal_code TYPE VARCHAR(50)');
    }
}
