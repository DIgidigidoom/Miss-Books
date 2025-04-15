const { useState } = React

const Router = ReactRouterDOM.HashRouter
const { Routes, Route, Navigate } = ReactRouterDOM

import { AppHeader } from "./cmps/AppHeader.jsx"
import { NotFound } from "./cmps/NotFound.jsx"
import { About } from "./pages/About.jsx"
import { BookDetails } from "./pages/BookDetails.jsx"
import { BookIndex } from "./pages/BookIndex.jsx"
import { Home } from "./pages/Home.jsx"



export function RootCmp() {


    return (

        <Router>
            <section className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path="/" element={<Navigate to="/Home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />}>
                            {/* <Route path="/about/team" element={<Team />} />
                            <Route path="/about/vision" element={<Vision />} /> */}
                        </Route>
                        <Route path="/book-index" element={<BookIndex />} />
                        <Route path="/book-index/:bookId" element={<BookDetails />} />
                        {/* <Route path="/car/edit" element={<CarEdit />} />
                        <Route path="/car/edit/:carId" element={<CarEdit />} /> */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </section>
        </Router>
        // <section className="app">
        //     <AppHeader onSetPage={(page) => setPage(page)} />

        //     <main>
        //         {page === 'home' && <Home />}
        //         {page === 'about' && <About />}
        //         {page === 'book-index' && <BookIndex />}
        //     </main>
        // </section>
    )
} 