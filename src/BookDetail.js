import React from 'react'


class BookDetail extends React.Component {
  render() {
    const { book } = this.props
    return (
      <div className="Book content">
        <div className="columns">
          <div className="column">
            <img alt={book.title} src={`../${book.imageLink}`} />
          </div>
          <div className="column">
            <h1 className="title is-2">{book.title}</h1>
            <h2 className="title is-3">{book.author}</h2>
            <ul>
              <li>{book.year}</li>
              <li>{book.pages}</li>
              <li>{book.language}</li>
              <li>{book.country}</li>
              <li><a href={book.link}>Wikipedia</a></li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default BookDetail