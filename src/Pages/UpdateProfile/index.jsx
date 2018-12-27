import React, { Component } from 'react'
import './style.css'

class UpdateProfile extends Component {
  render() {
    return (
      <div>
        <h5>Cover Image</h5>
        <input type="text" />
        <button>SUBMIT</button>
        <h5>Profile Image</h5>
        <input type="text" />
        <button>SUBMIT</button>
        <h5>About Me</h5>
        <input type="text" />
        <button>SUBMIT</button>
        <h5>Strengths</h5>
        <input type="text" />
        <button>SUBMIT</button>
        <h5>Struggles</h5>
        <input type="text" />
        <button>SUBMIT</button>
      </div>
    )
  }
}

export default UpdateProfile
