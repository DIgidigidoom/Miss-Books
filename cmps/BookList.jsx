const {  Link } = ReactRouterDOM

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
                        <button >
                           <Link to={`/book-index/${book.id}`}>Details</Link> 
                        </button>
                        <button >
                           <Link to={`/book-index/edit/${book.id}`}>Edit</Link> 
                        </button>
                    </section>
                </li>
            ))}
        </ul>
    )
}