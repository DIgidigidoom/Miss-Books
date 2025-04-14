const { useState } = React

import { AppHeader } from "./cmps/AppHeader.jsx"
import { About } from "./pages/About.jsx"
import { BookIndex } from "./pages/BookIndex.jsx"
import { Home } from "./pages/Home.jsx"



export function RootCmp() {

    const [page, setPage] = useState('home')

    return (
        <section className="app">
            <AppHeader onSetPage={(page) => setPage(page)} />

            <main>
                {page === 'home' && <Home />}
                {page === 'about' && <About />}
                {page === 'book-index' && <BookIndex />}
            </main>
        </section>
    )
} 