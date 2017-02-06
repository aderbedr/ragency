import React, { Component } from 'react'
import './Login.css'

import LoginForm from './form/LoginForm'
import LoginButton from './button/LoginButton'

export default class Login extends Component {
  
  render() {
    return (
      <div className="container">
        <div id="login">
          <h1 id="welcome"><strong>Ragency.</strong></h1>

          <LoginForm />

      		<p><span className="btn-round">or</span></p>

          <LoginButton socialNetwork="facebook" />
          <LoginButton socialNetwork="twitter" />

        </div>
      </div>
    )
  }
}
