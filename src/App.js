import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import BookSearch from "./components/BookSearch";
import MyReads from "./components/MyReads";
import "./App.css";

const NoMatch = ({ location }) => (
  <div>
    <span role="img" aria-label="emoji">
      😕 Erorr 404!! 😕
      <br />
      <br />
      No match for
      <br />
      <code>{location.pathname}</code>
    </span>
  </div>
);

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
      //console.log(books);
    });
  }

  moveToShelf = (book, shelf) => {
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(() => {
        const { books } = this.state;
        const booksIds = books.map(b => b.id);
        let newBooks = [];
        if (shelf === "none")
          this.setState(currentState => ({
            books: currentState.books.filter(b => b.id !== book.id)
          }));
        if (booksIds.includes(book.id)) {
          this.setState(currentState => {
            newBooks = books.map(b => (b.id === book.id ? { ...b, shelf } : b));
          });
        } else {
          this.setState(currentState => {
            book.shelf = shelf;
            newBooks = [...books, book];
          });
        }
        this.setState({ books: newBooks });
      });
    }
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <MyReads
                  moveToShelf={this.moveToShelf}
                  books={this.state.books}
                />
              )}
            />
            <Route
              path="/add"
              render={() => (
                <BookSearch
                  books={this.state.books}
                  moveToShelf={this.moveToShelf}
                />
              )}
            />

            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default BooksApp;
