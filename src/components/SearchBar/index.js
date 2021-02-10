import React, { useState, useContext } from 'react'
import ProductContext from '../../context/Product/ProductContext';
import searchIcon from '../../images/search-icon.svg';

function SearchBar() {

    const { searchProductsByName, products } = useContext(ProductContext);

    const [inputSearch, setSearch] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        searchProductsByName(inputSearch);
    };

    return (
        <section id="search-bar">
            <form
                onSubmit={e => handleSubmit(e)}
            >
                <input
                    type="text"
                    onChange={e => setSearch(e.target.value)}
                />
                <button
                    type="submit"
                >
                    <img src={searchIcon} alt="Search Icon" />
                </button>
            </form>
        </section>
    );
};

export default SearchBar;