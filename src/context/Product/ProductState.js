import React, { useReducer } from 'react';
import ProductReducer from './ProductReducer';
import ProductContext from './ProductContext';
import { readData } from '../../accessData';

const ProductState = (props) => {
    const initialState = {
        productsList: [],
        productsFiltered: [],
        selectedProduct: null
    };

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = () => {
        const res = readData.products.filterByBrand('BRMX');
        dispatch({
            type: 'GET_PRODUCTS',
            payload: res
        });
    };

    const getProductDetail = id => {
        const res = readData.products.filterByID(state.productsList, id);
        dispatch({
            type: 'GET_PRODUCT_DETAIL',
            payload: res
        });
    };

    const searchProductsByName = name => {
        const res = readData.products.filterByName(state.productsList, name);
        console.log(res);
        dispatch({
            type: 'SEARCH_PRODUCTS',
            payload: res
        });
    };

    return (
        <ProductContext.Provider
            value={{
                productsList: state.productsList,
                selectedProduct: state.selectedProduct,
                productsFiltered: state.productsFiltered,
                getProducts,
                getProductDetail,
                searchProductsByName
            }}
        >
            {props.children}
        </ProductContext.Provider>
    )
};

export default ProductState;