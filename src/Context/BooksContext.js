import React, { createContext, useEffect, useState } from 'react'

export const BooksContext = createContext();

const BooksProvider = (props) => {
    const [books, setBooks] = useState({
        Allbooks: []
        , totalEntries: 1,
    });
    const [apiError, setApiError] = useState("");
    const [maxEntries, setMaxEntries] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filterParams, setFilterParams] = useState({
        price: {
            free: false,
            paid: true,
        },
        type: {
            book: true,
            magazine: true
        }
    })
    const [isChecked, setIsChecked] = useState({
        price: {
            free: true,
            paid: true
        },
        type: {
            book: true,
            magazine: true
        }
    })

    const priceFilter = () => {
        if (filterParams.price.free && filterParams.price.paid) {
            return ""
        }
        else if (filterParams.price.paid) {
            return '&filter=paid-ebooks'
        }
        else if (filterParams.price.free) {
            return '&filter=free-ebooks'

        }
        else { return "" }
    }

    const bookTypeFilter = () => {
        if (filterParams.type.book && filterParams.type.magazine) {
            return ""
        }
        else if (filterParams.type.magazine) {
            return '&printType=magazines'
        }
        else if (filterParams.type.book) {
            return '&printType=books'

        }
        else { return "" }
    }

    const fetchBooks = (searchTerm) => {
        const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
        setIsLoading(true);
        fetch(`${BASE_URL}?q=${searchTerm}&maxResults=${maxEntries}&startIndex=${(currentPage - 1) * maxEntries}` + priceFilter() + bookTypeFilter())
            .then(data => data.json())
            .then(books => {
                setBooks({
                    Allbooks: books.items,
                    totalEntries: books.totalItems
                })
                setApiError("");
            })
            .catch((error) => {
                setApiError(error.message || "Some Error Occured Please Try Again Later");
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <BooksContext.Provider value={{ books, maxEntries, setMaxEntries, fetchBooks, currentPage, setCurrentPage, apiError, isLoading, filterParams, setFilterParams, isChecked, setIsChecked, isModalOpen, setIsModalOpen }}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksProvider