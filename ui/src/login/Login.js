import React, { Component } from 'react'
import './Login.css'

import LoginForm from './form/LoginForm'
import LoginButton from './button/LoginButton'

const Constants = require('../Constants')

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <div id="login">
          <h1 id="welcome"><strong>Ragency.</strong></h1>

          <LoginForm />

      		<p><span className="btn-round">or</span></p>

          <LoginButton socialNetwork={Constants.Authentication.Facebook} />
          <LoginButton socialNetwork={Constants.Authentication.Twitter} />

        </div>
      </div>
    )
  }
}
