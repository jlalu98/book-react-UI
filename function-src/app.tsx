import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Component/home";
import BookList from "./Component/booklist";
import { AddBook } from "./Component/addbook";
import Details from "./Component/details";
import "./app.css";

function App() {
  return (
    <HashRouter>
      <div>
        <h1>Book Management System</h1>
        <ul className="header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/books">Book List</NavLink>
          </li>
          <li>
            <NavLink to="/addbook">Add Book</NavLink>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/books" component={BookList} />
        <Route path="/addbook" component={AddBook} />
        <Route path="/details/:id?" component={Details} />
      </div>
    </HashRouter>
  );
}

export default App;
