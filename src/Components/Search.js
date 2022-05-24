import React, { useEffect, useState } from 'react'

import useBooks from '../useBooks';
import useDebounce from '../useDebounce';

import FilterModal from './FilterModal';

import "../Search.css"

const Search = () => {
    const [inputField, setInputField] = useState("");

    const { fetchBooks, maxEntries, currentPage, setCurrentPage, filterParams, isModalOpen, setIsModalOpen } = useBooks();
    const debouncedValue = useDebounce(inputField, 500)

    const handleChange = (e) => {
        setInputField(e.target.value);
    }

    useEffect(() => {
        debouncedValue && fetchBooks(inputField);
    }, [debouncedValue, maxEntries, currentPage, filterParams])

    useEffect(() => {
        debouncedValue && setCurrentPage(1);
    }, [debouncedValue])

    return (
        <div className="search-container">
            <div className="filter" onClick={() => setIsModalOpen(true)}>
                <i className="fas fa-filter"></i>
                <div>Filter</div>
            </div>
            <div className="search-input">
                <input type="search" name="search" placeholder='Eg:- javascript' onChange={handleChange} value={inputField} />
                <button><i className="fas fa-search"></i></button>
            </div>
            {isModalOpen && <FilterModal setIsModalOpen={setIsModalOpen} />}
        </div>
    )
}

export default Search