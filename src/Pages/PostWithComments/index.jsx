import React, { Component } from 'react'
import requestimg from '../../assets/dev.jpeg'
import profileimg from '../../assets/picklerick.jpg'
import './style.css'

//
// three lines is called a hamburger menu
//
class PostWithComments extends Component {
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
                9 Interested
              </a>
            </div>
            {/* start of comments  */}
            {/* removed the number of comments on post and added static comments below */}
            <div className="comment">
              <img
                className="commentProfileImage"
                src={profileimg}
                alt="profile"
              />
              <div>
                <h6 className="comment">Mikey Saint</h6>
                <p className="comment">
                  I am good with react Router. Im free most saturdays to link up
                </p>
              </div>
            </div>
            <div className="comment">
              <img
                className="commentProfileImage"
                src={profileimg}
                alt="profile"
              />
              <div>
                <h6 className="comment">Frank Mueny</h6>
                <p className="comment">
                  I am struggling with react router. Can I join to learn too? I
                  will bring donuts!
                </p>
              </div>
            </div>
            <div className="comment">
              <img
                className="commentProfileImage"
                src={profileimg}
                alt="profile"
              />
              <div>
                <h6 className="comment">Martin Gabb</h6>
                <p className="comment">
                  Ive been working with react router for a few years now. Id
                  love to join in to help.
                </p>
              </div>
            </div>
            <div className="comment">
              <img
                className="commentProfileImage"
                src={profileimg}
                alt="profile"
              />
              <div>
                <h6 className="comment">Pickle Rick</h6>
                <p className="comment">
                  Cool, Does starbucks 10am saturday work for everyone?
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    )
  }
}

export default PostWithComments
