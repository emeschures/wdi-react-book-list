import React from 'react'
import { Link } from 'react-router-dom'



class Books extends React.Component {

  state = { filter: '' }

  handleFilterChange(evt) {
    this.setState({ filter: evt.target.value })
  }

  render() {
    const { books } = this.props
    const filteredBooks = books.filter((b) => {
      return b.title.toLowerCase().includes(this.state.filter.toLowerCase())
    })
    return (
      <div className="Books">
  
        <input onChange={this.handleFilterChange.bind(this)} className="input is-large" type="text" placeholder="Filter The List" />
        <ul className="menu-list">
          {filteredBooks.map((b) => {
            return (
              <li key={b._id}>
                <Link to={`/books/${b._id}`}>{b.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Books