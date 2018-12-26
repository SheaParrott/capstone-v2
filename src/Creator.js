import React, { Component } from 'react'
import Footer from './Footer'
import CreatorImage from './assets/IMG_0327.jpg'

class Creator extends Component {
  render() {
    return (
      <div>
        <h1 className="creator">Shea Parrott</h1>
        <img className="creator" src={CreatorImage} alt="Shea" />
        <p className="creatorInfo">(904) 629-8670</p>
        <p className="creatorInfo">alexandergotthis@gmail.com</p>
        <p className="creatorInfo">GitHub:</p>
        <p className="creatorInfo">github.com/SheaParrott</p>
        <p className="creatorInfo">LinkedIn: </p>
        <p className="creatorInfo">linkedin.com/in/shea-parrott/</p>
        <Footer />
      </div>
    )
  }
}

export default Creator
