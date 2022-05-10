import { useContext } from 'react'
import { BooksContext } from './Context/BooksContext'

const useBooks = () => {
    return useContext(BooksContext)
}

export default useBooks