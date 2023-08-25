import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import iconebasket from '../../assets/images/card.png';
import iconeContact from '../../assets/images/contact.png';
import logo from '../../assets/images/logoWaya.png';
import IconeSearch from '../../assets/images/recherche.png';
import { isAuthenticated } from '../../shared/services/accountServices';
import {
    URL_CART,
    URL_CONTACT,
    URL_FORGOTTEN_PASSWORD,
    URL_HOME,
    URL_PRODUCT_LIST_SEARCH,
    URL_LOGIN,
    URL_MANAGE_ACCOUNT,
    URL_REGISTER,
} from './../../shared/constants/urls/urlConstants';
import { selectIsLogged, signOut } from './../../shared/redux-store/authenticationSlice';

const submenu = () => {
    return (
        <Fragment>
            <Link to={URL_HOME}>
                <div className="text-black link mx-4 hover:outline">Accueil</div>
            </Link>
            <Link to={URL_HOME}>
                <div className="text-black link mx-4 hover:outline">Produits</div>
            </Link>
            <Link to={URL_HOME}>
                <div className="text-black link mx-4 hover:outline">
                    Qui sommes nous ?
                </div>
            </Link>
            <Link to={URL_CONTACT}>
                <div className="text-black link mx-4 hover:outline">Contact</div>
            </Link>
        </Fragment>
    );
};

const Navbar = () => {
    const [barSearch, setBarSearch] = useState(true);
    const dispatch = useDispatch();
    const history = useHistory();

    const [valueSearch, setvalueSearch] = useState('');

    const redirection = () => {
        window.open(URL_PRODUCT_LIST_SEARCH + '?search=' + valueSearch, '_self');
    };

    function enterKey(e) {
        if (e.key === 'Enter') {
            redirection();
        }
    }

    return (
        <Disclosure
            as="nav"
            className="top-0 fixed z-50 w-full bg-white shadow-md font-Montserrat"
        >
            {({ open }) => (
                <>
                    <div className="mx-auto">
                        <div className="hidden md:block text-white items-center text-center bg-PrimaryWaya w-full py-2">
                            <p>
                                Rejoignez notre showroom et obtenez 10% de réduction !
                                Code promo : wa1990
                            </p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex md:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-primary 
                                    focus:outline-none transform active:scale-95 active:ring-2 active:ring-offset-2 active:ring-primary "
                                >
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="mx-4">
                                <Link to={URL_HOME}>
                                    <img
                                        className="h-8 w-auto sm:h-10 cursor-pointer"
                                        src={logo}
                                        alt="logo"
                                        width={200}
                                        height={60}
                                    />
                                </Link>
                            </div>
                            <Menu as="div" className="hidden md:flex">
                                {submenu}
                            </Menu>

                            <div className="inline-flex">
                                <div className="flex">
                                    <div className={`${barSearch ? 'hidden' : ''}`}>
                                        <input
                                            type="text"
                                            name="inputSearch"
                                            onChange={(e) =>
                                                setvalueSearch(e.target.value)
                                            }
                                            onKeyPress={enterKey}
                                            onBlur={() => {
                                                valueSearch != '' ? redirection() : null;
                                            }}
                                        />
                                        <button className="btn" onClick={redirection}>
                                            recherche
                                        </button>
                                    </div>

                                    <button
                                        onClick={() =>
                                            setBarSearch(
                                                (prevbarSearch) => !prevbarSearch,
                                            )
                                        }
                                    >
                                        <img
                                            className="h-8 w-auto sm:h-10 cursor-pointer"
                                            src={IconeSearch}
                                            alt="IconeSearch"
                                            width={200}
                                            height={60}
                                        />
                                    </button>
                                </div>
                                <Menu as="div" className="relative flex text-left mx-2">
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center">
                                            <img
                                                className="h-8 w-auto sm:h-10 cursor-pointer"
                                                src={iconeContact}
                                                alt="iconeContact"
                                                width={200}
                                                height={60}
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 mt-10 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <>
                                                            {!isAuthenticated() && (
                                                                <Link to={URL_REGISTER}>
                                                                    <button
                                                                        className={`${
                                                                            active
                                                                                ? 'bg-violet-500 text-white'
                                                                                : 'text-gray-900'
                                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:outline`}
                                                                    >
                                                                        Inscription
                                                                    </button>
                                                                </Link>
                                                            )}
                                                            {!isAuthenticated() && (
                                                                <Link to={URL_LOGIN}>
                                                                    <button
                                                                        className={`${
                                                                            active
                                                                                ? 'bg-violet-500 text-white'
                                                                                : 'text-gray-900'
                                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:outline`}
                                                                    >
                                                                        Connexion
                                                                    </button>
                                                                </Link>
                                                            )}
                                                            {isAuthenticated() && (
                                                                <button
                                                                    onClick={() => {
                                                                        dispatch(
                                                                            signOut(),
                                                                        );
                                                                        history.push(
                                                                            URL_HOME,
                                                                        );
                                                                    }}
                                                                    className={`${
                                                                        active
                                                                            ? 'bg-violet-500 text-white'
                                                                            : 'text-gray-900'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:outline`}
                                                                >
                                                                    Déconnexion
                                                                </button>
                                                            )}
                                                            {isAuthenticated() && (
                                                                <Link
                                                                    to={
                                                                        URL_MANAGE_ACCOUNT
                                                                    }
                                                                >
                                                                    <button
                                                                        className={`${
                                                                            active
                                                                                ? 'bg-violet-500 text-white'
                                                                                : 'text-gray-900'
                                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:outline`}
                                                                    >
                                                                        Gestion de compte
                                                                    </button>
                                                                </Link>
                                                            )}
                                                            {!isAuthenticated() && (
                                                                <Link
                                                                    to={
                                                                        URL_FORGOTTEN_PASSWORD
                                                                    }
                                                                >
                                                                    <button
                                                                        className={`${
                                                                            active
                                                                                ? 'bg-violet-500 text-white'
                                                                                : 'text-gray-900'
                                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:outline`}
                                                                    >
                                                                        mot de passe
                                                                        oublié
                                                                    </button>
                                                                </Link>
                                                            )}
                                                        </>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                                <Link to={URL_CART}>
                                    <img
                                        className="h-8 w-auto sm:h-10 cursor-pointer mr-10"
                                        src={iconebasket}
                                        alt="iconebasket"
                                        width={200}
                                        height={60}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Transition
                        enter="transition"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Disclosure.Panel className="p-4 md:hidden ">
                            <hr />
                            <div className="p-4">
                                <ConnectionBtn />
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;

const ConnectionBtn = () => {
    const isLogged = useSelector(selectIsLogged);
    const dispatch = useDispatch();
    const history = useHistory();
    if (isLogged)
        return (
            <div className="flex">
                <div className="flex justify-center md:items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <Menu as="div" className="flex">
                        {submenu}
                    </Menu>
                </div>
                <button
                    className="ml-8 btn btn-green"
                    onClick={() => {
                        dispatch(signOut());
                        history.push(URL_HOME);
                    }}
                >
                    Sign out
                </button>
            </div>
        );
    else
        return (
            <div className="flex justify-center md:items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <Menu as="div" className="flex">
                    {submenu}
                </Menu>
            </div>
        );
};
