import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getCommercialProductById } from '../../api/backend/product';
import Input from '../../shared/components/form-and-error-components/Input';
import { Checkbox } from '../../shared/components/form-and-error-components/InputChoices';
import ErrorMessSmall from './../../shared/components/form-and-error-components/ErrorMessSmall';
import { schemaFormProduct } from './../../shared/constants/formik-yup/yup/yupProduct';
import { URL_COMMERCIAL_PRODUCTS } from './../../shared/constants/urls/urlConstants';

const FormProduct = ({ submit, errorLog, initalValues }) => (
    <Formik
        initialValues={{
            name: initalValues.name,
            isbn: initalValues.isbn,
            price: initalValues.price,
            stock: initalValues.stock,
            public: initalValues.public,
        }}
        onSubmit={submit}
        validationSchema={schemaFormProduct}
        enableReinitialize
    >
        <Form className="my-4 ">
            <div className="rounded-md shadow-sm w-full">
                <Field
                    type="text"
                    name="name"
                    placeholder="Nom"
                    component={Input}
                    className="rounded-xl w-full"
                    errorRight
                />
                <Field
                    type="text"
                    name="isbn"
                    placeholder="ISBN"
                    component={Input}
                    className="rounded-xl w-full"
                    errorRight
                />
                <Field
                    type="text"
                    name="price"
                    placeholder="Prix"
                    component={Input}
                    className="rounded-xl w-full"
                    errorRight
                />
                <Field
                    type="text"
                    name="stock"
                    placeholder="Stock"
                    component={Input}
                    className="rounded-xl w-full"
                    errorRight
                />
                <Field name="public" label="Public" component={Checkbox} value={true} />
            </div>

            <div className="flex flex-col md:flex-row justify-center md:mt-8">
                <Link to={URL_COMMERCIAL_PRODUCTS}>
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

const CommercialProduct = () => {
    const history = useHistory();
    const initProduct = {
        name: '',
        isbn: '',
        price: 0,
        stock: 0,
        public: true,
    };
    const [product, setProduct] = useState(initProduct);
    const [errorLog, setErrorLog] = useState(false);
    const [id, setId] = useState('');

    useEffect(() => {
        setId(new URLSearchParams(history.location.search).get('id'));
        if (id !== '') {
            console.log(id);
            getCommercialProductById(id).then((response) => {
                console.log(response.data);
            });
        }
    }, [id]);

    const handleUpdate = (values) => {
        console.log(values);
    };

    return (
        <div className="bg-white p-4 rounded-md shadow w-full px-4 sm:px-6 lg:px-8 mt-4">
            <div className="w-4/5 flex flex-col justify-center items-center">
                <h2 className="my-6 text-center text-3xl text-PrimaryWaya-light">
                    Modifier un produit
                </h2>
                <FormProduct
                    errorLog={errorLog}
                    submit={handleUpdate}
                    initalValues={product}
                    enableReinitialize
                />
            </div>
        </div>
    );
};

export default CommercialProduct;
