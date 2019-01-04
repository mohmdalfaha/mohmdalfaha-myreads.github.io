import React,{ Component } from 'react'
import Shelves from './Shelves'
import { Link } from 'react-router-dom'


class MyReads extends Component{
  render(){
    return(
      <div className="list-books">
          <div className="list-books-title">
      		<h1>MyReads</h1>
               </div>
      <div className="list-books-content">
       <div>
             <Shelves 
                      books={this.props.books} 
                      shelfTitle={'Currently Reading'} 
                       moveToShelf={this.moveToShelf}/>

              <Shelves 
                      books={this.props.books} 
                      shelfTitle={'Want To Read'}
                      moveToShelf={this.moveToShelf}/>

              <Shelves 
                      books={this.props.books} 
                      shelfTitle={'Read'}
                      moveToShelf={this.moveToShelf}/>
      </div>
          </div>
      <div className="open-search">
          <Link
            to='/add'
            className='add-book'
            >Add a book</Link>
          </div>
      </div>
    )
  }
}
export default MyReads
