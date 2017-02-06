import React, { Component } from 'react'
import './LoginButton.css'

export default class LoginButton extends Component {

  render() {
    const { socialNetwork } = this.props

    return (
      <p>
        <a className={`${socialNetwork}-before`}><span className={`fontawesome-${socialNetwork}`}></span></a>
        <button className={`${socialNetwork}`}>Log in using {socialNetwork}</button>
      </p>
    )
  }
}
