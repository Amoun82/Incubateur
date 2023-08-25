import { URL_BACK_CONTACT_ANONYMOUS } from './../../shared/constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function sendContactMail(values) {
    return apiBackEnd.post(URL_BACK_CONTACT_ANONYMOUS, values);
}
