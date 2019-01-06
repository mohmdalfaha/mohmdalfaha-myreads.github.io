import React,{ Component } from 'react'
import PropTypes from 'prop-types'


class Shelves extends Component{
    static PropTypes ={
      books: PropTypes.array.isRequired,
      moveToShelf: PropTypes.func.isRequired,
    }
  render(){
    return(
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
    					 {this.props.books.length === 0 &&(
                          <h4>No Books Found 😕</h4>
                          )}
                        {(this.props.books) && (
                     this.props.books.map((book, id) =>
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
                                onChange={(event) => this.props.moveToShelf(book, event.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="none">None</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                              </select>
                      	  </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors}</div>
                    </div>
                  </li>
					))}
                    </ol>
                  </div>
                </div>


      )
  }
}
export default Shelves



























