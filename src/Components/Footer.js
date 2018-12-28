import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer>
        <Link to="/Mission"> Mission</Link>
        <Link to="/Creator"> Creator</Link>
        <Link to="/">Home</Link>
        <p>&copy; SheaParrott Productions</p>
      </footer>
    )
  }
}

export default Footer
