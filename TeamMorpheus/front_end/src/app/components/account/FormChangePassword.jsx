import React from 'react';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';

export default class FormChangePassword extends React.Component {
    state = {
        email: '',
        oldpassword: '',
        password: '',
        errormessage: ''
    };

    componentDidMount() {

        const api = 'https://127.0.0.1:8000/api/user/account/getoken';

        const token = localStorage.getItem('token');

        setTimeout(() => {
            axios.get(api, { headers: { "Authorization": `${token}` } })
                .then(res => {
                    this.setState({
                        email: res.data.email,
                        password: res.data.password
                    })

                })
                .catch((error) => {
                    console.log(error)
                });

        }, 1000);

    }


    SignupSchema() {
        return Yup.object().shape({

            password: Yup.string()
                .required('Please Enter your password')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
                ),
            passwordConfirm: Yup.string()
                .label('Password Confirm')
                .required()
                .oneOf([Yup.ref('password')], 'Passwords does not match'),

        });
    }

    render() {



        return (

            <div className=" bg-[url('/src/app/assets/images/street-art_retouchee.png')]  bg-cover bg-center h-screen  " >

                <Formik
                    initialValues={{
                        id: "",
                        oldpassword: '',
                        password: '',
                        passwordConfirm: '',
                    }}
                    validationSchema={this.SignupSchema}
                    onSubmit={(values) => {
                        const user_password = {
                            email: this.state.email,
                            password: values.password,
                            oldpassword: values.oldpassword

                        };

                        axios
                            .post('https://127.0.0.1:8000/api/user/change/password', user_password)
                            .then((res) => {
                                if (res.status === 200) {
                                    window.open("http://localhost:3000/login", "_self")


                                }

                            })
                            .catch((err) => {
                                this.setState({
                                    errormessage: "Old password wrong"
                                })
                                console.error(err);
                            });
                    }}
                >
                    {({ }) => (
                        <Form>
                            <h1 className="text-center text-xl mb-5 pt-8 text-white	font-extrabold">
                                Vous n'avez pas de compte ?
                            </h1>
                            <div className="mt-10 sm:mt-0 flex text-center justify-center">
                                <div className="md:grid  md:gap-7">
                                    <div className="mt-5 md:mt-0 md:col-span-2">
                                        <div className="grid grid-cols-6 gap-6">




                                            <div className="col-span-6 sm:col-span-3">
                                                <Field
                                                    name="oldpassword"
                                                    type="password"
                                                    placeholder="Old password"
                                                    className="bg-transparent text-white border-t-0 border-l-0 border-r-0 border-b-4 border-grey placeholder-white  "
                                                />

                                                <div className="col-span-6 sm:col-span-3">

                                                    <ErrorMessage
                                                        name="password"
                                                        component="small"
                                                        className="text-white"
                                                    />
                                                </div>

                                                <p className="text-white" >{this.state.errormessage}</p>
                                            </div>




                                            <div className="col-span-6 sm:col-span-3">
                                                <Field
                                                    name="password"
                                                    type="password"
                                                    placeholder=" New password"
                                                    className="bg-transparent text-white border-t-0 border-l-0 border-r-0 border-b-4 border-grey placeholder-white  "
                                                />

                                                <div className="col-span-6 sm:col-span-3">

                                                    <ErrorMessage
                                                        name="password"
                                                        component="small"
                                                        className="text-white"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <Field
                                                    name="passwordConfirm"
                                                    type="password"
                                                    placeholder=" Confirm new password"
                                                    className="bg-transparent text-white border-t-0 border-l-0 border-r-0 border-b-4 border-grey	placeholder-white  "
                                                />
                                                <div className="col-span-6 sm:col-span-3">

                                                    <ErrorMessage
                                                        name="passwordConfirm"
                                                        component="small"
                                                        className="text-white"
                                                    />
                                                </div>
                                            </div>

                                            <div className=" col-span-6 px-4 py-3 text-right sm:px-6 inline-flex justify-center">
                                                <button
                                                    type="submit"
                                                    className="w-96 py-2 px-4 border border-transparent bg-teal-400 font-extrabold		"
                                                >
                                                    S'enregistrer
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div >
        );
    }
}
