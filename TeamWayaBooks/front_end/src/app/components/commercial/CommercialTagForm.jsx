import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../shared/components/form-and-error-components/Input';
import ErrorMessSmall from './../../shared/components/form-and-error-components/ErrorMessSmall';
import { schemaFormTag } from './../../shared/constants/formik-yup/yup/yupTag';
import { URL_COMMERCIAL_TAGS } from './../../shared/constants/urls/urlConstants';

const FormTag = ({ submit, errorLog, initalValues, labelSubmit }) => (
    <Formik
        initialValues={{
            name: initalValues.name,
        }}
        onSubmit={submit}
        validationSchema={schemaFormTag}
        enableReinitialize
    >
        <Form className="my-4 w-max-">
            <div className="rounded-md shadow-sm w-full">
                <Field
                    type="text"
                    name="name"
                    label="Nom"
                    placeholder="Nom du Tag"
                    component={Input}
                    className="rounded-xl w-full mb-2"
                    errorRight
                />
            </div>

            <div className="flex flex-col md:flex-row justify-center md:mt-8">
                <Link to={URL_COMMERCIAL_TAGS}>
                    <button className="group relative btn btn-primary w-full md:w-20 my-2 md:m-2 ">
                        Retour
                    </button>
                </Link>
                <button
                    type="submit"
                    className="group relative btn btn-primary w-full md:w-40 my-2 md:m-2"
                >
                    {labelSubmit}
                </button>
            </div>
            {errorLog && <ErrorMessSmall middle message="Formulaire non valide" />}
        </Form>
    </Formik>
);

const CommercialTagForm = (props) => {
    return (
        <div>
            <FormTag
                errorLog={props.errorLog}
                submit={props.handleSubmit}
                initalValues={props.initialValues}
                enableReinitialize
                labelSubmit={props.labelSubmit}
            />
        </div>
    );
};

export default CommercialTagForm;
