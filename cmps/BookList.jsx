import { BookPreview } from "./BookPreview.jsx";


export function BookList({books}) {
    
    if (!books.length) return <div>No Books To Show...</div>
    return (
        <ul className="book-list container">
            {books.map(book => (
                <li className="TODO-loading-class" key={book.id}>
                    <BookPreview book={book} />
                    <section>
                        <button onClick={() => onRemoveBook(book.id)}>
                            Remove
                        </button>
                        <button onClick={() => onSelectBookId(book.id)}>
                            Details
                        </button>
                    </section>
                </li>
            ))}
        </ul>
    )
}