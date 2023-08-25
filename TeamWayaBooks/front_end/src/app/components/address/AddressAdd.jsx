import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { addAddress } from '../../api/backend/address';
import lock from '../../assets/images/lock.png';
import Input from '../../shared/components/form-and-error-components/Input';
import addresses from './../../assets/images/adresses.png';
import ErrorMessSmall from './../../shared/components/form-and-error-components/ErrorMessSmall';
import { defaultValuesAddress } from './../../shared/constants/formik-yup/default-values-form/defaultValuesAddress';
import { schemaFormAddress } from './../../shared/constants/formik-yup/yup/yupAddress';
import { URL_ADDRESSES } from './../../shared/constants/urls/urlConstants';

const FormAddress = ({ submit, errorLog }) => (
    <Formik
        initialValues={defaultValuesAddress}
        onSubmit={submit}
        validationSchema={schemaFormAddress}
    >
        <Form className="my-4 ">
            <div className="rounded-md shadow-sm w-full">
                <Field
                    type="text"
                    name="address"
                    placeholder="Adresse"
                    component={Input}
                    className="rounded-xl w-full"
                    errorRight
                />
                <Field
                    type="text"
                    name="complement"
                    placeholder="Complément d'adresse"
                    component={Input}
                    className="rounded-xl w-full"
                    errorRight
                />
                <Field
                    type="text"
                    name="zipCode"
                    placeholder="Code Postal"
                    component={Input}
                    className="rounded-xl w-full"
                    errorRight
                />
                <Field
                    type="text"
                    name="city"
                    placeholder="Ville"
                    component={Input}
                    className="rounded-xl w-full"
                    errorRight
                />
                <Field
                    type="text"
                    name="country"
                    placeholder="Pays"
                    component={Input}
                    className="rounded-xl w-full"
                    errorRight
                />
            </div>

            <div className="flex flex-col md:flex-row justify-center md:mt-8">
                <Link to={URL_ADDRESSES}>
                    <button className="group relative btn btn-primary w-full md:w-20 my-2 md:m-2 ">
                        Retour
                    </button>
                </Link>
                <button
                    type="submit"
                    className="group relative btn btn-primary w-full md:w-40 my-2 md:m-2"
                >
                    Enregistrement
                </button>
            </div>
            {errorLog && <ErrorMessSmall middle message="Formulaire non valide" />}
        </Form>
    </Formik>
);

const Address = () => {
    const [errorLog, setErrorLog] = useState(false);
    const history = useHistory();

    const handleAdd = (values) => {
        if (values.complement === '') values.complement = null;
        addAddress(values).then(() => {
            toast.success('Votre adresse a été crée.', {
                position: 'top-center',
                autoClose: 3000,
            });
            history.push(URL_ADDRESSES);
            setErrorLog(false);
        });
    };

    return (
        <div className="bg-white p-4 rounded-md shadow max-w-lg w-full px-4 sm:px-6 lg:px-8 mt-4">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="flex justify-center">
                    <img
                        src={addresses}
                        alt="Logo Addresses"
                        className="h-10 w-auto sm:h-24 cursor-pointer"
                    />
                </div>
                <h2 className="mt-6 text-center text-3xl text-PrimaryWaya-light">
                    Ajouter une adresse
                </h2>
                <div className="flex justify-center">
                    <img className="w-auto h-10 my-2" src={lock} alt="Lock" />
                </div>
                <FormAddress errorLog={errorLog} submit={handleAdd} />
            </div>
        </div>
    );
};

export default Address;
