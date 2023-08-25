<?php

namespace App\Service;

use App\Entity\UserAccount;
use Exception;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class MailerService
{
    private $mailer;
    private $front_url;
    private $front_url_reset;
    private $mail_contact;

    public function __construct(MailerInterface $mailer, string $front_url, string $front_url_reset, string $mail_contact)
    {
        $this->mailer = $mailer;
        $this->front_url = $front_url;
        $this->front_url_reset = $front_url_reset;
        $this->mail_contact = $mail_contact;
    }

    public function registartionMail(UserAccount $user)
    {
        $message = null;
        try {
            $email = (new Email())
                ->from('noreply@wayabooks.com')
                ->to($user->getEmail())
                ->subject('Bienvenue sur le site wayabooks.com')
                ->text('Bonjour ' . $user->getFirstname() . ',' . PHP_EOL . 'Bienvenue sur le site de Wayabooks.' . PHP_EOL
                    . 'Connectez vous dans les 24 heures sur la page suivante pour valider votre adresse de messagerie : ' . PHP_EOL
                    . $this->front_url_reset . '?token=' . $user->getToken())
                ->html('<p>Bonjour ' . $user->getFirstname() . ',<br />Wayabooks vous souhaite la bienvenue sur son site web.</p>
                    <p>Pour valider votre addresse de messagerie, Veuillez cliquer sur le lien suivant dans les 24 heures
                    <a href="' . $this->front_url . '/email?token=' . $user->getToken() . '" target="_blank">Validation addresse de messagerie</a>.
                    </p>');

            $this->mailer->send($email);
        } catch (\Throwable $th) {
            throw new Exception("Error sending mail: " . $th->getMessage(), 1);
        }
    }

    public function forgottenPasswordMail(UserAccount $user)
    {
        try {
            $email = (new Email())
                ->from('noreply@wayabooks.com')
                ->to($user->getEmail())
                ->subject('Demande de changement de mot de passe sur le site wayabooks.com')
                ->text('Bonjour ' . $user->getFirstname() . ',' . PHP_EOL . 'Vous avez demandé un changement de mot de passe sur le site de Wayabooks.'
                    . PHP_EOL . 'Connectez vous sur la page suivante pour modifier votre mot de passe : ' . $this->front_url_reset . '?token=' . $user->getToken())
                ->html('<p>Bonjour ' . $user->getFirstname() . '.</p>
                    <p>Pour modifier votre mot de passe, Veuillez cliquer sur le lien suivant dans les 24 heures
                    <a href="' . $this->front_url_reset . '?token=' . $user->getToken() . '" target="_blank">Modifiaction de votre mot de passe</a>.
                    </p>');

            $this->mailer->send($email);
        } catch (\Throwable $th) {
            throw new Exception("Error sending mail: " . $th->getMessage(), 1);
        }
    }
    public function changedPasswordMail(UserAccount $user)
    {
        try {
            $email = (new Email())
                ->from('noreply@wayabooks.com')
                ->to($user->getEmail())
                ->subject('Changement de mot de passe sur le site wayabooks.com')
                ->text('Bonjour ' . $user->getFirstname() . ',' . PHP_EOL . 'Vous venez de changer votre mot de passe sur le site de Wayabooks.')
                ->html('<p>Bonjour ' . $user->getFirstname() . '.<br />
                    Votre mot de passe vient d\'être changé.</p>');

            $this->mailer->send($email);
        } catch (\Throwable $th) {
            throw new Exception("Error sending mail: " . $th->getMessage(), 1);
        }
    }
    public function changedPorfileMail(UserAccount $user)
    {
        try {
            $email = (new Email())
                ->from('noreply@wayabooks.com')
                ->to($user->getEmail())
                ->subject('Changement dans votre compte sur le site wayabooks.com')
                ->text('Bonjour ' . $user->getFirstname() . ',' . PHP_EOL . 'Vous venez de changer les informations de votre compte sur le site de Wayabooks.')
                ->html('<p>Bonjour ' . $user->getFirstname() . '.<br />
                    Votre compte vient d\'être modifié.</p>');

            $this->mailer->send($email);
        } catch (\Throwable $th) {
            throw new Exception("Error sending mail: " . $th->getMessage(), 1);
        }
    }
    public function contactMessageMail(string $asker, string $subject, string $message)
    {
        try {
            $email = (new Email())
                ->from('noreply@wayabooks.com')
                ->to($this->mail_contact)
                ->subject($subject)
                ->html('<p>Bonjour,<br />' . $asker . ' vous envoi  la demande suivante :<br /><br />' .
                    htmlentities($message));

            $this->mailer->send($email);
        } catch (\Throwable $th) {
            throw new Exception("Error sending mail: " . $th->getMessage(), 1);
        }
    }
    public function contactMessageSenderMail(string $asker, string $subject, string $message)
    {
        try {
            $email = (new Email())
                ->from('noreply@wayabooks.com')
                ->to($asker)
                ->subject('Votre demande au sujet de ' . $subject)
                ->html('<p>Bonjour ' . $asker . ', <br /><br /> Votre demande :<br /><br />' .
                    htmlentities($message)
                    . '<br /><br />A bien été traitée nous allons revenir vers vous avec une réponse dans les meilleurs délais. <br /><br />'
                    . 'Cordialement,<br />L&apos;équipe Wayabooks');

            $this->mailer->send($email);
        } catch (\Throwable $th) {
            throw new Exception("Error sending mail: " . $th->getMessage(), 1);
        }
    }
}
