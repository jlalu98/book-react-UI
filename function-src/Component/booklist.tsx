import { books } from "./addbook";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Details from "./details";

function BookList() {
  return (
    <div>
      {/* eslint-disable-next-line */}
      {books.map((book: any, index: any) => {
        return (
          <HashRouter>
            <NavLink to={"/details/" + book.id}>
              <div className="book-card" id={book.id}>
                <br />
                <img id="img" src={book.cover} alt={book.title} />
                <h3>{book.title}</h3>
                <p>Rating : {book.rating}</p>
                <p className="price">
                  <strong>₹{book.price}</strong>
                </p>
              </div>
            </NavLink>
            <Route path={"/details/" + book.id} component={Details} />
          </HashRouter>
        );
      })}
    </div>
  );
}

export default BookList;
