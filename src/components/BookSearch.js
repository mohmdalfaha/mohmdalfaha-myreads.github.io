import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'


class BookSearch extends Component{
  
  state = {
        searchResult:[],
      }

componentDidMount(){
    this.setState({ searchResult:[] })
}

handleQuery = (event) => {
        const query = event.target.value
        if (query !== '') {
          BooksAPI.search(query).then(searchResults => {
              this.setState({ searchResult: [] })
            const mergingBooks = searchResults.map(searchResult => {
                this.props.books.forEach(book => {
                if (book.id === searchResult.id) searchResult.shelf = book.shelf
              })
              return searchResult
            })
            this.setState({ searchResult: mergingBooks })
          })
        } else {
            this.setState({ searchResult: [] })
        }
      }


  render(){
    return(
      <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' 
      			className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                        type="text"
                        value={this.props.books.string}
                        onChange={this.handleQuery}
                        placeholder="Search by title or author"
                    />


              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
      
    )
  }
}
export default BookSearch
