import Bookshelf from "./Bookshelf";

const MyReads = ({booksCurrentlyReading, booksWantToRead, booksRead, moveBookToShelf}) => {

    return (
        <>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <Bookshelf books={booksCurrentlyReading} onMoveBook={moveBookToShelf}
                       category="Currently Reading"></Bookshelf>
            <Bookshelf books={booksWantToRead} onMoveBook={moveBookToShelf} category="Want to Read"></Bookshelf>
            <Bookshelf books={booksRead} onMoveBook={moveBookToShelf} category="Read"></Bookshelf>
            <div className="open-search">
                <a href="/search">Add book</a>
            </div>
        </>
    )
}

export default MyReads;
