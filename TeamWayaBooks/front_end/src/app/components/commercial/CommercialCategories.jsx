import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
    deleteCommercialCategory,
    getCommercialCategories,
} from './../../api/backend/category';
import SimpleList from './../../shared/components/container/SimpleList';
import SmallModal from './../../shared/components/utils-components/SmallModal';
import {
    URL_COMMERCIAL_CATEGORY,
    URL_COMMERCIAL_CATEGORY_UPDATE,
} from './../../shared/constants/urls/urlConstants';

const CommercialCategories = () => {
    const [categories, setCategories] = useState([]);
    const [listCategories, setListCategories] = useState([]);

    const onConfirm = (id, name) => {
        deleteCommercialCategory(id).then((response) => {
            if (response.status === 200) {
                toast.success(`La catégorie ${name} a été supprimée.`, {
                    position: 'top-center',
                    autoClose: 3000,
                });
                setListCategories((previous) => {
                    return previous.filter((cat) => cat.id !== id);
                });
            }
        });
    };

    useEffect(() => {
        getCommercialCategories()
            .then((response) => {
                setListCategories(response.data);
            })
            .catch((error) => {
                console.log(error.data);
            });
    }, []);

    useEffect(() => {
        if (listCategories.length > 0) {
            setCategories(
                listCategories.map((c) => {
                    return {
                        id: (
                            <Link
                                to={`${URL_COMMERCIAL_CATEGORY}?id=${c.id}`}
                                className="hover:text-PrimaryWaya-light hover:font-bold"
                            >
                                {c.id}
                            </Link>
                        ),
                        name: (
                            <Link
                                to={`${URL_COMMERCIAL_CATEGORY}?id=${c.id}`}
                                className="hover:text-PrimaryWaya-light hover:font-bold"
                            >
                                {c.category_name}
                            </Link>
                        ),
                        description: c.description,
                        parent: !c.parent ? null : c.parent.id,
                        edit: (
                            <Link
                                to={`${URL_COMMERCIAL_CATEGORY_UPDATE}?id=${c.id}`}
                                className="hover:text-PrimaryWaya-light hover:font-bold"
                            >
                                Edit
                            </Link>
                        ),
                        delete: (
                            <SmallModal
                                label="Suppression"
                                title="Suppression de catégorie"
                                body={`Etes vous sur de vouloir supprimer la catégorie : ${c.category_name} ?`}
                                onValidate={() => onConfirm(c.id, c.category_name)}
                            />
                        ),
                    };
                }),
            );
        }
    }, [listCategories]);

    return (
        <div>
            {categories.length > 0 && (
                <SimpleList
                    data={{
                        column: [
                            { name: 'Id' },
                            { name: 'Name' },
                            { name: 'Description' },
                            { name: 'Parent' },
                            { name: 'Edit' },
                            { name: 'Delete' },
                        ],
                        rows: categories,
                    }}
                />
            )}
        </div>
    );
};

export default CommercialCategories;
