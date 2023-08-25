import {
    URL_BACK_ADDRESSES,
    URL_BACK_AUTHENTICATE,
    URL_BACK_EDIT_PASSWORD,
    URL_BACK_EDIT_PROFILE,
    URL_BACK_EMAIL_CONFIRM,
    URL_BACK_FORGOTTEN_PASSWORD,
    URL_BACK_RESET_PASSWORD,
    URL_BACK_USER,
    URL_BACK_USER_FULL_NAME,
    URL_BACK_USER_ID,
    URL_BACK_USER_REGISTER,
} from './../../shared/constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function authenticate(values) {
    return apiBackEnd.post(URL_BACK_AUTHENTICATE, values);
}

export function userCreate(values) {
    return apiBackEnd.post(URL_BACK_USER_REGISTER, values);
}

export function userDelete(value) {
    return apiBackEnd.delete(URL_BACK_USER + '/' + value);
}

export function userEmailConfirm(value) {
    const request = URL_BACK_EMAIL_CONFIRM + '/' + value;
    return apiBackEnd.post(request);
}

export function userForgottenPassword(values) {
    return apiBackEnd.post(URL_BACK_FORGOTTEN_PASSWORD, values);
}

export function userGetId() {
    return apiBackEnd.get(URL_BACK_USER_ID);
}

export function userGetFullName() {
    return apiBackEnd.get(URL_BACK_USER_FULL_NAME);
}

export function userResetPassword(values) {
    console.log(values);
    return apiBackEnd.post(URL_BACK_RESET_PASSWORD, values);
}

export function userAdresses(value) {
    return apiBackEnd.get(URL_BACK_ADDRESSES, value);
}

export function userEditPassword(values) {
    return apiBackEnd.post(URL_BACK_EDIT_PASSWORD, values);
}

export function getUserEditProfile() {
    return apiBackEnd.get(URL_BACK_EDIT_PROFILE);
}

export function postUserEditProfile(values) {
    return apiBackEnd.post(URL_BACK_EDIT_PROFILE, values);
}

export function getUsers() {
    return apiBackEnd.get(URL_BACK_USER);
}
