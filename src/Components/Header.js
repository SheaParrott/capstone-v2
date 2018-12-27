import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          {/* hamburger menu
          my profile
          recommended posts
          interested posts
          mission 
          creator
          sign out
          */}
          <a href="#">
            <i className="fas fa-bars" />
          </a>
          <a href="#">
            <i className="fab fa-connectdevelop" />
          </a>
          <a href="#">
            <i class="fas fa-bell" />
          </a>
        </header>
      </div>
    )
  }
}

export default Header
