<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220628130827 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_account_user_role (user_account_id INT NOT NULL, user_role_id INT NOT NULL, PRIMARY KEY(user_account_id, user_role_id))');
        $this->addSql('CREATE INDEX IDX_F78DA5D33C0C9956 ON user_account_user_role (user_account_id)');
        $this->addSql('CREATE INDEX IDX_F78DA5D38E0E3CA6 ON user_account_user_role (user_role_id)');
        $this->addSql('CREATE TABLE user_account_address (user_account_id INT NOT NULL, address_id INT NOT NULL, PRIMARY KEY(user_account_id, address_id))');
        $this->addSql('CREATE INDEX IDX_D6B917463C0C9956 ON user_account_address (user_account_id)');
        $this->addSql('CREATE INDEX IDX_D6B91746F5B7AF75 ON user_account_address (address_id)');
        $this->addSql('ALTER TABLE user_account_user_role ADD CONSTRAINT FK_F78DA5D33C0C9956 FOREIGN KEY (user_account_id) REFERENCES user_account (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE user_account_user_role ADD CONSTRAINT FK_F78DA5D38E0E3CA6 FOREIGN KEY (user_role_id) REFERENCES user_role (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE user_account_address ADD CONSTRAINT FK_D6B917463C0C9956 FOREIGN KEY (user_account_id) REFERENCES user_account (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE user_account_address ADD CONSTRAINT FK_D6B91746F5B7AF75 FOREIGN KEY (address_id) REFERENCES address (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP TABLE user_account_user_role');
        $this->addSql('DROP TABLE user_account_address');
    }
}
