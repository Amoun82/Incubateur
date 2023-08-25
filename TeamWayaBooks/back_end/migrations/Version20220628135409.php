<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220628135409 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product_order ADD delivering_address_id INT NOT NULL');
        $this->addSql('ALTER TABLE product_order ADD billing_address_id INT NOT NULL');
        $this->addSql('ALTER TABLE product_order ADD CONSTRAINT FK_5475E8C4F9BA5CCB FOREIGN KEY (delivering_address_id) REFERENCES address (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE product_order ADD CONSTRAINT FK_5475E8C479D0C0E4 FOREIGN KEY (billing_address_id) REFERENCES address (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_5475E8C4F9BA5CCB ON product_order (delivering_address_id)');
        $this->addSql('CREATE INDEX IDX_5475E8C479D0C0E4 ON product_order (billing_address_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE product_order DROP CONSTRAINT FK_5475E8C4F9BA5CCB');
        $this->addSql('ALTER TABLE product_order DROP CONSTRAINT FK_5475E8C479D0C0E4');
        $this->addSql('DROP INDEX IDX_5475E8C4F9BA5CCB');
        $this->addSql('DROP INDEX IDX_5475E8C479D0C0E4');
        $this->addSql('ALTER TABLE product_order DROP delivering_address_id');
        $this->addSql('ALTER TABLE product_order DROP billing_address_id');
    }
}
