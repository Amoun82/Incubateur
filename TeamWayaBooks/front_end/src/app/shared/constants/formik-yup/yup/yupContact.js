import * as Yup from 'yup';

export const schemaContact = Yup.object().shape({
    email: Yup.string()
        .email('Must be a valid Email')
        .max(255)
        .required('Required input'),
    subject: Yup.string().max(255).required('Required input'),
    message: Yup.string().max(255).required('Required input'),
});
