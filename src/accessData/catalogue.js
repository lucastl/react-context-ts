import products from '../data/catalogue.json';

const removeDuplicates = arrayObjects => {
    const uniqueGIDs = new Set();
    const uniqueObjects = [];
    arrayObjects.forEach(obj => {
        if (!uniqueGIDs.has(obj.GID)) {
            uniqueGIDs.add(obj.GID);
            uniqueObjects.push(obj);
        };
    });
    return uniqueObjects;
};

const filterByBrand = brand => {
    const filteredProducts = products.filter(product => product['MARCA'] === brand);
    return removeDuplicates(filteredProducts);
};

const filterByID = (productsList, id) => {
    const filteredProducts = productsList.filter(product => product['ID'] === id);
    return filteredProducts[0];
};

const filterByName = (productsList, name) => {
    const inputName = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().trim();
    const filteredProducts = productsList.filter(product => {
        const productName = product['NOME FANTASIA'].normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().trim();
        return productName.includes(inputName);
    });
    return filteredProducts;
};

export const catalogue = {
    filterByBrand,
    filterByID,
    filterByName
};