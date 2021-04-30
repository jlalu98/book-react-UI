import { HashRouter, Link, Route } from "react-router-dom";
import { books } from "./addbook";
import BookList from "./booklist";

function Details(props: any) {
  function handleClick(index: any) {
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
  }

  const id = props.match.params.id;
  return (
    <div>
      {/* eslint-disable-next-line */}
      {books.map((book: any, index: any) => {
        if (book.id === id) {
          return (
            <div className="card">
              <img id="imgDetails" src={book.cover} alt={book.title} />
              <p>
                <strong>Author:{book.author}</strong>
              </p>
              <p>
                <strong>Rating:{book.rating}</strong>
              </p>
              <p>
                <strong>Price :₹{book.price}</strong>
              </p>
              <h1>{book.title}</h1>
              <br />
              <p>
                <strong>{book.description}</strong>
              </p>
              <HashRouter>
                <Link
                  to="/books"
                  id="del-button"
                  onClick={() => handleClick(index)}
                >
                  DELETE
                </Link>
                <Route path="/books" component={BookList} />
              </HashRouter>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Details;
