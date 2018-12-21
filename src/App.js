import React, { Component } from 'react'
import './App.css'
import SignIn from './SignIn'
import ForYou from './ForYou'
import Explore from './Explore'
import Header from './Header'
import profileimg from './assets/picklerick.jpg'
import coverimg from './assets/space.jpeg'

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
        {/* <ForYou /> */}
        {/* <Explore /> */}
        <Header />
        <div className="CoverImage">
          <img className="ProfileCoverImage" src={coverimg} alt="profile" />
        </div>
        <main className="ProfileBody">
          <div className="profileTop">
            <img className="ProfileImage" src={profileimg} alt="profile" />
          </div>
          <div className="profileAttributesBar">
            <h6 className="profileAttributes">HOBBIES</h6>
            <h6 className="profileAttributes">INTERESTS</h6>
            <h6 className="profileAttributes">SKILLS</h6>
            <h6 className="profileAttributes">STRUGGLES</h6>
          </div>
          <div className="profileBio">
            {/* <h6>bio: make arrow pop down menu</h6> */}
            <p>
              Pokem ipsum dolor sit amet Zekrom Nidoran Togetic Girafarig
              Hariyama Cubchoo. V for victory Remoraid Terrakion Lanturn Seviper
              Grimer Plusle. Blizzard Elgyem Combusken Shinx Gold Luxio Leaf
              Green. Ivysaur Houndoom Jirachi Professor Elm Spheal Gorebyss
              Silver. Razor Leaf Kingdra Xatu Serperior Sewaddle Plusle
              Octillery.
            </p>
          </div>
          <div className="profileMyCommunityParent">
            {/* <h6>my community: make arrow pop down menu</h6> */}
            <div className="profileMyCommunity">
              <img
                className="ProfileCommunityProfileImage"
                src={profileimg}
                alt="profile"
              />{' '}
              <img
                className="ProfileCommunityProfileImage"
                src={profileimg}
                alt="profile"
              />{' '}
              <img
                className="ProfileCommunityProfileImage"
                src={profileimg}
                alt="profile"
              />{' '}
              <img
                className="ProfileCommunityProfileImage"
                src={profileimg}
                alt="profile"
              />{' '}
              <img
                className="ProfileCommunityProfileImage"
                src={profileimg}
                alt="profile"
              />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App
