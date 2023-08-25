import React from 'react';
import { Link } from 'react-router-dom';

import Adresse from './../../assets/images/adresse.png';
import Commandes from './../../assets/images/commande.png';
import Messagerie from './../../assets/images/email.png';
import NousContacter from './../../assets/images/nousContacter.png';
import Securite from './../../assets/images/security.png';
import SupprimerCompte from './../../assets/images/supprimerCompte.png';
import {
    URL_ADDRESSES,
    URL_DELETE_PROFILE,
    URL_HOME,
    URL_SECURITY,
} from './../../shared/constants/urls/urlConstants';

function ManagementAccount() {
    return (
        <div className="bg-gray text-center rounded-lg border-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 rounded-md">
                <div className="bg-white p-3 txt-lg px-2">
                    <div className="flex justify-center mb-2">
                        <img
                            className="text-2xl w-1/6"
                            src={Securite}
                            alt="Securite et connexion"
                        />
                    </div>

                    <Link to={URL_SECURITY}>
                        <div className="border-2 hover:border-PrimaryWaya-light hover:border-2 h-3/4 rounded-lg pb-10">
                            <h2 className="text-lg md:text-xl my-10 text-PrimaryWaya-light">
                                Connexion et sécurité
                            </h2>
                            <p>Modifier mon profil, modifier mon mot de passe</p>
                        </div>
                    </Link>
                </div>

                <div className="bg-white p-3 txt-lg">
                    <div className="flex justify-center mb-2">
                        <img className="text-2xl w-1/6" src={Commandes} alt="Commandes" />
                    </div>

                    <Link to={URL_HOME}>
                        <div className="border-2 hover:border-PrimaryWaya-light hover:border-2 h-3/4 rounded-lg pb-10">
                            <h2 className="text-lg md:text-xl my-10 text-PrimaryWaya-light">
                                Commandes
                            </h2>
                            <p>Suivis des commandes</p>
                        </div>
                    </Link>
                </div>

                <div className="bg-white p-3 txt-lg">
                    <div className="flex justify-center mb-2">
                        <img className="text-2xl w-1/6" src={Adresse} alt="Adresses" />
                    </div>

                    <Link to={URL_ADDRESSES}>
                        <div className="border-2 hover:border-PrimaryWaya-light hover:border-2 h-3/4 rounded-lg pb-10">
                            <h2 className="text-lg md:text-xl my-10 text-PrimaryWaya-light">
                                Adresses
                            </h2>
                            <p>Gestion des adresses</p>
                        </div>
                    </Link>
                </div>

                <div className="bg-white p-3 txt-lg">
                    <div className="flex justify-center mb-2">
                        <img
                            className="text-2xl w-1/6"
                            src={Messagerie}
                            alt="Messagerie"
                        />
                    </div>

                    <Link to={URL_HOME}>
                        <div className="border-2 hover:border-PrimaryWaya-light hover:border-2 h-3/4 rounded-lg pb-10">
                            <h2 className="text-lg md:text-xl my-10 text-PrimaryWaya-light">
                                Messagerie
                            </h2>
                            <p>Historique des échanges avec le site</p>
                        </div>
                    </Link>
                </div>

                <div className="bg-white p-3 txt-lg">
                    <div className="flex justify-center mb-2">
                        <img
                            className="text-2xl w-1/6"
                            src={NousContacter}
                            alt="contact"
                        />
                    </div>
                    <Link to={URL_HOME}>
                        <div className="border-2 hover:border-PrimaryWaya-light hover:border-2 h-3/4 rounded-lg pb-10">
                            <h2 className="text-lg md:text-xl my-10 text-PrimaryWaya-light">
                                Nous contacter
                            </h2>
                            <p>Envoyer un message</p>
                        </div>
                    </Link>
                </div>

                <div className="bg-white p-3 txt-lg">
                    <div className="flex justify-center mb-2">
                        <img
                            className="text-2xl w-1/6"
                            src={SupprimerCompte}
                            alt="Supprimer votre Compte"
                        />
                    </div>

                    <Link to={URL_DELETE_PROFILE}>
                        <div className="border-2 hover:border-PrimaryWaya-light hover:border-2 h-3/4 rounded-lg pb-10">
                            <h2 className="text-lg md:text-xl my-10 text-PrimaryWaya-light">
                                Supprimer votre compte
                            </h2>
                            <p>Supprimer votre compte</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ManagementAccount;
