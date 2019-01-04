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


  render() {
    return (
      <div className="app">
       <Route exact path='/' render={() =>(
    	<MyReads books={this.state.books}/>		
    
    	)}/>
		<Route path='/add' render={()=>(
         <BookSearch /> 
        )}/>

         
        
         
       </div>
    )
  }
}

export default BooksApp
