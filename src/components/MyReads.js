import React, { Component } from "react";
import PropTypes from "prop-types";
import Shelves from "./Shelves";
import { Link } from "react-router-dom";

class MyReads extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    moveToShelf: PropTypes.func.isRequired
  };
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelves
              books={this.props.books.filter(
                book => book.shelf === "currentlyReading"
              )}
              shelfTitle={"Currently Reading"}
              moveToShelf={this.props.moveToShelf}
            />

            <Shelves
              books={this.props.books.filter(
                book => book.shelf === "wantToRead"
              )}
              shelfTitle={"Want To Read"}
              moveToShelf={this.props.moveToShelf}
            />

            <Shelves
              books={this.props.books.filter(book => book.shelf === "read")}
              shelfTitle={"Read"}
              moveToShelf={this.props.moveToShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/add" className="add-book">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}
export default MyReads;