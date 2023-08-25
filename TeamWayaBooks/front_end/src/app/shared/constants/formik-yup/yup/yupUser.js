import * as Yup from 'yup';

export const schemaFormLogin = Yup.object().shape({
    username: Yup.string().email('Must be a valid Email').required('Required input'),
    password: Yup.string().required('Required input'),
});
