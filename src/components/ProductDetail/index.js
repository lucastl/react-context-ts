import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductContext from '../../context/Product/ProductContext';

function ProductDetail() {

    const { selectedProduct, getProductDetail } = useContext(ProductContext);

    const { id } = useParams();

    useEffect(() => {
        getProductDetail(id);
    }, []);

    return (
        <>
            <Link
                to="/"
            >
                <button>
                    Volver
                </button>
            </Link>
            <section id="product-detail">
                <h1>PRODUCT DETAIL</h1>
                <code>
                    {JSON.stringify(selectedProduct)}
                </code>
            </section>
        </>
    );
};

export default ProductDetail;