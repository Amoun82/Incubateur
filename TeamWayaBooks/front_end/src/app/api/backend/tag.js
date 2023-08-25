import {
    URL_BACK_COMMERCIAL_TAG,
    URL_BACK_TAG_NAME,
} from '../../shared/constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function nameByTag(value) {
    const resultat = apiBackEnd.get(URL_BACK_TAG_NAME + '/' + value);
    return resultat;
}

export function getCommercialTags() {
    return apiBackEnd.get(URL_BACK_COMMERCIAL_TAG);
}

export function getCommercialTag(id) {
    return apiBackEnd.get(URL_BACK_COMMERCIAL_TAG + `/${id}`);
}

export function addCommercialTag(values) {
    return apiBackEnd.post(URL_BACK_COMMERCIAL_TAG, values);
}

export function deleteCommercialTag(id) {
    return apiBackEnd.delete(URL_BACK_COMMERCIAL_TAG + `/${id}`);
}

export function updateCommercialTag(id, values) {
    return apiBackEnd.patch(URL_BACK_COMMERCIAL_TAG + `/${id}`, values);
}
