import React, { Component } from 'react'
import './App.css'
import Post from './Post'
import Header from './Header'
import Footer from './Footer'

class InterestedPosts extends Component {
  render() {
    return (
      <div className="App">
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

export default InterestedPosts
