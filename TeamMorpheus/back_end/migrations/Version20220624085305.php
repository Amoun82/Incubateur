<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220624085305 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE product_color (id_product INT NOT NULL, id_color INT NOT NULL, PRIMARY KEY(id_product, id_color))');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE color_id_color_seq CASCADE');
        $this->addSql('ALTER TABLE product_color DROP CONSTRAINT FK_C70A33B588D309D9');
        $this->addSql('DROP INDEX IDX_C70A33B588D309D9');
        $this->addSql('DROP INDEX product_color_pkey');
        $this->addSql('ALTER TABLE product_color ADD PRIMARY KEY (id_product)');
    }
}
