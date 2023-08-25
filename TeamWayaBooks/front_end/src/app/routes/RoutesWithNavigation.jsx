import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { URL_COMMERCIAL_HOME } from '../shared/constants/urls/urlConstants';
import IdleTimerCustom from './../components/account/IdleTimerCustom';
import CommercialMenu from './../components/layouts/CommercialMenu';
import Footer from './../components/layouts/Footer';
import Navbar from './../components/layouts/Navbar';
import NavbarCom from './../components/layouts/NavbarCom';
import ScrollToTop from './../components/layouts/ScrollToTop';
import { ROLE_ADMIN, ROLE_COMMERCIAL } from './../shared/constants/rolesConstant';
import { selectIsLogged } from './../shared/redux-store/authenticationSlice';
import { hasRole } from './../shared/services/accountServices';
import Routes from './Routes';

const contextClass = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
    warning: 'bg-yellow-500',
    default: 'bg-indigo-600',
    dark: 'bg-white-600 font-gray-300',
};

/**
 * Component RouteWithNavigation
 * To create the structure of the application (nav bar, routes, toast, etc...)
 *
 * @author Peter Mollet
 */
const RoutesWithNavigation = () => {
    const isLogged = useSelector(selectIsLogged);
    const loc = useLocation();

    const isCom = () => {
        if (
            loc.pathname.substring(0, URL_COMMERCIAL_HOME.length) === URL_COMMERCIAL_HOME
        ) {
            return true;
        } else {
            return false;
        }
    };
    return (
        // <BrowserRouter>
        <div className="h-full flex flex-col bg-gray-100 cursor-default">
            <ScrollToTop />
            {isLogged && <IdleTimerCustom />}
            {!isLogged ? (
                <Navbar />
            ) : (
                isLogged && (
                    <div>{hasRole(ROLE_COMMERCIAL) ? <NavbarCom /> : <Navbar />}</div>
                )
            )}
            <main className="grow mt-24">
                {isLogged &&
                isCom() &&
                (hasRole(ROLE_COMMERCIAL) || hasRole(ROLE_ADMIN)) ? (
                    <div className="w-full h-full flex bg-gray-600">
                        <div className="w-40 h-full">
                            <CommercialMenu />
                        </div>
                        <div className="w-full">
                            <Routes />
                        </div>
                    </div>
                ) : (
                    <Routes />
                )}
            </main>
            {!isLogged ? (
                <Footer />
            ) : (
                isLogged && <div>{hasRole(ROLE_COMMERCIAL) ? null : <Footer />}</div>
            )}

            <ToastContainer
                toastClassName={({ type }) =>
                    contextClass[type || 'default'] +
                    ' relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer'
                }
                bodyClassName={() => 'text-sm font-white font-med block p-3'}
                position="bottom-left"
                autoClose={3000}
            />
        </div>
        // </BrowserRouter>
    );
};

export default RoutesWithNavigation;
