import * as Yup from 'yup';

export const schemaFormRegister = Yup.object().shape({
    firstname: Yup.string().required('Required input'),
    lastname: Yup.string().required('Required input'),
    email: Yup.string().required('Required input').email('Must be a valid Email'),
    emailConfirm: Yup.string()
        .required('Required input')
        .email('Must be a valid Email')
        .test('Email matches', 'Email does not match', function () {
            return this.parent.email === this.parent.emailConfirm;
        }),
    password: Yup.string().required('Required input'),
    passwordConfirm: Yup.string()
        .required('Required input')
        .test('Password matches', 'Password does not match', function () {
            return this.parent.password === this.parent.passwordConfirm;
        }),
    address: Yup.string().required('Required input'),
    complement: Yup.string().nullable(),
    zipCode: Yup.string().required('Required input'),
    city: Yup.string().required('Required input'),
    country: Yup.string().required('Required input'),
});
