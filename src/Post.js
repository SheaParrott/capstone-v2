import React, { Component } from 'react'
import requestimg from './assets/dev.jpeg'
import profileimg from './assets/picklerick.jpg'

class Post extends Component {
  render() {
    return (
      <div>
        <section className="requestBoxCentering">
          <section className="requestBox">
            <div className="requestBoxTopBar">
              <img
                className="requestBoxProfileImage"
                src={profileimg}
                alt="profile"
              />
              <div className="requestBoxTopBarInfo">
                <p className="requestBoxProfileName">Pickle Rick</p>
                <p className="requestBoxDate">Yesterday</p>
              </div>
              <i class="fas fa-ellipsis-v" />
            </div>
            <img className="requestBoxImage" src={requestimg} alt="request" />
            <p>
              Bacon ipsum dolor amet buffalo tail leberkas swine rump. Chicken
              drumstick porchetta, bresaola strip steak filet mignon shoulder
              pig t-bone sirloin doner pork loin biltong jerky. Pig pork cow
              filet mignon. Pancetta short ribs pastrami, tail landjaeger
              turducken meatball.
            </p>
            <div className="requestBoxMiddleBar">
              <div className="requestBoxMiddleBarTwo">
                <i class="far fa-comment" />
                <p className="requestBoxClick">Comment</p>
              </div>
              <div className="requestBoxMiddleBarTwo">
                <i class="fas fa-magnet" />
                <p className="requestBoxClick">Interested</p>
              </div>
            </div>
            <div className="requestBoxBottomBar">
              <p className="requestBoxBottomBarInfo">7 comments</p>
              <p className="requestBoxBottomBarInfo">9 Interested</p>
            </div>
          </section>
        </section>
      </div>
    )
  }
}

export default Post
