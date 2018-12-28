import React, { Component } from 'react'
import './style.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class UpdateProfile extends Component {
  render() {
    return (
      <div>
        <h2>Update profile</h2>
        <h5>Cover Image</h5>
        <input type="text" />
        <h5>Profile Image</h5>
        <input type="text" />
        <h5>About Me</h5>
        <input type="text" />
        <h5>Strengths</h5>
        <input type="text" />
        <h5>Struggles</h5>
        <input type="text" />
        <br />
        <br />
        <Link to="/Profile">
          <button>SUBMIT</button>
        </Link>
      </div>
    )
  }
}

export default UpdateProfile
