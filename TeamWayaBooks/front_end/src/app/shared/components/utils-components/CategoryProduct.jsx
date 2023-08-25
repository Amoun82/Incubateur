import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { productByCategory } from './../../../api/backend/product';
import { URL_PRODUCT_LIST_CATEGORY } from './../../constants/urls/urlConstants';

function CategoryProduct(props) {
    const [categories, setcategories] = useState('');

    const getCategory = async (data) => {
        const res = await productByCategory(data);
        if (res.status === 200) {
            const categoryReverse = res.data.slice().reverse();
            setcategories(categoryReverse);
        }
    };

    const categoriesTest = () => {
        if (categories != '') {
            return true;
        } else {
            return false;
        }
    };

    useEffect(() => {
        getCategory(props.id);
    }, []);
    return (
        <div className="flex flex-row">
            {categoriesTest()
                ? categories.map((element, key) => (
                      <div key={key}>
                          <Link
                              to={
                                  URL_PRODUCT_LIST_CATEGORY +
                                  `/?id=${element.id}&name=${element.category_name}`
                              }
                              className="hover:text-PrimaryWaya-light"
                          >
                              <span>{element.category_name}</span>
                          </Link>
                          {key < categories.length - 1 ? (
                              <span>&nbsp;&gt;&nbsp;</span>
                          ) : null}
                      </div>
                  ))
                : null}
        </div>
    );
}

export default CategoryProduct;
