import React from 'react'
import PropTypes from 'prop-types'


function Shelves(props) {
    return(
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{props.shelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
    					 {props.books.length === 0 && (
                          <span role="img" aria-label="emoji">
                            😕 No Books Found 😕
                          </span>
                        )}
                        {(props.books) && (
                     props.books.map((book, id) =>
                    <li key={id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover"
                         style={{
                            width: 128,
                             height: 193,
                              backgroundImage: `url(${book.imageLinks
                            ? book.imageLinks.thumbnail
                            : "https://i.imgur.com/grqWttv.jpg?1"})`
                               }}
                          ></div>
                          <div className="book-shelf-changer">
                              <select value={book.shelf}
                                onChange={(event) => props.moveToShelf(book, event.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="none">None</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                              </select>
                      	  </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors 
							? book.authors.join(", ") 
							: "Unknown"}</div>
                    </div>
                  </li>
					))}
                    </ol>
                  </div>
                </div>


      )
  }

Shelves.PropTypes ={
      books: PropTypes.array.isRequired,
      moveToShelf: PropTypes.func.isRequired,
    }
export default Shelves



























