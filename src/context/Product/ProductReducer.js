import { GET_PRODUCTS, GET_PRODUCT_DETAIL, SEARCH_PRODUCTS } from './types';

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                productsList: payload,
                productsFiltered: payload
            }
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                selectedProduct: payload
            }
        case SEARCH_PRODUCTS:
            return {
                ...state,
                productsFiltered: payload
            }
        default:
            return state;
    }

}