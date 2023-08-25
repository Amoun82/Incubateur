import * as Yup from 'yup';

export const schemaFormResetPassword = Yup.object().shape({
    password: Yup.string().required('Required input'),
    passwordConfirm: Yup.string()
        .required('Required input')
        .test('Password matches', 'Password does not match', function () {
            return this.parent.password === this.parent.passwordConfirm;
        }),
});
