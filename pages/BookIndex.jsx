import { getBooks } from "../books.js"
import { BookList } from "../cmps/BookList.jsx"

import { bookService } from "../services/book.service.js"
import { BookDetails } from "./BookDetails.jsx"

const { useState, useEffect } = React


export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [selectedBookId, setSelectedBookId] = useState(null)

    useEffect(() => {
        LoadBooks()
    }, [])


    function LoadBooks() {
        bookService.query()
            .then(books => setBooks(books))
            .catch(err => console.log('err:', err))

    }
    function onSelectBookId(bookId) {
        setSelectedBookId(bookId)
    }
    return (

        <section className="book-index">
            {selectedBookId &&
                <BookDetails
                    onBack={() => onSelectBookId(null)}
                    bookId={selectedBookId}
                />
            }
            {!selectedBookId && (
                books ? <BookList 
                books={books}
                onSelectBookId={onSelectBookId} /> : 
                <div>Loading...</div>
            )}
        </section>
    )
}