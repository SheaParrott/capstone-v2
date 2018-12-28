import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HamburgerMenu from './headerHamburgerMenu'
import Notifications from './notifications'

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
          <Link to="/profile">
            <i className="fab fa-connectdevelop" />
          </Link>
          <a href="#">
            <i class="fas fa-bell" />
          </a>
        </header>
      </div>
    )
  }
}

export default Header
