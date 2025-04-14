import { getBooks } from "../books.js"

import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React


export function BookIndex() {

    const [books, setBooks] = useState(null)

    useEffect(() => {
        LoadBooks()
        console.log(books)
    }, [])


    function LoadBooks() {
        bookService.query()
            .then(books => setBooks(books))
            .catch(err => console.log('err:', err))

    }
    return <pre>{JSON.stringify(books, null, 5)}</pre>
}