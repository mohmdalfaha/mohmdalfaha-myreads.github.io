import React,{ Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookSearch from './components/BookSearch'
import MyReads from './components/MyReads'
import './App.css'

class BooksApp extends Component {
  state = {
		  books:[],
		 }

componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books);
    })
}

 moveToShelf = (book, shelf) => {

      if (book.shelf !== shelf) {
            BooksAPI.update(book, shelf).then(() => {
                const { books } = this.state
                const booksIds = books.map(b => b.id)
                let newBooks = []
                  if(shelf === 'none')(
                    this.setState(currentState => ({
                            books: currentState.books.filter(b => b.id !== book.id)
                        })))
                if (booksIds.includes(book.id) ) {
                    newBooks = books.map(b => b.id === book.id ? { ...b, shelf } : b)
                } else {
                    book.shelf = shelf
                    newBooks = [...books, book]
                }
                this.setState({ books: newBooks})
            })
        }
    }


  render() {
    return (
      <div className="app">
       <Route exact path='/' render={() =>(
    	<MyReads 
                moveToShelf={this.moveToShelf}
                books={this.state.books}/>		

    	)}/>
		<Route path='/add' render={()=>(
         <BookSearch 
          books={this.state.books}
          /> 
        )}/>

         
        
         
       </div>
    )
  }
}

export default BooksApp
