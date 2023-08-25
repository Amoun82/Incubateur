import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';

import { getShortAuthors } from './../../api/backend/author';
import { getCommercialShortCategories } from './../../api/backend/category';
import { getCommercialTags } from './../../api/backend/tag';
import Input from './../../shared/components/form-and-error-components/Input';
import { CheckboxGroup } from './../../shared/components/form-and-error-components/InputChoices';
import { schemaFormSearch } from './../../shared/constants/formik-yup/yup/yupSearch';

const SearchForm = ({
    submit,
    listAuts,
    listCategories,
    listTags,
    selectedCats,
    selectedAuts,
    selectedTags,
    searchString,
}) => (
    <Formik
        initialValues={{
            tags: selectedTags,
            authors: selectedAuts,
            categories: selectedCats,
            search: searchString,
        }}
        onSubmit={submit}
        validationSchema={schemaFormSearch}
        enableReinitialize
    >
        {({ values }) => (
            <Form className="my-1 w-max-  ml-1">
                <div className="rounded-md shadow-sm w-full">
                    <Field
                        type="text"
                        name="search"
                        placeholder="search"
                        component={Input}
                        className="rounded-md mb-1"
                        errorRight
                    />
                    <button type="submit" className="btn btn-waya">
                        Rechercher
                    </button>
                    <label
                        htmlFor="tags"
                        className="block text-PrimaryWaya-light mb-2 ml-2"
                    >
                        Tags
                    </label>
                    <CheckboxGroup
                        name="tags"
                        className="rounded-xl w-full mb-2"
                        options={listTags}
                        valueSelected={values.tags}
                    />
                    <label
                        htmlFor="authors"
                        className="block text-PrimaryWaya-light mb-2 ml-2"
                    >
                        Auteurs
                    </label>
                    <CheckboxGroup
                        name="authors"
                        className="rounded-xl w-full mb-2"
                        options={listAuts}
                        valueSelected={values.authors}
                    />
                    <label
                        htmlFor="categories"
                        className="block text-PrimaryWaya-light mb-2 ml-2"
                    >
                        Catégories
                    </label>
                    <CheckboxGroup
                        name="categories"
                        className="rounded-xl w-full mb-2"
                        options={listCategories}
                        valueSelected={values.categories}
                    />
                </div>
            </Form>
        )}
    </Formik>
);

const SearchBar = (props) => {
    const [search, setSearch] = useState('');
    const [listAut, setListAut] = useState([]);
    const [listCat, setListCat] = useState([]);
    const [listTag, setListTag] = useState([]);
    const [selectedAut, setSelectedAut] = useState([]);
    const [selectedTag, setSelectedTag] = useState([]);
    const [selectedCat, setSelectedCat] = useState([]);
    useEffect(() => {
        getCommercialShortCategories().then((response) => {
            setListCat(
                response.data.map((cat) => {
                    return { label: cat.category_name, value: cat.id.toString() };
                }),
            );
        });
        getCommercialTags().then((response) => {
            setListTag(
                response.data.map((tag) => {
                    return { label: tag.tag_name, value: tag.id.toString() };
                }),
            );
        });
        getShortAuthors().then((response) => {
            setListAut(
                response.data.map((aut) => {
                    return {
                        label: `${aut.author_firstname} ${aut.author_lastname}`,
                        value: aut.id.toString(),
                    };
                }),
            );
        });
    }, []);
    useEffect(() => {
        setSelectedAut(props.authors);
        setSelectedCat(props.categories);
        setSelectedTag(props.tags);
        setSearch(props.search);
    }, [props]);

    const handleSubmit = (values) => {
        props.handleSubmit(values);
    };

    return (
        <div className="w-full h-full flex flex-col pt-2  bg-white text-PrimaryWaya-light font-bold box-content">
            {listTag.length > 0 && listCat.length > 0 && listAut.length > 0 && (
                <SearchForm
                    listTags={listTag}
                    listCategories={listCat}
                    listAuts={listAut}
                    selectedTags={selectedTag}
                    selectedCats={selectedCat}
                    selectedAuts={selectedAut}
                    submit={handleSubmit}
                    searchString={search}
                />
            )}
        </div>
    );
};

export default SearchBar;
