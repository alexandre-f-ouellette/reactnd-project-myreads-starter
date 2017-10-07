import React, { Component } from 'react'
import './App.css'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  render() {
    const { book } = this.props

    const imageUrl = 'url(' + book.imageLinks.smallThumbnail + ')'

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: imageUrl }}></div>
            <BookShelfChanger
              value={book.shelf}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors.map((author, index) => {
              return(
                <span key={index}>
                  {author}
                  <br />
                </span>
              )
            })}
          </div>
        </div>
      </li>
    )
  }
}

Book.PropTypes = {
  book: PropTypes.object.required
}

export default Book
