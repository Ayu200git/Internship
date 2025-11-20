import "./books.css";

const Books = ({ children, count, onsubmit,onchange } : any ) => {
    return (
        <section className="book-list gap-8">
            <form onSubmit={(e) =>{
                e.preventDefault();
                onchange();
            }}>
                <label htmlFor="number-of-books-to-load" className="books-form-level">Number of books to Load</label>
                <div className="flex">
                    <input id="number-of-books-to-load" className="book-input w-full" type="number" min="0" max="20" value={count}
                    onChange={onchange}/>
                    <button type="submit" className="book-button">Load Books</button>
                </div>
            </form>
            <div className="book-grid">{children}</div>
        </section>
    );
};

export default Books;
