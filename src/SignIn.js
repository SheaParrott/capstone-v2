import React, { Component } from 'react'

class SignIn extends Component {
  render() {
    return (
      <div>
        <h1>COMMUNITY</h1>
        <section className="signIn">
          <p>SIGN IN</p>
          <input placeholder="Username" />
          <input placeholder="Password" />
          <button>SUBMIT</button>
        </section>
        <h5>to sign up</h5>
        <section className="signUp">
          <button>login with google</button>
          <p>OR</p>
          <input placeholder="Email" />
          <input placeholder="Full Name" />
          <input placeholder="Username" />
          <input placeholder="Password" />
          <button>SIGN UP</button>
        </section>
      </div>
    )
  }
}

export default SignIn
