import { Field, Form, Formik } from 'formik';
import React from 'react';

const AddBook = () => {
    return (
        <div>
            <h1>Ajoutez un livre</h1>
            <Formik
                initialValues={{ name: '', isbn: '', datePublished: '', description: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        console.log(values);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Nom :</label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && errors.name}
                        </div>
                        <div>
                            <label htmlFor="isbn">isbn :</label>
                            <input
                                type="text"
                                name="isbn"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.isbn}
                            />
                            {errors.isbn && touched.isbn && errors.isbn}
                        </div>
                        <div>
                            <label htmlFor="datePublished">date de publication :</label>
                            <input
                                type="text"
                                name="datePublished"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.datePublished}
                            />
                            {errors.datePublished &&
                                touched.datePublished &&
                                errors.datePublished}
                        </div>
                        <div>
                            <label htmlFor="description">description :</label>
                            <input
                                type="text"
                                name="description"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                            />
                            {errors.description &&
                                touched.description &&
                                errors.description}
                        </div>
                        <div>
                            <label htmlFor="descriptionLong">description long :</label>
                            <input
                                type="text"
                                name="descriptionLong"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.descriptionLong}
                            />
                            {errors.descriptionLong &&
                                touched.descriptionLong &&
                                errors.descriptionLong}
                        </div>
                        <div>
                            <label htmlFor="pages">pages :</label>
                            <input
                                type="text"
                                name="pages"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.pages}
                            />
                            {errors.pages && touched.pages && errors.pages}
                        </div>
                        <div>
                            <label htmlFor="prices">prix :</label>
                            <input
                                type="text"
                                name="prices"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.prices}
                            />
                            {errors.prices && touched.prices && errors.prices}
                        </div>
                        <div>
                            <label htmlFor="stock">Stock :</label>
                            <input
                                type="text"
                                name="stock"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.stock}
                            />
                            {errors.stock && touched.stock && errors.stock}
                        </div>
                        <div>
                            <label htmlFor="dimensions">Dimensions :</label>
                            <input
                                type="text"
                                name="dimensions"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dimensions}
                            />
                            {errors.dimensions && touched.dimensions && errors.dimensions}
                        </div>
                        <div>
                            <label htmlFor="weight">poids :</label>
                            <input
                                type="text"
                                name="weight"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.weight}
                            />
                            {errors.weight && touched.weight && errors.weight}
                        </div>
                        <div>
                            <label htmlFor="discount">discount :</label>
                            <input
                                type="text"
                                name="discount"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.discount}
                            />
                            {errors.discount && touched.discount && errors.discount}
                        </div>
                        <div>
                            <label htmlFor="image">image :</label>
                            <input
                                type="text"
                                name="image"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.image}
                            />
                            {errors.image && touched.image && errors.image}
                        </div>
                        <div>
                            <div id="my-radio-group">publique :</div>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label htmlFor="image">
                                    <Field type="radio" name="picked" value="true" />
                                    oui
                                </label>
                                <label htmlFor="image">
                                    <Field type="radio" name="picked" value="false" />
                                    non
                                </label>
                                <div>Picked: {values.picked}</div>
                            </div>
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default AddBook;
