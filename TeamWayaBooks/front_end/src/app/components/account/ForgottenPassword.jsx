import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../shared/components/form-and-error-components/Input';
import { userForgottenPassword } from './../../api/backend/account';
import { defaultValuesForgottenPassword } from './../../shared/constants/formik-yup/default-values-form/defaultValuesForgottenPassword';
import { schemaFormForgottenPassword } from './../../shared/constants/formik-yup/yup/yupForgottenPassword';
import { URL_LOGIN } from './../../shared/constants/urls/urlConstants';

const FormForgottenPassword = ({ submit }) => (
    <Formik
        initialValues={defaultValuesForgottenPassword}
        onSubmit={submit}
        validationSchema={schemaFormForgottenPassword}
    >
        <Form className="flex flex-col mt-8 space-y-6 items-center justify-center w-full">
            <div className="rounded-md shadow-sm -space-y-px w-full md:w-1/2">
                <Field
                    type="text"
                    name="email"
                    placeholder="Login"
                    component={Input}
                    className="rounded-md w-full"
                    errorRight
                />
            </div>
            <div className="flex justify-center items-center w-full">
                <button type="submit" className="btn btn-primary w-full md:w-1/4">
                    Envoyer
                </button>
            </div>
        </Form>
    </Formik>
);

const ForgottenPassword = () => {
    const history = useHistory();

    const handleEmail = (values) => {
        userForgottenPassword(values)
            .then(() => {
                history.push(URL_LOGIN);
            })
            .catch((error) => {
                console.log(error.message);
                history.push(URL_LOGIN);
            });
    };

    return (
        <div className="">
            <div className="flex flex-col bg-white p-4 rounded-md shadow w-full space-y-8 py-12 px-4 sm:px-6 lg:px-8 justify-center items-center">
                <div className="w-full">
                    <h4 className="mt-6 text-center text-primary">
                        Entrez l’adresse courriel associé à votre compte Wayabooks.
                    </h4>
                </div>
                <div className="w-full">
                    <FormForgottenPassword submit={handleEmail} />
                </div>
            </div>
        </div>
    );
};

export default ForgottenPassword;
