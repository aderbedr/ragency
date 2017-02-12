/*global FB*/

import React, { Component } from 'react'
import './LoginButton.css'
const Constants = require('../../Constants')

export default class LoginButton extends Component {
  LogIn(socialNetwork){
    if (socialNetwork.socialNetwork.id === Constants.Authentication.Facebook.id) {
      FB.login(function(response) {
        if (response.authResponse) {
          window.location.pathname = "/"
        }
      })
    }
  }

  render() {
    const { socialNetwork } = this.props

    return (
      <p>
        <a className={`${socialNetwork.name}-before`}><span className={`fa-${socialNetwork.name}`}></span></a>
        <button className={`${socialNetwork.name}`} onClick={() => {this.LogIn({socialNetwork})}}>
          Log in using {socialNetwork.name}
        </button>
      </p>
    )
  }
}
