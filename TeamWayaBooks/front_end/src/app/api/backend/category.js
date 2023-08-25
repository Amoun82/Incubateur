import { URL_BACK_COMMERCIAL_CATEGORY } from '../../shared/constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function getCommercialCategories() {
    return apiBackEnd.get(URL_BACK_COMMERCIAL_CATEGORY);
}

export function getCommercialShortCategories() {
    return apiBackEnd.get(URL_BACK_COMMERCIAL_CATEGORY + '/short');
}

export function addCommercialCategory(values) {
    return apiBackEnd.post(URL_BACK_COMMERCIAL_CATEGORY, values);
}

export function getCommercialCategory(id) {
    return apiBackEnd.get(URL_BACK_COMMERCIAL_CATEGORY + `/${id}`);
}

export function updateCommercialCategory(id, values) {
    return apiBackEnd.patch(URL_BACK_COMMERCIAL_CATEGORY + `/${id}`, values);
}

export function deleteCommercialCategory(id) {
    return apiBackEnd.delete(URL_BACK_COMMERCIAL_CATEGORY + `/${id}`);
}
