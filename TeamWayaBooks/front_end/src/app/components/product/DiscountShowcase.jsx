import React from 'react';
import { Link } from 'react-router-dom';

import discounts from './../../assets/images/discounts.png';
import { URL_PRODUCT_LIST_TAG } from './../../shared/constants/urls/urlConstants';

const DiscountShowcase = () => {
    return (
        <div className="w-full md:my-1">
            <div className="flex flex-col md:flex-row md:justify-center w-full bg-wayaBlue">
                <div className="w-full md:w-3/8">
                    <img
                        className="w-full md:py-10 md:pl-10"
                        src={discounts}
                        alt="discounts"
                    />
                </div>
                <div className="flex flex-col w-full md:w-3/8 relative">
                    <div className="justify-start text-white p-4 md:py-10 pl-10">
                        <div className="text-4xl font-normal">
                            <p>Vente Flash</p>
                        </div>
                        <div className="text-4xl font-semibold">
                            <p>Soldes Jusqu&#39;a</p>
                        </div>
                        <div className="text-8xl font-semibold">
                            <p></p>50%
                        </div>
                        <div className="text-2xl md:w-96 ">
                            <p>
                                Cum sociis natoque penatibus et magnis dis parturient
                                montes nascetur ridiculus lacinia bibendum.
                            </p>
                        </div>
                        <div>
                            <Link to={`${URL_PRODUCT_LIST_TAG}/?tag=3`}>
                                <button className="btn bg-white text-wayaBlue rounded-md lg:absolute lg:bottom-10">
                                    Acheter maintenant
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountShowcase;
