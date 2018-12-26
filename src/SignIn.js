import React, { Component } from 'react'
import Footer from './Footer'

class SignIn extends Component {
  render() {
    return (
      <div>
        <h1 className="AppName">Community</h1>
        <section className="signIn">
          <p>SIGN IN</p>
          <input placeholder="Username" />
          <input placeholder="Password" />
          <button>SUBMIT</button>
        </section>
        <h5>to sign up</h5>
        <section className="signUp">
          <button>
            <i class="fab fa-google-plus-g" />
            GMAIL
          </button>
          <p>OR</p>
          <input placeholder="Email" />
          <input placeholder="Full Name" />
          <input placeholder="Username" />
          <input placeholder="Password" />
          <button>SIGN UP</button>
        </section>
        <section className="signInMission">
          <div className="signInMissionStatements">
            <i class="fas fa-hands-helping" />
            <p className="signInMissionStatements">HELP</p>
          </div>
          <i class="fas fa-arrow-right" />
          <div className="signInMissionStatements">
            <i class="fas fa-lightbulb" />
            <p className="signInMissionStatements">INSPIRE</p>
          </div>
          <i class="fas fa-arrow-right" />
          <div className="signInMissionStatementsRight">
            <i className="fab fa-connectdevelop" />
            <p className="signInMissionStatementsRight">BUILD COMMUNITY</p>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default SignIn
