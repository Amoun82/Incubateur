import { LockClosedIcon } from '@heroicons/react/solid';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../shared/components/form-and-error-components/Input';
import { signIn } from '../../shared/redux-store/authenticationSlice';
import { hasRole, isAuthenticated } from '../../shared/services/accountServices';
import { authenticate } from './../../api/backend/account';
import Register_PNG from './../../assets/images/register_image.png';
import ErrorMessSmall from './../../shared/components/form-and-error-components/ErrorMessSmall';
import { Checkbox } from './../../shared/components/form-and-error-components/InputChoices';
import { defaulValuesLogin } from './../../shared/constants/formik-yup/default-values-form/idefaultValuesUser';
import { schemaFormLogin } from './../../shared/constants/formik-yup/yup/yupUser';
import { ROLE_ADMIN, ROLE_COMMERCIAL } from './../../shared/constants/rolesConstant';
import {
    URL_ADMIN_HOME,
    URL_COMMERCIAL_HOME,
    URL_FORGOTTEN_PASSWORD,
    URL_HOME,
    URL_REGISTER,
} from './../../shared/constants/urls/urlConstants';

/**
 * Component Form Login
 * Use Formik to create the Form
 *
 * @param {function} submit: submit Function
 * @param {object} initialValues: the initial values of the form
 * @param {boolean} errorLog: to display or not the message of login/mdp not valid
 * @param {object} validationSchema: validation's schema of the form
 * @author Peter Mollet
 */
const FormLogin = ({ submit, errorLog }) => (
    <Formik
        initialValues={defaulValuesLogin}
        onSubmit={submit}
        validationSchema={schemaFormLogin}
    >
        <Form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
                <Field
                    type="text"
                    name="username"
                    placeholder="Login"
                    component={Input}
                    className="rounded-none rounded-t-md"
                    errorRight
                />
                <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    component={Input}
                    className="rounded-none rounded-b-md"
                    errorRight
                />
            </div>

            <div className="flex items-center justify-between">
                <Field
                    name="rememberMe"
                    label="Remember me"
                    component={Checkbox}
                    value={true}
                />
                <div className="text-sm">
                    <Link to={URL_FORGOTTEN_PASSWORD}>
                        <span className="font-medium text-primary-dark hover:text-primary cursor-pointer">
                            Forgot your password?
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <button type="submit" className="group relative btn btn-primary w-full">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <LockClosedIcon
                            className="h-5 w-5 text-primary-dark group-hover:text-primary-light"
                            aria-hidden="true"
                        />
                    </span>
                    Sign in
                </button>
            </div>
            {errorLog && <ErrorMessSmall middle message="Login/Password incorrect(s)" />}
        </Form>
    </Formik>
);

/**
 * Component Login
 *
 * will need in props:
 *  - Submit Function
 *  - errorLog boolean
 *  - validationSchema
 *
 * See above for information
 *
 * @author Peter Mollet
 */
const Login = () => {
    const [errorLog, setErrorLog] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogin = (values) => {
        authenticate(values)
            .then((res) => {
                if (res.status === 200 && res.data.token) {
                    dispatch(signIn(res.data.token));
                    if (isAuthenticated() && hasRole(ROLE_ADMIN)) {
                        history.push(URL_ADMIN_HOME);
                    } else {
                        if (isAuthenticated() && hasRole(ROLE_COMMERCIAL)) {
                            history.push(URL_COMMERCIAL_HOME);
                        } else {
                            if (isAuthenticated()) history.push(URL_HOME);
                        }
                    }
                }
            })
            .catch(() => setErrorLog(true));
    };
    return (
        <div className="flex flex-col md:flex-row">
            <div className="bg-white p-4 rounded-md shadow max-w-md w-full space-y-8 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-between ">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-PrimaryWaya-light">
                        Sign in to your account
                    </h2>
                </div>
                <FormLogin errorLog={errorLog} submit={handleLogin} />
            </div>
            <div className="bg-white p-4 rounded-md shadow max-w-md w-full space-y-8 py-12 px-4 sm:px-6 lg:px-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-PrimaryWaya-light">
                    Not registred yet ?
                </h2>
                <div className=" w-full relative">
                    <img src={Register_PNG} alt="Enregistrement" />
                    <div className="static">
                        <button
                            className="btn btn-primary w-full absolute bottom-0 left-0 "
                            onClick={() => history.push(URL_REGISTER)}
                        >
                            Registration
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
