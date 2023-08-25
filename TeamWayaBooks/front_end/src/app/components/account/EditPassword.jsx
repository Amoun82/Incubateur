import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import Input from '../../shared/components/form-and-error-components/Input';
import { userEditPassword } from './../../api/backend/account';
import { defaultValuesEditPassword } from './../../shared/constants/formik-yup/default-values-form/defautlValuesEditPassword';
import { schemaFormEditPassword } from './../../shared/constants/formik-yup/yup/yupEditPassword';
import { URL_SECURITY } from './../../shared/constants/urls/urlConstants';

const EditPassword = () => {
    const history = useHistory();
    const postData = (data) => {
        userEditPassword(data).then((res) => {
            if (res.status === 200) {
                toast.success("Votre password vient d'être modifié.", {
                    position: 'top-center',
                    autoClose: 3000,
                });
                history.push(URL_SECURITY);
            }
        });
    };
    return (
        <Formik
            initialValues={defaultValuesEditPassword}
            onSubmit={(values) => {
                postData(values);
            }}
            validationSchema={schemaFormEditPassword}
        >
            {() => (
                <>
                    <Form
                        className="flex flex-col mt-12 mb-12 w-5/6 md:w-1/2"
                        action="submit"
                    >
                        <div className="">
                            <Field
                                className="rounded-full h-10 mt-12 text-base md:text-xl"
                                placeholder="Votre ancien mot de passe"
                                type="password"
                                component={Input}
                                name="password"
                                id="password"
                                errorRight
                            />
                            <Field
                                className="rounded-full h-10 mt-12 text-base md:text-xl"
                                placeholder="Nouveau mot de passe"
                                type="password"
                                component={Input}
                                name="newPassword"
                                id="newPassword"
                                errorRight
                            />
                            <Field
                                className="rounded-full h-10 mt-12 text-base md:text-xl"
                                placeholder="Confirmation du nouveau mot de passe"
                                type="password"
                                component={Input}
                                name="passwordConfirm"
                                id="passwordConfirm"
                                errorRight
                            />
                        </div>
                        <div className="flex flex-col-reverse sm:flex-row justify-between mt-12">
                            <Link to={URL_SECURITY}>
                                <button className="btn w-full bg-PrimaryWaya-light text-white">
                                    Retour
                                </button>
                            </Link>
                            <button
                                className="btn bg-PrimaryWaya-light text-white mb-5 sm:mb-0"
                                type="submit"
                            >
                                Enregistrer la modifcation
                            </button>
                        </div>
                    </Form>
                </>
            )}
        </Formik>
    );
};

export default EditPassword;
