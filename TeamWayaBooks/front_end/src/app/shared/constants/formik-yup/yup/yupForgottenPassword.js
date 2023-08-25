import * as Yup from 'yup';

export const schemaFormForgottenPassword = Yup.object().shape({
    email: Yup.string().email('Must be a valid Email').required('Required input'),
});
