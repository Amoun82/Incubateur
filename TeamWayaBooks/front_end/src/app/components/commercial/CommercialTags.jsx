import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { deleteCommercialTag, getCommercialTags } from './../../api/backend/tag';
import SimpleList from './../../shared/components/container/SimpleList';
import SmallModal from './../../shared/components/utils-components/SmallModal';
import { URL_COMMERCIAL_TAG_UPDATE } from './../../shared/constants/urls/urlConstants';

const CommercialTags = () => {
    const [tags, setTags] = useState([]);
    const [listTags, setListTags] = useState([]);

    useEffect(() => {
        getCommercialTags()
            .then((response) => {
                setListTags(response.data);
            })
            .catch((error) => {
                console.log(error.data);
            });
    }, []);

    useEffect(() => {
        if (listTags.length > 0) {
            setTags(
                listTags.map((t) => {
                    return {
                        id: t.id,
                        name: t.tag_name,
                        edit: (
                            <Link
                                to={`${URL_COMMERCIAL_TAG_UPDATE}?id=${t.id}`}
                                className="hover:text-PrimaryWaya-light hover:font-bold"
                            >
                                <button className="btn btn-waya">Edit</button>
                            </Link>
                        ),
                        delete: (
                            <SmallModal
                                label="Suppression"
                                title="Suppression de Tag"
                                body={`Etes vous sur de vouloir supprimer le Tag : ${t.tag_name} ?`}
                                onValidate={() => onConfirm(t.id, t.tag_name)}
                            />
                        ),
                    };
                }),
            );
        }
    }, [listTags]);

    const onConfirm = (id, name) => {
        deleteCommercialTag(id).then((response) => {
            if (response.status === 200) {
                toast.success(`Le Tag ${name} a été supprimé.`, {
                    position: 'top-center',
                    autoClose: 3000,
                });
                setListTags((previous) => {
                    return previous.filter((tag) => tag.id !== id);
                });
            }
        });
    };

    return (
        <div>
            {tags.length > 0 && (
                <SimpleList
                    data={{
                        column: [
                            { name: 'Id' },
                            { name: 'Name' },
                            { name: 'Edit' },
                            { name: 'Delete' },
                        ],
                        rows: tags,
                    }}
                />
            )}
        </div>
    );
};

export default CommercialTags;
