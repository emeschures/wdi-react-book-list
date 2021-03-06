import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'
import BookList from './BookList'
import BookDetail from './BookDetail'
import './App.css'

// OUR TOP 100 BOOKS IS A JSON ARRAY THAT CAN BE IMPORTED AND IS PARSED AUTOMATICALLY!
import bookList from './books.json'
// try uncommenting the following line and looking at the list in your browser console:
console.log(bookList)

class App extends Component {

  state = {
    books: bookList
  }

  render() {
    const {books} = this.state
    return (
      <div className="App">
        {/* Redirect to "/books" from the "/" root URL */}
        <Route exact path="/" render={() => {
          return <Redirect to="/books" />
        }} />

        <div className="section">
          {/* TITLE */}
          <h1 className="title is-1 has-text-centered">Top 100 Books Of All Time</h1>
          
          <div className="columns">
            
            {/* Left Column */}
            <div className="column is-4">
              <Route path="/books" render={() => {
                return <BookList books={books} />
              }} />
            </div>

            {/* Right Column */}
            <div className="column is-8">
              <Route path="/books/:id" render={(routeProps) => {
                const bookId = routeProps.match.params.id
                const book = books.find((b) => {
                  return b._id === bookId
                })
                return <BookDetail book={book} />
              }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
