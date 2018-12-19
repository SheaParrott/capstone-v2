import React, { Component } from 'react'
import './App.css'
import SignIn from './SignIn'
import Post from './Post'
import Header from './Header'
import Footer from './Footer'

// ~COMMUNITY APP~
// expand your world and build community
// build eachother up app
// help eachother
// inspirational quotes
// good vibes

// sign in page
//
//

// in profile
// picture
// hobbies
// interests
// skills
// struggles
// - inspirational quotes to be added here
//    - strive past struggles and build yourself and others

// request box
// - hash search option
// - picture, (help, interested in getting into, group meet)
//   - include hash tag on requests

// new feed option
// - what friends are up to
// - things that are related to your profile info

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SignIn /> */}
        <Header />
        <Post />
        <Post />
        <Post />
        <Post />
        <Footer />
      </div>
    )
  }
}

export default App
