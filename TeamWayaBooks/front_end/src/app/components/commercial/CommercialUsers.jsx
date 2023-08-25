import React, { useEffect, useState } from 'react';

import { getUsers } from './../../api/backend/account';
import SimpleList from './../../shared/components/container/SimpleList';

const CommercialUsers = () => {
    const [users, setUsers] = useState('');

    useEffect(() => {
        getUsers()
            .then((response) => {
                setUsers(
                    response.data.map((u) => {
                        return {
                            id: u.id,
                            lastname: u.lastname,
                            firstname: u.firstname,
                            email: u.email,
                        };
                    }),
                );
            })
            .catch((error) => {
                console.log(error.data);
            });
    }, []);
    return (
        <div>
            {' '}
            {users != '' && (
                <SimpleList
                    data={{
                        column: [
                            { name: 'Id' },
                            { name: 'Lastname' },
                            { name: 'Firstname' },
                            { name: 'email' },
                        ],
                        rows: users,
                    }}
                />
            )}
        </div>
    );
};

export default CommercialUsers;
