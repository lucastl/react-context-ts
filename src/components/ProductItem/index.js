import React from 'react';
import { Link } from 'react-router-dom';


function ProductItem({ product }) {

    return (
        <Link
            to={`/product/${product.ID}`}
        >
            <article
                className="card-product"
            >
                {product["NOME FANTASIA"]}
            </article>
        </Link>
    );
};

export default ProductItem;