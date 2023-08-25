import React, { useEffect, useState } from 'react';

import { userAdresses } from './../../api/backend/account';
// import { accountLogin } from './../../shared/services/accountServices';
import Address from './Address';

const Addresses = () => {
    const [addresses, setAddresses] = useState([]);
    useEffect(() => {
        // const user = {
        //     email: accountLogin(),
        // };
        // userAdresses(user)
        userAdresses()
            .then((response) => {
                setAddresses(response.data.address);
            })
            .catch((error) => {
                console.log(error.data);
            });
    }, []);
    return (
        <div className="flex flex-col md:flex-row flex-wrap justify-start md:ml-5 my-10">
            {addresses.length > 0
                ? addresses.map((value) => {
                      return <Address data={value} key={value.id} />;
                  })
                : null}
        </div>
    );
};

export default Addresses;
