<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220628094306 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE comment_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE comment (id INT NOT NULL, comment_date DATE NOT NULL, evaluation INT NOT NULL, comment VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE product_author (product_id INT NOT NULL, author_id INT NOT NULL, PRIMARY KEY(product_id, author_id))');
        $this->addSql('CREATE INDEX IDX_DFD3996C4584665A ON product_author (product_id)');
        $this->addSql('CREATE INDEX IDX_DFD3996CF675F31B ON product_author (author_id)');
        $this->addSql('CREATE TABLE product_tag (product_id INT NOT NULL, tag_id INT NOT NULL, PRIMARY KEY(product_id, tag_id))');
        $this->addSql('CREATE INDEX IDX_E3A6E39C4584665A ON product_tag (product_id)');
        $this->addSql('CREATE INDEX IDX_E3A6E39CBAD26311 ON product_tag (tag_id)');
        $this->addSql('ALTER TABLE product_author ADD CONSTRAINT FK_DFD3996C4584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE product_author ADD CONSTRAINT FK_DFD3996CF675F31B FOREIGN KEY (author_id) REFERENCES author (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE product_tag ADD CONSTRAINT FK_E3A6E39C4584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE product_tag ADD CONSTRAINT FK_E3A6E39CBAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE product ADD category_id INT NOT NULL');
        $this->addSql('ALTER TABLE product ADD taxe_id INT NOT NULL');
        $this->addSql('ALTER TABLE product ADD serie_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE product ADD product_language_id INT NOT NULL');
        $this->addSql('ALTER TABLE product ADD editor_id INT NOT NULL');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD12469DE2 FOREIGN KEY (category_id) REFERENCES category (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD1AB947A4 FOREIGN KEY (taxe_id) REFERENCES taxe (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04ADD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD2EDE24EB FOREIGN KEY (product_language_id) REFERENCES product_language (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD6995AC4C FOREIGN KEY (editor_id) REFERENCES editor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_D34A04AD12469DE2 ON product (category_id)');
        $this->addSql('CREATE INDEX IDX_D34A04AD1AB947A4 ON product (taxe_id)');
        $this->addSql('CREATE INDEX IDX_D34A04ADD94388BD ON product (serie_id)');
        $this->addSql('CREATE INDEX IDX_D34A04AD2EDE24EB ON product (product_language_id)');
        $this->addSql('CREATE INDEX IDX_D34A04AD6995AC4C ON product (editor_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE comment_id_seq CASCADE');
        $this->addSql('DROP TABLE comment');
        $this->addSql('DROP TABLE product_author');
        $this->addSql('DROP TABLE product_tag');
        $this->addSql('ALTER TABLE product DROP CONSTRAINT FK_D34A04AD12469DE2');
        $this->addSql('ALTER TABLE product DROP CONSTRAINT FK_D34A04AD1AB947A4');
        $this->addSql('ALTER TABLE product DROP CONSTRAINT FK_D34A04ADD94388BD');
        $this->addSql('ALTER TABLE product DROP CONSTRAINT FK_D34A04AD2EDE24EB');
        $this->addSql('ALTER TABLE product DROP CONSTRAINT FK_D34A04AD6995AC4C');
        $this->addSql('DROP INDEX IDX_D34A04AD12469DE2');
        $this->addSql('DROP INDEX IDX_D34A04AD1AB947A4');
        $this->addSql('DROP INDEX IDX_D34A04ADD94388BD');
        $this->addSql('DROP INDEX IDX_D34A04AD2EDE24EB');
        $this->addSql('DROP INDEX IDX_D34A04AD6995AC4C');
        $this->addSql('ALTER TABLE product DROP category_id');
        $this->addSql('ALTER TABLE product DROP taxe_id');
        $this->addSql('ALTER TABLE product DROP serie_id');
        $this->addSql('ALTER TABLE product DROP product_language_id');
        $this->addSql('ALTER TABLE product DROP editor_id');
    }
}
