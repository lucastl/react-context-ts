import { createContext } from 'react';

const initialState = {
    productsList: [],
    productsFiltered: [],
    selectedProduct: {}
};

const ProductContext = createContext<typeof initialState>(initialState);

export default ProductContext;