import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import logo from '../../assets/images/logo.png';
import Input from '../../shared/components/form-and-error-components/Input';
import { userCreate } from './../../api/backend/account';
import ErrorMessSmall from './../../shared/components/form-and-error-components/ErrorMessSmall';
import { defaultValuesUserRegister } from './../../shared/constants/formik-yup/default-values-form/defaultValuesUserRegister';
import { schemaFormRegister } from './../../shared/constants/formik-yup/yup/yupUserRegister';
import { URL_HOME } from './../../shared/constants/urls/urlConstants';

/**
 * Component Form Register
 * Use Formik to create the Form
 *
 * @param {function} submit: submit Function
 * @param {object} initialValues: the initial values of the form
 * @param {boolean} errorLog: to display or not the message of login/mdp not valid
 * @param {object} validationSchema: validation's schema of the form
 * @author Peter Mollet, Richard A
 */
const FormRegister = ({ submit, errorLog }) => (
    <Formik
        initialValues={defaultValuesUserRegister}
        onSubmit={submit}
        validationSchema={schemaFormRegister}
    >
        <Form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-px">
                <div className="flex flex-wrap items-center justify-between md:py-2">
                    <Field
                        type="text"
                        name="firstname"
                        placeholder="Prénom"
                        component={Input}
                        className="rounded-xl w-80"
                        errorRight
                    />
                    <Field
                        type="text"
                        name="lastname"
                        placeholder="Nom"
                        component={Input}
                        className="rounded-xl w-80"
                        errorRight
                    />
                </div>
                <div className="flex flex-wrap items-center justify-between md:py-2">
                    <Field
                        type="text"
                        name="email"
                        placeholder="Email"
                        component={Input}
                        className="rounded-xl w-80"
                        errorRight
                    />
                    <Field
                        type="text"
                        name="emailConfirm"
                        placeholder="Confirmation Email"
                        component={Input}
                        className="rounded-xl w-80"
                        errorRight
                    />
                </div>
                <div className="flex flex-wrap items-center justify-between md:py-2">
                    <Field
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        component={Input}
                        className="rounded-xl w-80"
                        errorRight
                    />
                    <Field
                        type="password"
                        name="passwordConfirm"
                        placeholder="Confirmation Mot de passe"
                        component={Input}
                        className="rounded-xl w-80"
                        errorRight
                    />
                </div>
                <div className="flex flex-wrap items-center justify-between md:py-2">
                    <Field
                        type="text"
                        name="address"
                        placeholder="Adresse"
                        component={Input}
                        className="rounded-xl w-80"
                        errorRight
                    />
                    <Field
                        type="text"
                        name="complement"
                        placeholder="Complément d'adresse"
                        component={Input}
                        className="rounded-xl w-80"
                        errorRight
                    />
                </div>
                <div className="flex flex-wrap items-center justify-between md:py-2">
                    <Field
                        type="text"
                        name="zipCode"
                        placeholder="Code Postal"
                        component={Input}
                        className="rounded-xl w-80"
                        errorRight
                    />
                    <Field
                        type="text"
                        name="city"
                        placeholder="Ville"
                        component={Input}
                        className="rounded-xl w-80"
                        errorRight
                    />
                </div>
                <div className="flex flex-wrap items-center justify-between md:py-2">
                    <Field
                        type="text"
                        name="country"
                        placeholder="Pays"
                        component={Input}
                        className="rounded-xl w-80"
                        errorRight
                    />
                </div>
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="group relative btn btn-primary w-40 sm:w-48 md:w-80"
                >
                    Enregistrement
                </button>
            </div>
            {errorLog && <ErrorMessSmall middle message="Formulaire non valide" />}
        </Form>
    </Formik>
);

/**
 * Component Register
 *
 * will need in props:
 *  - Submit Function
 *  - errorLog boolean
 *  - validationSchema
 *
 * See above for information
 *
 * @author Peter Mollet, Richard A
 */
const Register = () => {
    const [errorLog, setErrorLog] = useState(false);
    const history = useHistory();

    const handleCreate = (values) => {
        if (values.complement === '') values.complement = null;
        userCreate(values)
            .then((res) => {
                if (res.status === 201) {
                    toast.success(
                        "Votre compte vient d'être créé, pensez à valider votre Email.",
                        {
                            position: 'top-center',
                            autoClose: 3000,
                        },
                    );
                    history.push(URL_HOME);
                }
            })
            .catch(() => setErrorLog(true));
    };
    return (
        <div className="bg-white p-4 rounded-md shadow max-w-3xl w-full space-y-2 py-12 px-4 sm:px-6 lg:px-8">
            <div>
                <div className="flex justify-center">
                    <img className="w-auto sm:h-10" src={logo} alt="Wayabooks logo" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
                    Créer un compte
                </h2>
            </div>

            <FormRegister errorLog={errorLog} submit={handleCreate} />
        </div>
    );
};

export default Register;
