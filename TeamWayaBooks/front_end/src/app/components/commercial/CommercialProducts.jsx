import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getCommercialProducts } from './../../api/backend/product';
import SimpleList from './../../shared/components/container/SimpleList';
import { URL_COMMERCIAL_PRODUCT } from './../../shared/constants/urls/urlConstants';

const CommercialProducts = () => {
    const [products, setProducts] = useState('');
    useEffect(() => {
        getCommercialProducts()
            .then((response) => {
                setProducts(
                    response.data.map((p) => {
                        return {
                            id: (
                                <Link to={`${URL_COMMERCIAL_PRODUCT}?id=${p.id}`}>
                                    {p.id}
                                </Link>
                            ),
                            name: p.product_name,
                            isbn: p.isbn,
                            price: p.price,
                            stock: p.stock,
                            public: p.is_public ? 'public' : 'privé',
                        };
                    }),
                );
            })
            .catch((error) => {
                console.log(error.data);
            });
    }, []);
    // const Line = ({ data }) => {
    //     return (
    //         <tr className="even:bg-white odd:bg-gray-200">
    //             <th className="text-gray-600 font-normal">{data.id}</th>
    //             <th className="text-gray-600 font-normal">{data.product_name}</th>
    //             <th className="text-gray-600 font-normal">{data.isbn}</th>
    //             <th className="text-gray-600 font-normal">{data.price}</th>
    //             <th className="text-gray-600 font-normal">{data.stock}</th>
    //             <th className="text-gray-600 font-normal">
    //                 {data.is_public ? 'public' : 'privé'}
    //             </th>
    //         </tr>
    //     );
    // };
    return (
        <div>
            {/* <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>ISBN</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Public</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products != '' &&
                                        products.map((product) => {
                                            return (
                                                <Line data={product} key={product.id} />
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> */}
            {products != '' && (
                <SimpleList
                    data={{
                        column: [
                            { name: 'Id' },
                            { name: 'Name' },
                            { name: 'ISBN' },
                            { name: 'Price' },
                            { name: 'Stock' },
                            { name: 'Public' },
                        ],
                        rows: products,
                    }}
                />
            )}
        </div>
    );
};

export default CommercialProducts;
