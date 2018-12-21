import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <a href="#">
            <i className="fas fa-bars" />
          </a>
          <a href="#">
            <i className="fab fa-connectdevelop" />
          </a>
          <a href="#">
            <i className="fas fa-search" />
          </a>
        </header>
      </div>
    )
  }
}

export default Header
