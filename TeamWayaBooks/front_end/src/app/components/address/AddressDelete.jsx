import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { deleteAddress, getAddress } from '../../api/backend/address';
import lock from '../../assets/images/lock.png';
import Input from '../../shared/components/form-and-error-components/Input';
import addresses from './../../assets/images/adresses.png';
import ErrorMessSmall from './../../shared/components/form-and-error-components/ErrorMessSmall';
import { schemaFormAddress } from './../../shared/constants/formik-yup/yup/yupAddress';
import { URL_ADDRESSES } from './../../shared/constants/urls/urlConstants';

const FormAddress = ({ submit, errorLog, initalValues }) => (
    <Formik
        initialValues={{
            address: initalValues.address,
            complement: initalValues.complement === null ? '' : initalValues.complement,
            zipCode: initalValues.zipCode,
            city: initalValues.city,
            country: initalValues.country,
        }}
        onSubmit={submit}
        validationSchema={schemaFormAddress}
        enableReinitialize
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
                    Suprimer
                </button>
            </div>
            {errorLog && <ErrorMessSmall middle message="Formulaire non valide" />}
        </Form>
    </Formik>
);

const AddressDelete = () => {
    const [errorLog, setErrorLog] = useState(false);
    const [id, setId] = useState('');
    const initAddress = {
        address: '',
        complement: '',
        zipCode: '',
        city: '',
        country: '',
    };
    const [address, setAddress] = useState(initAddress);
    const history = useHistory();

    const handleDelete = (values) => {
        if (values.complement === '') values.complement = null;
        deleteAddress(id).then((response) => {
            if (response.status === 204) {
                toast.success('Votre adresse a été supprimée.', {
                    position: 'top-center',
                    autoClose: 3000,
                });
                history.push(URL_ADDRESSES);
                setErrorLog(false);
            } else {
                toast.success(response.data.message, {
                    position: 'top-center',
                    autoClose: 3000,
                });
                history.push(URL_ADDRESSES);
                setErrorLog(false);
            }
        });
    };
    useEffect(() => {
        setId(new URLSearchParams(history.location.search).get('id'));
        if (id !== '') {
            getAddress(id).then((response) => {
                setAddress({
                    address: response.data.address,
                    complement: response.data.complement,
                    zipCode: response.data.zip_code,
                    city: response.data.city,
                    country: response.data.country,
                });
            });
        }
    }, [id]);
    return (
        <div className="bg-white p-4 rounded-md shadow max-w-lg w-full px-4 sm:px-6 lg:px-8 mt-4">
            <div className="w-4/5 flex flex-col justify-center items-center">
                <div className="flex justify-center">
                    <img
                        src={addresses}
                        alt="Logo Addresses"
                        className="h-10 w-auto sm:h-24 cursor-pointer"
                    />
                </div>
                <h2 className="mt-6 text-center text-3xl text-PrimaryWaya-light">
                    Confirmation de suppression d&apos;adresse
                </h2>
                <div className="flex justify-center">
                    <img className="w-auto h-10 my-2" src={lock} alt="Lock" />
                </div>
                <FormAddress
                    errorLog={errorLog}
                    submit={handleDelete}
                    initalValues={address}
                    enableReinitialize
                />
            </div>
        </div>
    );
};

export default AddressDelete;
