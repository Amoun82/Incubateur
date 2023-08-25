import React from 'react';

import Loader from './../../shared/components/utils-components/Loader';
import ProductCard from './ProductCard';

function ListProducts(props) {
    const testData = () => {
        if (props.products != '') {
            return true;
        } else {
            return false;
        }
    };
    return (
        <div className="flex flex-col font-Montserrat items-center bg-bgWaya">
            <h1 className="mt-12 mb-20 md:mb-12 text-PrimaryWaya break-words text-center">
                <pre>{props.title}</pre>
            </h1>
            <section className="flex flex-col justify-center sm:ml-20 sm:justify-start w-5/6 sm:w-full sm:flex-row sm:flex-wrap gap-4">
                {testData() ? (
                    props.products.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))
                ) : (
                    <Loader />
                )}
            </section>
        </div>
    );
}

export default ListProducts;
