import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { advancedSearch } from './../api/backend/product';
import SearchBar from './../components/layouts/SearchBar';
import ListProducts from './../components/product/ListProducts';
import { URL_ADV_SEARCH } from './../shared/constants/urls/urlConstants';

const AdvancedSearchView = () => {
    const history = useHistory();
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [update, setUpdate] = useState(false);

    const getArrayFromString = (stringVar) => {
        let result = [];
        if (stringVar !== null) {
            if (stringVar.indexOf(',') > -1) {
                result = stringVar.split(',');
            } else {
                if (stringVar !== '') {
                    result.push(stringVar);
                }
            }
        }
        return result;
    };

    const getStringFromArray = (arrayVar) => {
        let result = '';
        if (arrayVar.length > 1) {
            result = arrayVar.join(',');
        }
        if (arrayVar.length === 1) {
            result = arrayVar[0];
        }
        return result;
    };

    useEffect(() => {
        const tmpSearch = new URLSearchParams(history.location.search).get('search');
        tmpSearch !== null ? setSearch(tmpSearch) : setSearch('');
        const tmpAuthors = new URLSearchParams(history.location.search).get('authors');
        setAuthors(getArrayFromString(tmpAuthors));
        const tmpCategories = new URLSearchParams(history.location.search).get(
            'categories',
        );
        setCategories(getArrayFromString(tmpCategories));
        const tmpTags = new URLSearchParams(history.location.search).get('tags');
        setTags(getArrayFromString(tmpTags));
        setUpdate(true);
    }, []);

    useEffect(() => {
        if (update) {
            const page = 1;
            const limit = 25;
            const values = {
                search: search,
                authors: authors,
                categories: categories,
                tags: tags,
            };
            // console.log(values);
            advancedSearch(values, page, limit).then((response) => {
                if (response.status == 200) {
                    // console.log(response.data);
                    setProducts(response.data);
                    setUpdate(false);
                    const tmpAuthors = getStringFromArray(authors);
                    const tmpCategories = getStringFromArray(categories);
                    const tmpTags = getStringFromArray(tags);
                    history.push(
                        `${URL_ADV_SEARCH}?search=${search}&authors=${tmpAuthors}&categories=${tmpCategories}&tags=${tmpTags}&page=${page}&limit=${limit}`,
                    );
                }
            });
        }
    }, [update]);

    const handleClick = (values) => {
        // console.log('values : ', values);
        setSearch(values.search);
        setAuthors(values.authors);
        setCategories(values.categories);
        setTags(values.tags);
        setUpdate((previous) => !previous);
    };

    return (
        <div className="flex w-full">
            <div className="w-40">
                <SearchBar
                    authors={authors}
                    categories={categories}
                    tags={tags}
                    search={search}
                    handleSubmit={handleClick}
                />
            </div>
            <div className="w-full">
                <ListProducts products={products} />
            </div>
        </div>
    );
};

export default AdvancedSearchView;
