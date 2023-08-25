import * as Yup from 'yup';

export const schemaFormSearch = Yup.object().shape({
    categories: Yup.array(),
    tags: Yup.array(),
    authors: Yup.array(),
    search: Yup.string(),
});
