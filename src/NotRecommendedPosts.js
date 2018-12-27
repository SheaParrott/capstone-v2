import React, { Component } from 'react'
import './App.css'
import Post from './Components/Post'
import Header from './Components/Header'
import Footer from './Components/Footer'

class RecommendedPosts extends Component {
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

export default RecommendedPosts
