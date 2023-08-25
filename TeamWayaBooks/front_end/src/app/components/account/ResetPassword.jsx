import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Input from '../../shared/components/form-and-error-components/Input';
import { signIn } from '../../shared/redux-store/authenticationSlice';
import { isAuthenticated } from '../../shared/services/accountServices';
import { authenticate, userResetPassword } from './../../api/backend/account';
import { defaultValuesResetPassword } from './../../shared/constants/formik-yup/default-values-form/defaultValuesResetPassword';
import { schemaFormResetPassword } from './../../shared/constants/formik-yup/yup/yupResetPassword';
import { URL_HOME } from './../../shared/constants/urls/urlConstants';

const FormResetPassword = ({ submit }) => (
    <Formik
        initialValues={defaultValuesResetPassword}
        onSubmit={submit}
        validationSchema={schemaFormResetPassword}
    >
        <Form className="flex flex-col mt-8 space-y-6 items-center justify-center w-full shrink-0">
            <div className="flex flex-row flex-wrap items-center justify-center w-full">
                <div className="w-full md:w-2/5 mx-1">
                    <p className="md:text-right">Votre nouveau mot de passe</p>
                </div>
                <div className="rounded-md shadow-sm w-full md:w-2/5 mx-1">
                    <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        component={Input}
                        className=" rounded-md "
                        errorRight
                    />
                </div>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center w-full">
                <div className="w-full md:w-2/5 justify-end mx-1">
                    <p className="md:text-right">Confirmez votre nouveau mot de passe</p>
                </div>
                <div className="rounded-md shadow-sm w-full md:w-2/5 mx-1">
                    <Field
                        type="password"
                        name="passwordConfirm"
                        placeholder="Password"
                        component={Input}
                        className=" rounded-md "
                        errorRight
                    />
                </div>
            </div>
            <div className="flex flex-row w-full justify-center">
                <button type="submit" className="btn btn-primary w-full md:w-1/5">
                    Envoyer
                </button>
            </div>
        </Form>
    </Formik>
);

const ResetPassword = () => {
    const [token, setToken] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        setToken(new URLSearchParams(history.location.search).get('token'));
    }, []);

    const handleSubmit = (values) => {
        const data = { ...values, token };
        login(data);
    };

    async function login(values) {
        await userResetPassword(values)
            .then((res) => {
                if (res.status === 200) {
                    const log = {
                        username: res.data.email,
                        password: values.password,
                    };
                    authenticate(log).then((result) => {
                        if (result.status === 200 && result.data.token) {
                            dispatch(signIn(result.data.token));
                            if (isAuthenticated()) history.push(URL_HOME);
                        }
                    });
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div className="w-full shrink-0">
            <div className="flex flex-col bg-white p-4 rounded-md shadow w-full space-y-8 py-12 px-4 sm:px-6 lg:px-8 justify-center items-center shrink-0">
                <div className="w-full shrink-0">
                    <h4 className="mt-6 text-center text-primary">
                        Créez votre nouveau mot de passe
                    </h4>
                </div>
                <div className="w-full shrink-0">
                    <FormResetPassword submit={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
