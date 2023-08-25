import * as Yup from 'yup';

export const schemaFormEditPassword = Yup.object().shape({
    password: Yup.string().required('Required input'),
    newPassword: Yup.string().required('Required input'),
    passwordConfirm: Yup.string()
        .required('Required input')
        .test('Password matches', 'Password does not match', function () {
            return this.parent.newPassword === this.parent.passwordConfirm;
        }),
});
