import { Disclosure, Menu } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/images/logoWaya.png';
import { userGetFullName } from './../../api/backend/account';
import { ROLE_ADMIN } from './../../shared/constants/rolesConstant';
import {
    URL_ADMIN_HOME,
    URL_COMMERCIAL_HOME,
    URL_HOME,
} from './../../shared/constants/urls/urlConstants';
import { signOut } from './../../shared/redux-store/authenticationSlice';
import { accountLogin, hasRole } from './../../shared/services/accountServices';

const submenu = () => {
    return (
        <Fragment>
            <Link to={URL_COMMERCIAL_HOME}>
                <div className="text-black link mx-4 hover:outline">Menu commercial</div>
            </Link>
            {hasRole(ROLE_ADMIN) ? (
                <Link to={URL_ADMIN_HOME}>
                    <div className="text-black link mx-4 hover:outline">Menu admin</div>
                </Link>
            ) : null}
        </Fragment>
    );
};

const NavbarCom = () => {
    const [fullName, setFullName] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const getUserFullName = () => {
        userGetFullName().then((res) => {
            setFullName(res.data);
        });
    };

    useEffect(() => {
        getUserFullName();
    }, []);
    return (
        <Disclosure
            as="nav"
            className="top-0 fixed z-50 w-full bg-white shadow-md font-Montserrat"
        >
            {({ open }) => (
                <>
                    <div className="flex justify-between">
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
                        <Menu as="div" className="flex items-center">
                            {submenu}
                        </Menu>
                        <div className="flex">
                            <div className="flex flex-col">
                                <div>{accountLogin()}</div>
                                {fullName != '' ? (
                                    <div>
                                        {fullName.lastname} {fullName.firstname}
                                    </div>
                                ) : null}
                            </div>
                            <button
                                className="ml-8 btn btn-waya"
                                onClick={() => {
                                    dispatch(signOut());
                                    history.push(URL_HOME);
                                }}
                            >
                                Sign out
                            </button>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    );
};

export default NavbarCom;
