import React,{ Component } from 'react'


class Shelves extends Component{
  render(){
    return(
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {(this.props.books) && (
                     this.props.books.map((book, id) =>
                    <li key={id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover"
                         style={{
                            width: 128,
                             height: 193,
                              backgroundImage: `url(${book.imageLinks.thumbnail})`
                               }}
                          ></div>
                          <div className="book-shelf-changer">
                          <select value={book.shelf}
                            onChange={(event) => this.props.updateShelf(book, event.target.value)}>
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



























