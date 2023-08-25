import axios from 'axios';
import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

export default class FormAllProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: {},
        };
    }

    getAll() {
        axios
            .get('https://127.0.0.1:8000/api/product/')
            .then((res) => {
                //console.log(typeof res.data);
                this.setState({
                    products: res.data,
                });
                //console.log(this.state);
            })
            .catch((error) => console.log(error));
    }

    componentDidMount() {
        // get data for BDD
        this.getAll();
    }

    componentWillUnmount() {
        this.setState({
            products: {},
        });
    }

    render() {
        const vadilSchema = Yup.object().shape({
            name: Yup.string()
                .min(5, 'Too Short!')
                .max(15, 'Too Long!')
                .required('Required'),
        });
        function handleClick(value) {
            console.log('Le lien a été cliqué.');
            console.log(value);
            window.open(`http://localhost:3000/product/productid=${value}`, '_self');
        }

        console.log(this.state.products);
        return (
            <div className="bg-[url('/src/app/assets/images/frida-retouchee.png')] bg-cover bg-center h-full">
                <h1 className="text-white font-bold text-center font-roboto pt-4 mb-4">
                    Crud produit
                </h1>

                <Formik
                    initialValues={{}}
                    validationSchema={vadilSchema}
                    onSubmit={this.handleSubmit}
                >
                    {() => (
                        <Form className="text-center">
                            <div>
                                {Object.entries(this.state.products).map(
                                    ([key, value]) => {
                                        return (
                                            <ul
                                                className="flex flex-col text-left text-white font-bold font-roboto border mx-4"
                                                key={key}
                                            >
                                                <li
                                                    className="mx-2"
                                                    onClick={() => handleClick(value.id)}
                                                >
                                                    id : {value.id} name : {value.name}{' '}
                                                    quantity : {value.quantity} img :{' '}
                                                    {value.imglink}
                                                </li>
                                            </ul>
                                        );
                                    },
                                )}
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}
