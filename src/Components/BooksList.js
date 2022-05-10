import React from 'react'

import BookCard from './BookCard'

import useBooks from '../useBooks'

import "../BooksList.css"

const BooksList = () => {
    const { books, isLoading, apiError } = useBooks();

    const showBooks = () => {
        if (apiError) {
            return <div className='error'>{apiError}</div>
        }
        else if (books["Allbooks"]?.length === 0) {
            return <div className='initial-msg'>Enter some value to search the books</div>
        }
        else if (books.Allbooks) {
            return books.Allbooks?.map((book) => <BookCard book={book} key={book.id} />)
        }
        else {
            return <div className='no-books'>No Books found for entered value...Please Try with different keyword</div>
        }
    }

    return (
        <div className="book-list-container">
            {isLoading ? <div className='loading-spinner'> ...Loading </div> :
                showBooks()
            }
        </div>
    )
}

export default BooksList