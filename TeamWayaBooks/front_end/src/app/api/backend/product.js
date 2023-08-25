import {
    URL_BACK_COMMERCIAL_PRODUCT,
    URL_BACK_LIST_TAG,
    URL_BACK_PRODUCT,
    URL_BACK_PRODUCT_CATEGORY,
    URL_BACK_PRODUCT_DETAIL,
    URL_BACK_PRODUCT_LIST_CATEGORY,
    URL_BACK_PRODUCT_SEARCH,
} from '../../shared/constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function SearchProduct(values) {
    try {
        const resultat = apiBackEnd.get(URL_BACK_PRODUCT_SEARCH + '/' + values);
        return resultat;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export function detailProductById(value) {
    const resultat = apiBackEnd.get(URL_BACK_PRODUCT_DETAIL + '/' + value);
    return resultat;
}

export function listProductsByTag(tag, page = 1, limit = 8) {
    const resultat = apiBackEnd.get(
        URL_BACK_LIST_TAG + `?page=${page}&limit=${limit}&tag=${tag}`,
    );
    return resultat;
}

export function productByCategory(value) {
    const resultat = apiBackEnd.get(URL_BACK_PRODUCT_CATEGORY + '/' + value);
    return resultat;
}

export function listProductsByCategory(category, page = 1, limit = 8) {
    const resultat = apiBackEnd.get(
        URL_BACK_PRODUCT_LIST_CATEGORY + `/?page=${page}&limit=${limit}&category=${category}`,
    );
    return resultat;
}

export function getCommercialProducts() {
    return apiBackEnd.get(URL_BACK_COMMERCIAL_PRODUCT);
}

export function getCommercialProductById(value) {
    return apiBackEnd.get(URL_BACK_COMMERCIAL_PRODUCT + '/' + value);
}

export function advancedSearch(values, page, limit) {
    return apiBackEnd.get(URL_BACK_PRODUCT + `/advanced-search`, {
        params: {
            search: values.search,
            authors: values.authors.join(','),
            categories: values.categories.join(','),
            tags: values.tags.join(','),
            page: page,
            limit: limit,
        },
    });
}
