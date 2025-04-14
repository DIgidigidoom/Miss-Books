import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookDetails({ bookId, onBack }) {

    const [book, setBook] = useState(null)
    useEffect(() => {
        loadBook()
    }, [])

    function loadBook() {
        bookService.get(bookId)
            .then(book => setBook(book))
            .catch(err => console.log('err:', err))
    }

    if (!book) return <div>Loading...</div>
    const { title, description, thumbnail, listPrice: { amount } } = book
    return (
        <section className="book-details container">
            <h1>Book Title: {title}</h1>
            <h1>Book Price: {amount}</h1>
            <p>{description}</p>
            <img src={`../assets/img/${thumbnail}.jpg`} alt="Book Image" />
            <button onClick={onBack}>Back</button>
        </section>
    )
}