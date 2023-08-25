import * as Yup from 'yup';

export const schemaFormProduct = Yup.object().shape({
    name: Yup.string().required('Required input'),
    ISBN: Yup.string().nullable(),
    price: Yup.number().required('Required input'),
    stock: Yup.number().required('Required input'),
    public: Yup.bool().required('Required input'),
});
