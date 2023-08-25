import * as Yup from 'yup';

export const schemaFormCategory = Yup.object().shape({
    name: Yup.string().required('Required input'),
    description: Yup.string().required('Required input'),
    parent: Yup.number().nullable(),
});
