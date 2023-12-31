<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220628132810 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE comment ADD comment_user_id INT NOT NULL');
        $this->addSql('ALTER TABLE comment ADD comment_product_id INT NOT NULL');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526C541DB185 FOREIGN KEY (comment_user_id) REFERENCES user_account (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CC765EC7A FOREIGN KEY (comment_product_id) REFERENCES product (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_9474526C541DB185 ON comment (comment_user_id)');
        $this->addSql('CREATE INDEX IDX_9474526CC765EC7A ON comment (comment_product_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE comment DROP CONSTRAINT FK_9474526C541DB185');
        $this->addSql('ALTER TABLE comment DROP CONSTRAINT FK_9474526CC765EC7A');
        $this->addSql('DROP INDEX IDX_9474526C541DB185');
        $this->addSql('DROP INDEX IDX_9474526CC765EC7A');
        $this->addSql('ALTER TABLE comment DROP comment_user_id');
        $this->addSql('ALTER TABLE comment DROP comment_product_id');
    }
}
