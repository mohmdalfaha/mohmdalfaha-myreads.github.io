import React,{ Component } from 'react'
import { Route } from 'react-router-dom'
//import * as BooksAPI from './BooksAPI'
import BookSearch from './components/BookSearch'
import BooksList from './components/BooksList'
import './App.css'

class BooksApp extends Component {
  state = {
		
		 }

  render() {
    return (
      <div className="app">
       <Route exact path='/' render={() =>(
    	<BooksList />		
    
    	)}/>
		<Route path='/add' render={()=>(
         <BookSearch /> 
        )}/>

         
        
         
       </div>
    )
  }
}

export default BooksApp
