import React, { Component } from 'react'
import './App.css'
import Book from "./Book"
import PropTypes from 'prop-types'

class BookShelf extends Component {
  render() {
    const {
      books,
      title
    } = this.props

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => {
              return(
                <Book
                  book={book}
                  key={book.id}
                />
              )
            })}
          </ol>
        </div>
      </div>
    )
  }

}

BookShelf.PropTypes = {
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
}

export default BookShelf
