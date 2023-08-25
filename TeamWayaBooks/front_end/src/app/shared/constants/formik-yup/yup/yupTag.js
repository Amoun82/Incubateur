import * as Yup from 'yup';

export const schemaFormTag = Yup.object().shape({
    name: Yup.string().required('Required input'),
});
