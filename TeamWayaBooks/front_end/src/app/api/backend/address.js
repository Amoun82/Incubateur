import { URL_BACK_ADDRESS } from './../../shared/constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function getAddress(id) {
    return apiBackEnd.get(URL_BACK_ADDRESS + '/' + id);
}
export function patchAddress(id, values) {
    return apiBackEnd.patch(URL_BACK_ADDRESS + '/' + id, values);
}
export function addAddress(values) {
    return apiBackEnd.post(URL_BACK_ADDRESS, values);
}
export function deleteAddress(id) {
    return apiBackEnd.delete(URL_BACK_ADDRESS + '/' + id);
}
