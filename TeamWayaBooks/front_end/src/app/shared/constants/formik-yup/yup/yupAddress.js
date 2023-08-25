import * as Yup from 'yup';

export const schemaFormAddress = Yup.object().shape({
    address: Yup.string().required('Required input'),
    complement: Yup.string().nullable(),
    zipCode: Yup.string().required('Required input'),
    city: Yup.string().required('Required input'),
    country: Yup.string().required('Required input'),
});
