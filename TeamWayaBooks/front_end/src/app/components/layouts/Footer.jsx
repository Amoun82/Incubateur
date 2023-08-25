import React from 'react';
import { Link } from 'react-router-dom';

import FaLinkedin from '../../assets/images/linkedin.png';
import Logo from '../../assets/images/logoWaya.png';
import FaSnapchat from '../../assets/images/snapchat.png';
import FaTwitter from '../../assets/images/twitter.png';
import FaYoutube from '../../assets/images/youtube.png';
import FaFacebook from './../../assets/images/facebook.png';
import map from './../../assets/images/NousTrouvez.png';
import { URL_CONTACT, URL_HOME } from './../../shared/constants/urls/urlConstants';

function Footer() {
    return (
        <>
            <div className="bg-gray-50 w-full flex md:flex-row flex-col justify-around items-start p-20">
                <div className="p-5">
                    <p className="text-blue-900 font-bold text-2xl pb-4">
                        Où nous trouver ?
                    </p>
                    <div className=" w-full flex justify-around items-start ">
                        <a href="#">
                            <img
                                className="text-2xl cursor-pointer hover:text-blue"
                                src={map}
                                alt="in Progress"
                                width="300"
                                height="auto"
                            />
                        </a>
                    </div>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-blue-900 font-bold text-2xl pb-4">
                            Communauté
                        </p>

                        <li className="text-black-waya text-md pb-2 font-semibold hover:text-blue-900 cursor-pointer">
                            Auteurs du moment
                        </li>
                        <li className="text-black-waya text-md pb-2 font-semibold hover:text-blue-900 cursor-pointer">
                            Editeurs
                        </li>
                        <li className="text-black-waya text-md pb-2 font-semibold hover:text-blue-900 cursor-pointer">
                            Evènements
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-blue-900 font-bold text-2xl pb-4">Wayabooks</p>

                        <li className="text-black-waya text-md pb-2 font-semibold hover:text-blue-900 cursor-pointer">
                            Qui sommes-nous ?
                        </li>
                        <li className="text-black-waya text-md pb-2 font-semibold hover:text-blue-900 cursor-pointer">
                            <Link to={URL_CONTACT}>Contactez-nous</Link>
                        </li>
                        <li className="text-black-waya text-md pb-2 font-semibold hover:text-blue-900 cursor-pointer">
                            Besoin d&apos;aide
                        </li>
                    </ul>
                </div>
                <div className="p-5 ">
                    <ul>
                        <p className="text-blue-900 font-bold text-2xl pb-4">
                            Retrouvez-nous:
                        </p>
                        <div className=" w-full flex justify-around items-start ">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className="text-2xl cursor-pointer hover:text-blue"
                                    src={FaTwitter}
                                    alt="Twitter"
                                    width="41"
                                    height="auto"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className="text-2xl cursor-pointer hover:text-blue"
                                    src={FaLinkedin}
                                    alt="Linkedin"
                                    width="41"
                                    height="auto"
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className="text-2xl cursor-pointer hover:text-red"
                                    src={FaYoutube}
                                    alt="Youtube"
                                    width="41"
                                    height="auto"
                                />
                            </a>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className="text-2xl cursor-pointer hover:text-red"
                                    src={FaFacebook}
                                    alt="Facebook"
                                    width="41"
                                    height="auto"
                                />
                            </a>
                            <a
                                href="https://www.snapchat.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className="text-2xl cursor-pointer hover:text-red"
                                    src={FaSnapchat}
                                    alt="Snapchat"
                                    width="41"
                                    height="auto"
                                />
                            </a>
                        </div>
                        <div className="p-5">
                            <Link to={URL_HOME}>
                                <img
                                    className="text-2xl cursor-pointer justify-center hover:text-blue-900"
                                    src={Logo}
                                    alt="logoWaya"
                                    width="200"
                                    height="auto"
                                />
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center  p-5">
                <h6 className=" text-black-waya ">
                    © SPOTCOMDESIGN All rights reserved | Build with ❤ by{' '}
                    <span className="hover:text-blue-900 font-semibold cursor-pointer">
                        teamwaya
                    </span>
                </h6>
            </div>
        </>
    );
}

export default Footer;
