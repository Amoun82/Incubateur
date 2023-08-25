import { URL_BACK_EVALUATION } from './../../shared/constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function getEvaluation(id) {
    return apiBackEnd.get(URL_BACK_EVALUATION + '/' + id);
}

export function getAverageEvaluation(id) {
    return apiBackEnd.get(URL_BACK_EVALUATION + '/' + id + '/average');
}
