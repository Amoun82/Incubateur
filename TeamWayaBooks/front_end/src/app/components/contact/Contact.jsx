import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import Input from '../../shared/components/form-and-error-components/Input';
import Text from '../../shared/components/form-and-error-components/Text';
import { sendContactMail } from './../../api/backend/contact';
import ErrorMessSmall from './../../shared/components/form-and-error-components/ErrorMessSmall';
import { defaultValuesContact } from './../../shared/constants/formik-yup/default-values-form/defaultValuesContact';
import { schemaContact } from './../../shared/constants/formik-yup/yup/yupContact';
import { URL_HOME } from './../../shared/constants/urls/urlConstants';

const FormContact = ({ submit, errorLog, history }) => (
    <Formik
        initialValues={defaultValuesContact}
        onSubmit={submit}
        validationSchema={schemaContact}
    >
        <Form className="mt-4">
            <div className="w-full rounded-md flex flex-col md:flex-row md:justify-between">
                <div className="w-full md:w-5/12">
                    <Field
                        type="text"
                        name="email"
                        placeholder="Email"
                        component={Input}
                        className="rounded-md w-full mt-2"
                        errorRight
                    />
                </div>
                <div className="w-full md:w-5/12">
                    <Field
                        type="text"
                        name="subject"
                        placeholder="Sujet"
                        component={Input}
                        className="rounded-md w-full mt-2"
                        errorRight
                    />
                </div>
            </div>

            <div className="w-full my-2 sm:my-4">
                <Field
                    name="message"
                    placeholder="Votre message"
                    type="textarea"
                    component={Text}
                    className="rounded-md w-full sm:h-40"
                    errorRight
                />
            </div>

            <div className="w-full sm:my-2 flex flex-col sm:flex-row items-center justify-between">
                <button
                    type="button"
                    className="btn btn-waya mt-2 sm:my-0"
                    onClick={history.goBack}
                >
                    Retour
                </button>
                <button type="submit" className="btn btn-waya mt-2 sm:my-0">
                    Envoyer
                </button>
            </div>
            {errorLog && <ErrorMessSmall middle message="Valeurs incorrectes" />}
        </Form>
    </Formik>
);

const Contact = () => {
    const [errorLog, setErrorLog] = useState(false);
    const history = useHistory();

    const handleSubmit = async (values) => {
        await sendContactMail(values)
            .then(() => {
                toast.success("Votre demande vient d'être traitée.", {
                    position: 'top-center',
                    autoClose: 3000,
                });
                history.push(URL_HOME);
            })
            .catch(() => {
                setErrorLog(false);
            });
    };

    return (
        <div className="w-4/5">
            <FormContact history={history} submit={handleSubmit} errorLog={errorLog} />
        </div>
    );
};

export default Contact;
