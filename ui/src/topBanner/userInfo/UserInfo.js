/*global FB*/
import React, { Component } from 'react'
import './UserInfo.css'
const Constants = require('../../Constants')

export default class UserInfo extends Component {
  logOut = (auth) => {
    if (auth.Type === Constants.Authentication.Facebook.id){
      // Log out of Facebook and reload the page.
      FB.logout(function(response){
        window.location.reload()
      })
    }
  }
  
  render() {
    const { Authentication } = this.props
    
    let userInfo
    if (Authentication && Authentication.AuthInfo.LoggedIn){
      userInfo = (
        <div>
          {Authentication.Name}
          <button className={`fa fa-sign-out`} onClick={() => {this.logOut(Authentication.AuthInfo)}}/>
        </div>
      )
    } else {
      userInfo = (
        <div>
          Log In
          <a href="/login">
            <button className={`fa fa-sign-in`}/>
          </a>
        </div>
      )
    }
    return (
      <div id={`userInfo`}>
        {userInfo}
      </div>
    )
  }
}
