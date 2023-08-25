import * as Yup from 'yup';

export const schemaFormEditProfil = Yup.object().shape({
    firstname: Yup.string().required('Required input'),
    lastname: Yup.string().required('Required input'),
    emailEdit: Yup.string().required('Required input').email('Must be a valid Email'),
    emailConfirmEdit: Yup.string()
        .required('Required input')
        .email('Must be a valid Email')
        .test('Email matches', 'Email does not match', function () {
            return this.parent.emailEdit === this.parent.emailConfirmEdit;
        }),
    password: Yup.string().required('Required input'),
});
