/*global FB*/

import React, { Component } from 'react'
import './TopBanner.css'

import UserInfo from './userInfo/UserInfo'
const Constants = require('../Constants')
    
export default class TopBanner extends Component {
  componentDidMount(){
    this.state = {
      AuthInfo: {
        LoggedIn: false,
        UserID: null,
        Token: null,
        Type: 0
      }
    }
    
    window.fbAsyncInit = function() {
      FB.init({
        appId      : Constants.Authentication.Facebook.appId,
        xfbml      : true,
        version    : 'v2.8',
        cookie     : true
      })
      
      FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
          this.setState({
            AuthInfo: {
              LoggedIn: true,
              UserID: response.authResponse.userID,
              Token: response.authResponse.accessToken,
              Type: 1
            }
          })
          // Once login succeeds, get the name for later use
          FB.api('/me', {access_token: this.state.AuthInfo.Token, fields: 'name'}, function(response) {
            this.setState({Name: response.name})
          }.bind(this))
        }
      }.bind(this))
    }.bind(this)
  }
  
  render() {
    return (
      <div className={`topBanner`}>
        <UserInfo Authentication={this.state}/>
      </div>
    )
  }
}
