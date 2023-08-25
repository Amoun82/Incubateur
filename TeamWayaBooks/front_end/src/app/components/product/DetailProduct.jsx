import React, { useEffect, useState } from 'react';

import { getEvaluation } from './../../api/backend/comment';
import { detailProductById } from './../../api/backend/product';
import CategoryProduct from './../../shared/components/utils-components/CategoryProduct';
import Stars from './../../shared/components/utils-components/stars/Stars';
import AddToCart from './../product/AddToCart';

function Author(values) {
    return (
        <div>
            - {values.data.author_lastname} {values.data.author_firstname}
        </div>
    );
}

const DetailProduct = (props) => {
    const [product, setProduct] = useState('');
    const [addProduct, setAddProduct] = useState('');
    const formatDate = (date) => {
        const datetemp = date.substring(0, 10);
        let [aa, mm, jj] = datetemp.split('-');

        return [jj, mm, aa].join(' ');
    };
    const fetchProduct = async () => {
        const res = await detailProductById(props.id);
        setProduct(res.data);
        setAddProduct({
            id: res.data.id,
            product_name: res.data.product_name,
            published: '',
            note: '',
            comments: 0,
            price: res.data.price,
            quantity: 1,
            authors: res.data.author,
            product_image: res.data.product_image,
        });
        fetchComment();
    };
    const fetchComment = async () => {
        const res = await getEvaluation(props.id);
        setAddProduct((prevState) => ({
            ...prevState,
            note: parseFloat(res.data[0].averageEvaluation),
            comments: parseInt(res.data[0].countEvaluations),
        }));
    };
    useEffect(() => {
        if (props.id != '') {
            fetchProduct();
        }
    }, []);

    return (
        <section className="bg-white flex-col flex">
            {product != '' ? (
                <div>
                    <div className="flex mt-10 mb-10 justify-center">
                        <h2>
                            {product.tags.map((tag, key) => {
                                return (
                                    <div key={key} className="flex justify-center">
                                        <span>{tag.tag_name}</span>
                                    </div>
                                );
                            })}
                        </h2>
                    </div>
                    <div className="flex mt-10 mb-5 justify-center bg-gray-100">
                        <CategoryProduct id={product.category.id} />
                    </div>
                    <div className="flex flex-col md:flex-row items-center mb-10">
                        <div className="h-full w-1/3 flex justify-center">
                            <img
                                className="border-2 border-PrimaryWaya p-2"
                                src={product.product_image}
                                alt={product.product_image}
                            />
                        </div>
                        <div className="flex flex-col w-2/3 p-0 md:p-10 w-full">
                            <h2 className="text-center md:text-left mb-5">
                                {product.product_name}
                            </h2>
                            <div className="flex justify-center md:justify-start">
                                {addProduct.note != '' ? (
                                    <Stars
                                        value={addProduct.note}
                                        size={15}
                                        isHalf={true}
                                    />
                                ) : null}
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-between mb-2 md:mb-0">
                                <span className="text-PrimaryWaya-light font-bold">
                                    {product.price} €
                                </span>
                                {addProduct.note != '' ? (
                                    <AddToCart data={addProduct} />
                                ) : null}
                            </div>
                            <div className="text-xs text-center md:text-left mb-5">
                                Stock : {product.stock}
                            </div>
                            <p className="text-xs">
                                Livraison GRATUITE (0,01€ pour les livres) en point
                                retrait (selon éligibilité des articles).
                            </p>
                            <hr className="my-5" />
                            <div>
                                <h5 className="text-sm text-PrimaryWaya text-center md:text-left">
                                    Détails
                                </h5>
                                <p className="text-center md:text-left">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center md:text-left p-0 md:p-10">
                        <div className="flex flex-row justify-center md:justify-start">
                            <span className="font-bold">
                                Auteur{product.author.length > 1 ? 's' : null} :
                            </span>
                            <div className="flex flex-col ml-2">
                                {product.author.map((value, key) => {
                                    console.log(value);
                                    return <Author key={key} data={value} />;
                                })}
                            </div>
                        </div>
                        <p>
                            <span className="font-bold">Description : </span>
                            {product.description_long}
                        </p>
                        {product.serie.serie_name != '' ||
                        product.serie.serie_name != null ? (
                            <p>
                                <span className="font-bold">Série : </span>
                                {product.serie.serie_name}
                            </p>
                        ) : null}
                        <p>
                            <span className="font-bold">Editeur : </span>
                            {product.editor.editor_name}
                        </p>
                    </div>
                    <div className="flex flex-wrap md:flex-no-wrap justify-center md:justify-between mx-10 mt-0 md:mt-10 mb-2 text-xs">
                        <div className="flex flex-col text-center m-10 md:m-0">
                            <p className="mb-2">Dimensions</p>
                            {product.dimensions}
                        </div>
                        <div className="flex flex-col text-center m-10 md:m-0">
                            <p className="mb-2">language</p>

                            {product.product_language.product_language_name}
                        </div>
                        <div className="flex flex-col text-center m-10 md:m-0">
                            <p className="mb-2">ISBN</p>
                            {product.isbn}
                        </div>
                        <div className="flex flex-col text-center m-10 md:m-0">
                            <p className="mb-2">page</p>
                            {product.pages}
                        </div>
                        <div className="flex flex-col text-center m-10 md:m-0">
                            <p className="mb-2">date</p>
                            {formatDate(product.published_date)}
                        </div>
                        <div className="flex flex-col text-center m-10 md:m-0">
                            <p className="mb-2">poids</p>
                            {product.weight} gr
                        </div>
                    </div>
                </div>
            ) : null}
        </section>
    );
};

export default DetailProduct;
