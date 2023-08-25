import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../shared/components/form-and-error-components/Input';
import ErrorMessSmall from './../../shared/components/form-and-error-components/ErrorMessSmall';
import { schemaFormCategory } from './../../shared/constants/formik-yup/yup/yupCategory';
import { URL_COMMERCIAL_CATEGORIES } from './../../shared/constants/urls/urlConstants';

const FormCategory = ({ submit, errorLog, initalValues, list, labelSubmit }) => (
    <Formik
        initialValues={{
            name: initalValues.name,
            description: initalValues.description,
            parent: initalValues.parent,
        }}
        onSubmit={submit}
        validationSchema={schemaFormCategory}
        enableReinitialize
    >
        <Form className="my-4 w-max-">
            <div className="rounded-md shadow-sm w-full">
                <Field
                    type="text"
                    name="name"
                    label="Nom"
                    placeholder="Nom de la categorie"
                    component={Input}
                    className="rounded-xl w-full mb-2"
                    errorRight
                />
                <Field
                    type="text"
                    name="description"
                    placeholder="Description de la catégorie"
                    component={Input}
                    className="rounded-xl w-full mb-2"
                    errorRight
                />
                <label
                    htmlFor="parent"
                    className="block text-PrimaryWaya-light mb-2 ml-2"
                >
                    Catégorie parente:
                </label>
                <Field name="parent" as="select" className="input rounded-xl w-full">
                    <option value={0}>Aucune</option>
                    {list.length > 0 &&
                        list.map((cat) => {
                            return (
                                <option value={cat.id} key={cat.id}>
                                    {`${cat.id} ${cat.category_name}`}
                                </option>
                            );
                        })}
                </Field>
            </div>

            <div className="flex flex-col md:flex-row justify-center md:mt-8">
                <Link to={URL_COMMERCIAL_CATEGORIES}>
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

const CommercialCategoryForm = (props) => {
    return (
        <div>
            <FormCategory
                errorLog={props.errorLog}
                submit={props.handleSubmit}
                initalValues={props.initialValues}
                list={props.list}
                enableReinitialize
                labelSubmit={props.labelSubmit}
            />
        </div>
    );
};

export default CommercialCategoryForm;
