import React from 'react'

import useBooks from '../useBooks'

import "../Pagination.css"

const Pagination = () => {
    const { maxEntries, setMaxEntries, currentPage, setCurrentPage, books } = useBooks();
    const maxPages = Math.ceil(books.totalEntries / maxEntries);

    const handleMaxEntries = (e) => {
        setCurrentPage(1);
        setMaxEntries(e.target.value);
    }

    const renderOptions = () => {
        const maxEntriesArray = [];
        for (let i = 1; i <= 40; i++) {
            maxEntriesArray.push(i);
        }
        return maxEntriesArray.map(entry => <option key={entry} value={`${entry}`}>{entry}</option>)
    }

    const handleNextButton = (e) => {
        setCurrentPage(currentPage + 1);
    }

    const handlePrevButton = (e) => {
        setCurrentPage(currentPage - 1);
    }

    return (
        <div className="pagination-container">
            <div className="max-book-selector">
                <select name="max-book" value={maxEntries} onChange={handleMaxEntries} >
                    {
                        renderOptions()
                    }
                </select>
                <span className='entries-number'>Entries per page</span>
            </div>
            <div className="pagination-btn">
                <button className='prev' onClick={handlePrevButton} disabled={currentPage === 1}>Prev</button>
                {currentPage}
                <button className='next' onClick={handleNextButton} disabled={maxPages === currentPage} >Next</button>
            </div>

        </div>
    )
}

export default Pagination