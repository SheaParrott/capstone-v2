import React, { Component } from 'react'
import requestimg from './assets/dev.jpeg'
import profileimg from './assets/picklerick.jpg'

//
// three lines is called a hamburger menu
//
class Post extends Component {
  render() {
    return (
      <div>
        <section className="requestBoxCentering">
          <section className="requestBox">
            <div className="requestBoxTopBar">
              <a href="#">
                <img
                  className="requestBoxProfileImage"
                  src={profileimg}
                  alt="profile"
                />
              </a>
              <div className="requestBoxTopBarInfo">
                <a href="#">
                  <p className="requestBoxProfileName">Pickle Rick</p>
                </a>
                <p className="requestBoxDate">Yesterday</p>
              </div>
              <a href="#">
                <i className="fas fa-ellipsis-v" />
              </a>
            </div>
            <h4 className="requestBoxTitle">Need help with react router!!</h4>
            <img className="requestBoxImage" src={requestimg} alt="request" />
            <ul>
              <li>free on weekends and nights after 7</li>
              <li>Meetup at Starbucks downtown St.Pete?</li>
            </ul>
            <div className="requestBoxMiddleBar">
              <div className="requestBoxMiddleBarTwo">
                <a href="#">
                  <i className="far fa-comment" />
                </a>
                {/* <p className="requestBoxClick">Comment</p> */}
              </div>
              <div className="requestBoxMiddleBarTwo">
                <a href="#">
                  <i className="fas fa-magnet" />
                </a>
                {/* <p className="requestBoxClick">Interested</p> */}
              </div>
            </div>
            <div className="requestBoxBottomBar">
              <a href="#" className="requestBoxBottomBarInfo">
                7 comments
              </a>
              <a href="#" className="requestBoxBottomBarInfo">
                9 Interested
              </a>
            </div>
          </section>
        </section>
      </div>
    )
  }
}

export default Post
