import React, { Component } from 'react'
import './App.css'
import SignIn from './SignIn'
import ForYou from './ForYou'
import Explore from './Explore'
import Header from './Header'
import profileimg from './assets/picklerick.jpg'
import coverimg from './assets/space.jpeg'
import requestimg from './assets/dev.jpeg'
import Footer from './Footer'
import Post from './Post'

class Profile extends Component {
  render() {
    return (
      <div className="App">
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
            {/* add hide and show button */}
            <h6>bio:</h6>
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
            <h6>my community:</h6>
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
          <div class="ProfilePostsBox">
            <h6>Recommended Posts:</h6>
            <div class="ProfileRecommendedPost">
              <img
                className="ProfileRequestBoxImage"
                src={requestimg}
                alt="request"
              />
              <h4>Need help with react router!!</h4>
            </div>
            <div class="ProfileRecommendedPost">
              <img
                className="ProfileRequestBoxImage"
                src={requestimg}
                alt="request"
              />
              <h4>Need help with react router!!</h4>
            </div>
            <div class="ProfileRecommendedPost">
              <img
                className="ProfileRequestBoxImage"
                src={requestimg}
                alt="request"
              />
              <h4>Need help with react router!!</h4>
            </div>
            <h6>See More</h6>
          </div>
          <div class="ProfilePostsBox">
            <h6>interested Posts:</h6>
            <div class="ProfileRecommendedPost">
              <img
                className="ProfileRequestBoxImage"
                src={requestimg}
                alt="request"
              />
              <h4>Need help with react router!!</h4>
            </div>
            <div class="ProfileRecommendedPost">
              <img
                className="ProfileRequestBoxImage"
                src={requestimg}
                alt="request"
              />
              <h4>Need help with react router!!</h4>
            </div>
            <div class="ProfileRecommendedPost">
              <img
                className="ProfileRequestBoxImage"
                src={requestimg}
                alt="request"
              />
              <h4>Need help with react router!!</h4>
            </div>
            <h6>See More</h6>
          </div>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </main>
        <Footer />
      </div>
    )
  }
}

export default Profile
