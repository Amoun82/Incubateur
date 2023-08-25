<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220628091027 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE address_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE author_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE category_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE command_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE command_state_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE contact_message_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE editor_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE product_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE product_language_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE serie_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE tag_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE taxe_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE user_role_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE address (id INT NOT NULL, address VARCHAR(255) NOT NULL, complement VARCHAR(255) DEFAULT NULL, zip_code VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE author (id INT NOT NULL, author_firstname VARCHAR(255) DEFAULT NULL, author_lastname VARCHAR(255) NOT NULL, informations TEXT NOT NULL, author_image VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE category (id INT NOT NULL, parent_id INT DEFAULT NULL, category_name VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_64C19C1727ACA70 ON category (parent_id)');
        $this->addSql('CREATE TABLE command (id INT NOT NULL, command_date TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE command_state (id INT NOT NULL, command_state_name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE contact_message (id INT NOT NULL, subject VARCHAR(255) NOT NULL, message VARCHAR(255) NOT NULL, message_date TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, is_answered BOOLEAN NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE editor (id INT NOT NULL, address_id INT NOT NULL, editor_name VARCHAR(255) NOT NULL, mail VARCHAR(255) NOT NULL, web_address VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_CCF1F1BAF5B7AF75 ON editor (address_id)');
        $this->addSql('CREATE TABLE product (id INT NOT NULL, product_name VARCHAR(255) NOT NULL, isbn VARCHAR(255) NOT NULL, published_date DATE NOT NULL, description VARCHAR(255) NOT NULL, description_long TEXT NOT NULL, pages INT NOT NULL, price NUMERIC(10, 2) NOT NULL, stock INT NOT NULL, dimensions VARCHAR(255) NOT NULL, weight INT NOT NULL, discount INT DEFAULT NULL, is_public BOOLEAN NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE product_language (id INT NOT NULL, product_language_name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE serie (id INT NOT NULL, serie_name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE tag (id INT NOT NULL, tag_name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE taxe (id INT NOT NULL, taxe_name VARCHAR(255) NOT NULL, taxe_value NUMERIC(4, 2) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE user_role (id INT NOT NULL, user_role_name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE category ADD CONSTRAINT FK_64C19C1727ACA70 FOREIGN KEY (parent_id) REFERENCES category (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE editor ADD CONSTRAINT FK_CCF1F1BAF5B7AF75 FOREIGN KEY (address_id) REFERENCES address (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE editor DROP CONSTRAINT FK_CCF1F1BAF5B7AF75');
        $this->addSql('ALTER TABLE category DROP CONSTRAINT FK_64C19C1727ACA70');
        $this->addSql('DROP SEQUENCE address_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE author_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE category_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE command_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE command_state_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE contact_message_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE editor_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE product_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE product_language_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE serie_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE tag_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE taxe_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE user_role_id_seq CASCADE');
        $this->addSql('DROP TABLE address');
        $this->addSql('DROP TABLE author');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE command');
        $this->addSql('DROP TABLE command_state');
        $this->addSql('DROP TABLE contact_message');
        $this->addSql('DROP TABLE editor');
        $this->addSql('DROP TABLE product');
        $this->addSql('DROP TABLE product_language');
        $this->addSql('DROP TABLE serie');
        $this->addSql('DROP TABLE tag');
        $this->addSql('DROP TABLE taxe');
        $this->addSql('DROP TABLE user_role');
    }
}
