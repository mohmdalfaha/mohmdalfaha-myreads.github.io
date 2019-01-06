import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { DebounceInput } from "react-debounce-input";

import * as BooksAPI from "../BooksAPI";
import Shelves from "./Shelves";

class BookSearch extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    searchResult: PropTypes.array.isRequired,
    moveToShelf: PropTypes.func.isRequired
  };

  state = {
    searchResult: []
  };

  handleQuery = event => {
    const query = event.target.value;
    if (query !== "") {
      BooksAPI.search(query).then(searchResults => {
        if (!searchResults || searchResults.error) {
          this.setState({ searchedBooks: [] });
        }
        const mergingBooks = searchResults.map(searchResult => {
          this.props.books.forEach(book => {
            if (book.id === searchResult.id) searchResult.shelf = book.shelf;
          });
          return searchResult;
        });
        this.setState({ searchResult: mergingBooks });
      });
    } else {
      this.setState({ searchResult: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              type="text"
              debounceTimeout={600}
              value={this.props.books.string}
              onChange={this.handleQuery}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <Shelves
            moveToShelf={this.props.moveToShelf}
            shelfTitle="Search Results"
            books={this.state.searchResult}
          />
        </div>
      </div>
    );
  }
}
export default BookSearch;