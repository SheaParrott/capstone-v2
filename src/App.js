import React, { Component } from 'react'
import './App.css'
import SignIn from './SignIn'
import RecommendedPosts from './RecommendedPosts'
import InterestedPosts from './InterestedPosts'
import Header from './Header'
import profileimg from './assets/picklerick.jpg'
import coverimg from './assets/space.jpeg'
import requestimg from './assets/dev.jpeg'
import Footer from './Footer'
import Post from './Post'
import Profile from './Profile'
import PostWithComments from './PostWithComments'
import Mission from './Mission'
import Creator from './Creator'

// ~COMMUNITY APP~
// expand your world and build community
// help & build eachother up app
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
// top 3 of what may interest you
//predefine all the categories - gavins suggestion (:

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
        {/* <RecommendedPosts /> */}
        {/* <InterestedPosts /> */}
        {/* <Profile /> */}
        {/* <PostWithComments /> */}
        <Creator />
        {/* <Mission /> */}
      </div>
    )
  }
}

export default App
