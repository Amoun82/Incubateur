import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { signOut } from '../../shared/redux-store/authenticationSlice';
import { userDelete, userGetId } from './../../api/backend/account';
import account from './../../assets/images/monCompte.png';

const DeleteProfile = () => {
    const [id, setId] = useState(-1);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        await userDelete(id).then((response) => {
            console.log(response.data.message);
            toast.success(
                <div>
                    Votre compte vient d&apos;être supprimé.
                    <br />
                    Merci d&apos;avoir utilisé notre site.
                </div>,
                {
                    position: 'top-center',
                    autoClose: 30000,
                },
            );
            dispatch(signOut());
        });
    };

    const getUserId = () => {
        userGetId().then((res) => {
            setId(res.data.id);
        });
    };

    useEffect(() => {
        getUserId();
    }, []);

    console.log(id);
    return (
        <div className="w-4/5 p-2 border-2 rounded-md shadow max-w-3xl flex flex-col items-center justify-middle">
            <img
                className="h-10 w-auto sm:h-24 cursor-pointer mt-10"
                src={account}
                alt="lock"
            />
            <p className="w-4/5 text-center block my-10">
                Vos données sont désormais enregistrées pour faciliter vos futurs achats
                sur notre site.
                <br /> Si vous ne prévoyez pas d’utiliser notre site à nouveau, vous
                pouvez supprimer votre compte dès maintenant en cliquant ici.
                <br />
                Cela nous permet de libérer de l’espace sur nos serveurs et ainsi de
                diminuer notre impact carbone.
            </p>
            <div className="w-full sm:w-4/5 flex flex-row  items-center justify-between mb-10">
                <div>
                    <button className="btn btn-waya mt-2" onClick={history.goBack}>
                        Retour
                    </button>
                </div>
                <div>
                    <button className="btn btn-waya mt-2" onClick={handleSubmit}>
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteProfile;
