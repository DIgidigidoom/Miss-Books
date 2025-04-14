import { getBooks } from "../books.js"
import { BookList } from "../cmps/BookList.jsx"

import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React


export function BookIndex() {

    const [books, setBooks] = useState(null)

    useEffect(() => {
        LoadBooks()
    }, [])


    function LoadBooks() {
        bookService.query()
            .then(books => setBooks(books))
            .catch(err => console.log('err:', err))

    }
    return (
        <section className="book-index">
            {books ? <BookList books={books} /> : <div>Loading...</div>}
        </section>
    )
}