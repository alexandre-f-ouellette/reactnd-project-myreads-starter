import React from 'react'
import './App.css'
import PropTypes from 'prop-types'

class BookShelfChanger extends React.Component {
  render() {
    const { value } = this.props

    return(
      <div className="book-shelf-changer">
        <select value={value}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

BookShelfChanger.PropTypes = {
  value: PropTypes.string.required,
  onChange: PropTypes.func.required
}

export default BookShelfChanger
