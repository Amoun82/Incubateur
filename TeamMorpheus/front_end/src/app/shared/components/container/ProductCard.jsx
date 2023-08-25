import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
    return (
        <div
            key={props.id}
            className="sm:w-[140px] md:w-[160px] xl:w-[240px] 2xl:w-[340px] drop-shadow-[5px_5px_1px_rgba(0,0,0,0.65)] ease-in duration-200 hover:drop-shadow-[20px_20px_10px_rgba(0,0,0,0.55)]"
        >
            <div className="overflow-hidden w-full outline outline-teal-400 bg-white">
                <div className="bg-teal-400 sm:h-[4rem] lg:h-[6.25rem] xl:h-[4rem] 2xl:h-[6.25rem] flex-initial text-center">
                    <div className="flex items-center h-full">
                        <h1 className="flex mx-auto align-center nor-font sm:text-[1rem] md:text-[2rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2.5rem]">
                            {props.price - 1}.99€
                        </h1>

                        <FontAwesomeIcon
                            icon={faBagShopping}
                            className="text-white float-right pr-4 sm:text-[1rem] md:text-[1.5rem] xl:text-[2rem] 2xl:text-[2.5rem]"
                        />
                    </div>
                </div>
                <Link to={'/product/productid=' + props.id}>
                    <div className="w-full outline outline-teal-400">
                        <img
                            src={props.imglink}
                            alt={props.name}
                            className="sm:h-[10rem] lg:h-[15rem] xl:h-[20rem] 2xl:h-[30rem] object-contain"
                        />
                    </div>
                    <div className="sm:h-[6rem] md:h-[8rem] lg:h-[6rem] xl:h-[8rem]">
                        <div className="p-4 h-full">
                            <h6 className="line-clamp-3 sm:text-[0.8rem] md:text-[1rem] lg:text-[1.25rem] xl:text-[1.5rem]">
                                Description : {props.description}
                            </h6>
                            <h4 className="line-clamp-3 sm:text-[0.8rem] md:text-[1rem] lg:text-[1.25rem] xl:text-[1.5rem]">
                                Quantity : {props.quantity}
                            </h4>
                        </div>
                        <div className="sm:p-1 md:p-2 xl:p-4 float-right">
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="text-gray-200 sm:text-[2rem] md:text-[3rem] lg:text-[2rem] xl:text-[3rem]"
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
