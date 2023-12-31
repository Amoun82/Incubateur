/* eslint-disable jsx-a11y/anchor-is-valid */
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon, SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import { Fragment } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import for menu burger
import SideBar from '../../shared/components/utils-components/sidebar';
// import logo
import logo from '../../assets/images/braka_black.png'; // with import
import logoUser from '../../assets/images/profile_user.png';
import logoBasket from '../../assets/images/shopping-bag.png';

import {
    URL_CONTACT,
    URL_HOME,
    URL_LOGIN,
    URL_REGISTER,
} from './../../shared/constants/urls/urlConstants';
import { selectIsLogged, signOut } from './../../shared/redux-store/authenticationSlice';

// Navbar components and links
const navigation = [
    { name: 'Homme', href: '#', current: false },
    { name: 'Femme', href: '#', current: false },
    { name: 'Enfants', href: '#', current: false },
    { name: 'Bébé', href: '#', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

// Navbar component
export default function Navbar() {
    return (
        // Main navbar settings
        <Disclosure as="nav" className="bg-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-32">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch mt-4">
                        <div className="sm:block sm:ml-6 md:w-full lg:w-full">
                            <div className="flex md:justify-evenly place-content-around mb-4">
                                {/* Logo */}
                                <div className="sm:w-2/5 md:w-1/4 lg:w-1/4 px-10 lg:ml-8 h-12">
                                    <img src={logo} alt="logo Braka" />
                                </div>

                                {/* Search input with search svg */}
                                <div className="px-10 relative text-base bg-transparent w-2/5 lg:ml-10">
                                    <div className="hidden sm:flex items-center border-b-2 py-2">
                                        {/* Search input area */}
                                        <input
                                            className="input-menu-search"
                                            type="text"
                                            placeholder="Search..."
                                        ></input>

                                        {/* Search icon - button */}
                                        <button
                                            type="submit"
                                            className="absolute right-0 top-0 mt-3 mr-4"
                                        >
                                            <SearchIcon
                                                className="block h-6 w-full"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </div>
                                {/* Notifications icon */}
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0 ">
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="lg:ml-40 lg:mr-10 relative">
                                        <div>
                                            <Menu.Button className="flex sm:text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">
                                                    Open user menu
                                                </span>
                                                <img
                                                    className="ml-3 h-8 w-8 lg"
                                                    src={logoUser}
                                                    alt="logo User"
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link to={URL_LOGIN}>
                                                            <div
                                                                className={classNames(
                                                                    active
                                                                        ? 'bg-gray-100'
                                                                        : '',
                                                                    'block px-4 py-2 text-sm text-gray-700 link',
                                                                )}
                                                            >
                                                                Login
                                                            </div>
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                    <div className="">
                                        <button type="button" className="ml-3 h-8 w-8 lg">
                                            <img src={logoBasket} alt="logo basket" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden sm:flex place-content-around mb-4">
                                {/* menu men women kid babies */}
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? ''
                                                : 'hover:font-bold hover:scale-125 hover:translate-y-2',
                                            'px-3 py-2 rounded-md text-sm font-medium ',
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Disclosure>
    );
}
