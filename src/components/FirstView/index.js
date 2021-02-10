import React, { useEffect, useContext } from 'react';
import ProductItem from '../ProductItem';
import ProductContext from '../../context/Product/ProductContext';
import SearchBar from '../SearchBar';

function FirstView() {

    const { productsFiltered, getProducts } = useContext(ProductContext);

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
            <SearchBar />
            <section id="products-list">
                {
                    productsFiltered.length ?
                    productsFiltered.map(p => (
                        <ProductItem
                            key={p.ID}
                            product={p}
                        />
                    ))
                    : <p>No hay productos con ese nombre</p>
                }
            </section>
        </>
    );
};

export default FirstView;