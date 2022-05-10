import React from 'react'
import BooksList from './BooksList'
import Pagination from './Pagination'
import Search from './Search'

import useBooks from '../useBooks'

const Library = () => {
    const { books } = useBooks();

    const showPagination = () => {
        if (books.Allbooks && books.Allbooks.length !== 0) {
            return <Pagination />
        }
    }

    return (
        <div className="main-container">
            <Search />
            <BooksList />
            {showPagination()}
        </div>
    )
}

export default Library