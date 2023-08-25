import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import Input from '../../shared/components/form-and-error-components/Input';
import { getUserEditProfile, postUserEditProfile } from './../../api/backend/account';
import { schemaFormEditProfil } from './../../shared/constants/formik-yup/yup/yupEditProfil.js';
import { URL_LOGIN, URL_SECURITY } from './../../shared/constants/urls/urlConstants';
import { signOut } from './../../shared/redux-store/authenticationSlice';

function EditProfile() {
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        emailConfirm: '',
        password: '',
    });
    const history = useHistory();
    const dispatch = useDispatch();
    const getData = () => {
        getUserEditProfile()
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                if (err.status === 401 && err.message === 'Expired JWT Token')
                    history.push(URL_LOGIN);
            });
    };
    const postData = (data) => {
        postUserEditProfile(data).then((res) => {
            if (res.status === 200) {
                if (data.emailEdit !== user.email) {
                    toast.success(
                        "Votre compte et votre email viennent d'être modifiés.\nVeuillez vous reconnecter",
                        {
                            position: 'top-center',
                            autoClose: 3000,
                        },
                    );
                    dispatch(signOut());
                    history.push(URL_LOGIN);
                } else {
                    toast.success("Votre compte vient d'être modifié.", {
                        position: 'top-center',
                        autoClose: 3000,
                    });
                    history.push(URL_SECURITY);
                }
            }
        });
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="border w-full">
            <Formik
                initialValues={{
                    lastname: user.lastname,
                    firstname: user.firstname,
                    emailEdit: user.email,
                    emailConfirmEdit: user.email,
                    password: '',
                }}
                onSubmit={(values) => {
                    postData(values);
                }}
                validationSchema={schemaFormEditProfil}
                enableReinitialize
            >
                {() => (
                    <>
                        <Form className="flex flex-col mt-12 mb-12" action="submit">
                            <div className="flex flex-col md:flex-row mt-12 mx-10">
                                <Field
                                    className="rounded-full h-10 text-base md:text-xl md:mr-5 mb-5 md:mb-0"
                                    placeholder="Nom"
                                    type="text"
                                    component={Input}
                                    name="lastname"
                                    id="lastname"
                                    errorRight
                                />
                                <Field
                                    className="rounded-full h-10 text-base md:text-xl md:ml-5"
                                    placeholder="Prenom"
                                    type="text"
                                    component={Input}
                                    name="firstname"
                                    id="firstname"
                                    errorRight
                                />
                            </div>
                            <div className="flex flex-col md:flex-row mt-12 mx-10">
                                <Field
                                    className="rounded-full h-10 text-base md:text-xl md:mr-5 mb-5 md:mb-0"
                                    placeholder="Email"
                                    type="text"
                                    component={Input}
                                    name="emailEdit"
                                    id="email"
                                    errorRight
                                />
                                <Field
                                    className="rounded-full h-10 text-base md:text-xl md:ml-5"
                                    placeholder="Confirmation d'email"
                                    type="text"
                                    component={Input}
                                    name="emailConfirmEdit"
                                    id="emailConfirmEdit"
                                    errorRight
                                />
                            </div>
                            <div className="flex mt-12 mx-10">
                                <Field
                                    className="rounded-full h-10 text-base md:text-xl w-full mr-5"
                                    placeholder="votre mot de passe"
                                    type="password"
                                    component={Input}
                                    name="password"
                                    id="password"
                                    errorRight
                                />
                            </div>
                            <div className="flex flex-col-reverse md:flex-row justify-between mt-12 mx-10">
                                <Link to={URL_SECURITY}>
                                    <button className="btn w-full bg-PrimaryWaya-light text-white">
                                        Retour
                                    </button>
                                </Link>
                                <button
                                    className="btn bg-PrimaryWaya-light text-white mb-5 md:mb-0"
                                    type="submit"
                                >
                                    Enregistrer la modifcation
                                </button>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        </div>
    );
}

export default EditProfile;
