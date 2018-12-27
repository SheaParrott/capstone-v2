import React, { Component } from 'react'
import './App.css'
import SignIn from './NotSignIn'
import ForYou from './NotRecommendedPosts'
import Explore from './NotInterestedPosts'
import Header from './Header'
import profileimg from './assets/picklerick.jpg'
import coverimg from './assets/space.jpeg'
import requestimg from './assets/dev.jpeg'
import Footer from './Components/Footer'
import Post from './Post'

class Profile extends Component {
  fillInBox = event => {
    console.log('clicked')
    // will need if statements to make work right
  }

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
          {/* on click fill bio box below with info */}
          <div className="profileAttributesBar">
            <h6 onClick={this.fillInBox} className="profileAttributes">
              HOBBIES
            </h6>
            <h6 onClick={this.fillInBox} className="profileAttributes">
              INTERESTS
            </h6>
            <h6 onClick={this.fillInBox} className="profileAttributes">
              SKILLS
            </h6>
            <h6 onClick={this.fillInBox} className="profileAttributes">
              STRUGGLES
            </h6>
          </div>
          <div className="profileBio">
            {/* add hide and show button, aka drop down menu */}
            {/* have hobbies, interests , skills, and struggles fill the bio section and remove bio possibly? */}
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
              <a href="#">
                <img
                  className="ProfileCommunityProfileImage"
                  src={profileimg}
                  alt="profile"
                />
              </a>
              <a href="#">
                <img
                  className="ProfileCommunityProfileImage"
                  src={profileimg}
                  alt="profile"
                />
              </a>
              <a href="#">
                <img
                  className="ProfileCommunityProfileImage"
                  src={profileimg}
                  alt="profile"
                />
              </a>
              <a href="#">
                <img
                  className="ProfileCommunityProfileImage"
                  src={profileimg}
                  alt="profile"
                />
              </a>
              <a href="#">
                <img
                  className="ProfileCommunityProfileImage"
                  src={profileimg}
                  alt="profile"
                />
              </a>
              <a href="#">
                <img
                  className="ProfileCommunityProfileImage"
                  src={profileimg}
                  alt="profile"
                />
              </a>
              <a href="#">
                <img
                  className="ProfileCommunityProfileImage"
                  src={profileimg}
                  alt="profile"
                />
              </a>
              <a href="#">
                <img
                  className="ProfileCommunityProfileImage"
                  src={profileimg}
                  alt="profile"
                />
              </a>
              <a href="#">
                <img
                  className="ProfileCommunityProfileImage"
                  src={profileimg}
                  alt="profile"
                />
              </a>
              <a href="#">
                <img
                  className="ProfileCommunityProfileImage"
                  src={profileimg}
                  alt="profile"
                />
              </a>
            </div>
          </div>
          <div class="ProfilePostsBox">
            <h6>Recommended Posts:</h6>
            <a href="#">
              <div class="ProfileRecommendedPost">
                <img
                  className="ProfileRequestBoxImage"
                  src={requestimg}
                  alt="request"
                />
                <h4>Need help with react router!!</h4>
              </div>
            </a>
            <a href="#">
              <div class="ProfileRecommendedPost">
                <img
                  className="ProfileRequestBoxImage"
                  src={requestimg}
                  alt="request"
                />
                <h4>Need help with react router!!</h4>
              </div>
            </a>
            <a href="#">
              <div class="ProfileRecommendedPost">
                <img
                  className="ProfileRequestBoxImage"
                  src={requestimg}
                  alt="request"
                />
                <h4>Need help with react router!!</h4>
              </div>
            </a>
            <a href="#">
              <h6>See More</h6>
            </a>
          </div>
          <div class="ProfilePostsBox">
            <h6>interested Posts:</h6>
            <a href="#">
              <div class="ProfileRecommendedPost">
                <img
                  className="ProfileRequestBoxImage"
                  src={requestimg}
                  alt="request"
                />
                <h4>Need help with react router!!</h4>
              </div>
            </a>
            <a href="#">
              <div class="ProfileRecommendedPost">
                <img
                  className="ProfileRequestBoxImage"
                  src={requestimg}
                  alt="request"
                />
                <h4>Need help with react router!!</h4>
              </div>
            </a>
            <a href="#">
              <div class="ProfileRecommendedPost">
                <img
                  className="ProfileRequestBoxImage"
                  src={requestimg}
                  alt="request"
                />
                <h4>Need help with react router!!</h4>
              </div>
            </a>
            <a href="#">
              <h6>See More</h6>
            </a>
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
