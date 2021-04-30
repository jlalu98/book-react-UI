/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Details from "./components/details"
import BookList from "./components/booklist";
import {AddBook} from "./components/addbook";

function App(){
  return (
    <HashRouter>
      <div>
        <h1>Book Management Store</h1>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/books">Book List</NavLink></li>
          <li><NavLink to="/addbook">Add Book</NavLink></li>
        </ul>
          <Route exact path="/" component={BookList}/>
          <Route path="/books" component={BookList}/>
          <Route path="/addbook" component={AddBook}/>
          <Route path="/details/:id?" component={Details}/>
      </div>
    </HashRouter>
  );
}
export default App;
