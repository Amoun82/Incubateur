<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220628142423 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contact_message ADD message_from_id INT NOT NULL');
        $this->addSql('ALTER TABLE contact_message ADD message_to_id INT NOT NULL');
        $this->addSql('ALTER TABLE contact_message ADD CONSTRAINT FK_2C9211FEE846E307 FOREIGN KEY (message_from_id) REFERENCES user_account (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE contact_message ADD CONSTRAINT FK_2C9211FECF93B58E FOREIGN KEY (message_to_id) REFERENCES user_account (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_2C9211FEE846E307 ON contact_message (message_from_id)');
        $this->addSql('CREATE INDEX IDX_2C9211FECF93B58E ON contact_message (message_to_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE contact_message DROP CONSTRAINT FK_2C9211FEE846E307');
        $this->addSql('ALTER TABLE contact_message DROP CONSTRAINT FK_2C9211FECF93B58E');
        $this->addSql('DROP INDEX IDX_2C9211FEE846E307');
        $this->addSql('DROP INDEX IDX_2C9211FECF93B58E');
        $this->addSql('ALTER TABLE contact_message DROP message_from_id');
        $this->addSql('ALTER TABLE contact_message DROP message_to_id');
    }
}
