import React, { Component } from 'react'
import './style.css'

class AddToCommunity extends Component {
  render() {
    return (
      <div className="addToCommunity">
        {/* make clickable */}
        <i class="fas fa-plus-circle" />
        <p>Add to Community</p>
      </div>
    )
  }
}

export default AddToCommunity
