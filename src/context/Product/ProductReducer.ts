const initialState = {
    productsList: [],
    productsFiltered: [],
    selectedProduct: null
};

type ActionType = 
    | { type: 'GET_PRODUCTS', payload: object[] }
    | { type: 'GET_PRODUCT_DETAIL', payload: object }
    | { type: 'SEARCH_PRODUCTS', payload: number };

export default (state: typeof initialState, action: ActionType) => {
    const { payload, type } = action;

    switch (type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                productsList: payload,
                productsFiltered: payload
            }
        case 'GET_PRODUCT_DETAIL':
            return {
                ...state,
                selectedProduct: payload
            }
        case 'SEARCH_PRODUCTS':
            return {
                ...state,
                productsFiltered: payload
            }
        default:
            return state;
    }

}