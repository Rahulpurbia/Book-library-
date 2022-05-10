import React from 'react'

import useBooks from '../useBooks'

import "../BookCard.css"

const BookCard = ({ book }) => {
    const { isModalOpen } = useBooks();

    return (
        <div className={`book ${isModalOpen ? "overflow-hidden" : ""}`}>
            <div className="book-img">
                <img src={book.volumeInfo?.imageLinks?.thumbnail || book.volumeInfo?.imageLinks?.smallThumbnail} alt="" />
            </div>
            <div className="book-details">
                <div><b>Name:</b>{book.volumeInfo?.title ?? "TITLE_HERE"}</div>
                <div><b>Maturity Rating :</b> {book.volumeInfo?.maturityRating ?? "no-maturity rating"}</div>
                <div><b>Rating:</b> {book?.volumeInfo?.averageRating ?? "no-rating"} <i className="fas fa-star"></i></div>
                <div> <b>Price:</b> {book?.saleInfo?.listPrice?.amount
                    ??
                    "free"} {book?.saleInfo?.listPrice?.currencyCode
                        ??
                        ""} </div>
            </div>
        </div>
    )
}

export default BookCard