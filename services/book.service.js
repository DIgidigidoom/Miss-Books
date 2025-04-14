import { loadFromStorage, makeId, saveToStorage } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getDefaultFilter
}

function query(filterBy = {}) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => regExp.test(book.title))
            }
            // if (filterBy.minSpeed) {
            //     books = books.filter(book => book.speed >= filterBy.minSpeed)
            // }
            console.log(books)
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    // return Promise.reject('Oh No!')
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', description = '', thumbnail = '') {
    return {
        title,
        description,
        thumbnail,
        listPrice: {
            amount: 0,
            currencyCode: "EUR",
            isOnSale: false
        }
    }
}

function getDefaultFilter() {
    return { txt: '', minSpeed: '' }
}

function _createBooks() {
    let books = loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = [
            _createBook('Gwent','Card Game','1.png',{amount: 300, currencyCode: "USD", isOnSale: true } ),
            _createBook('Between Here And Gone','Blah Blah','2.png',{amount: 120, currencyCode: "EUR", isOnSale: false }),
            _createBook('magic Lantern','Shnishnish','3.png',{amount: 50, currencyCode: "USD", isOnSale: true }),

        ]
        saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(title, description, thumbnail, listPrice) {
    const book = getEmptyBook(title, description, thumbnail, listPrice)
    book.id = makeId()
    return book
}