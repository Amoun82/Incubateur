import { URL_BACK_AUTHOR } from '../../shared/constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function getShortAuthors() {
    const resultat = apiBackEnd.get(URL_BACK_AUTHOR + '/short');
    return resultat;
}
