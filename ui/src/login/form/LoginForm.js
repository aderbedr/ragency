import React, { Component } from 'react'
import './LoginForm.css'

export default class LoginForm extends Component {

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>

        <fieldset>
          <p><input type="text" required placeholder="username" /></p>
          <p><input type="password" required placeholder="password" /></p>
          <p><a href="#">Forgot Password?</a></p>
          <p><input type="submit" value="Login" /></p>
        </fieldset>

      </form>
    )
  }
}
