import React, { Component } from 'react'
import Header from '../Header'
import requestimg from '../../assets/dev.jpeg'
import profileimg from '../../assets/picklerick.jpg'
import insertImage from '../../assets/insert-image.png'
import './style.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class CreateAPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      header: '',
      image: '',
      body: []
    }
  }
  render() {
    return (
      <div>
        <h1>Create a post</h1>
        <section className="requestBoxCentering">
          <section className="requestBox">
            <h4 className="requestBoxTitle">You header text here</h4>
            <img className="requestBoxImage" src={insertImage} alt="request" />
            <ul>
              <li>body notes</li>
              <li>body notes</li>
            </ul>
          </section>
        </section>
      </div>
    )
  }
}

export default CreateAPost

// 3 input boxes
// one chnages state for Header
// one changes state for Image
// last pushes the line onto the new array and then is mapped over to create the new li's

// would be nice if i can a more interactive post
// - add straight to the post
//   - click the header area to add in
//   - click an image area to add image
//   - click on first li to create first then enter to start a new li
