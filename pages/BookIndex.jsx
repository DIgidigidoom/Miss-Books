import { getBooks } from "../books.js"
import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookList } from "../cmps/BookList.jsx"

import { bookService } from "../services/book.service.js"
import { BookDetails } from "./BookDetails.jsx"

const { useState, useEffect } = React


export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [selectedBookId, setSelectedBookId] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        LoadBooks()
    }, [filterBy])


    function LoadBooks() {
        bookService.query(filterBy)
            .then(books => setBooks(books))
            .catch(err => console.log('err:', err))

    }
    function onRemoveBook(bookId) {
        setIsLoading(true)
        bookService.remove(bookId)
            .then(() => {
                setBooks((prevBook) => prevBook.filter(book => book.id !== bookId))
                showSuccessMsg(`Book (${bookId}) removed successfully!`)
            })
            .catch(err => {
                console.log('Problem removing book:', err)
                showErrorMsg('Problem removing book!')
            })
            .finally(() => setIsLoading(false))
           
    }
    function onSelectBookId(bookId) {
        setSelectedBookId(bookId)
    }

    function onSetFilterBy(filterByToEdit) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterByToEdit }))
    }
    if (!books) return <div className="loader">Loading...</div>
    const loadingClass = isLoading ? 'loading' : ''
    return (

        <section className="book-index">
            {selectedBookId &&
                <BookDetails
                    onBack={() => onSelectBookId(null)}
                    bookId={selectedBookId}
                />
            }
            {!selectedBookId && (
                books
                    ? <React.Fragment>
                        <BookFilter
                            onSetFilterBy={onSetFilterBy}
                            filterBy={filterBy} />
                        <BookList
                            books={books}
                            onSelectBookId={onSelectBookId}
                            onRemoveBook ={onRemoveBook} 
                            loadingClass={loadingClass}/>
                    </React.Fragment>
                    : <div>Loading...</div>
            )}
        </section>
    )
}