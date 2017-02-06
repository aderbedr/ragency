import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div className="container">
        <div id="login">
          <h1 id="welcome"><strong>Ragency.</strong></h1>
          <form onSubmit={ this.handleSubmit }>

      			<fieldset>
      				<p><input type="text" required placeholder="username" /></p>
      				<p><input type="password" required placeholder="password" /></p>
      				<p><a href="#">Forgot Password?</a></p>
      				<p><input type="submit" value="Login" /></p>
      			</fieldset>

    		  </form>

      		<p><span className="btn-round">or</span></p>

      		<p>
            <a className="facebook-before"><span className="fontawesome-facebook"></span></a>
      			<button className="facebook">Log in using Facebook</button>
      		</p>

      		<p>
      			<a className="twitter-before"><span className="fontawesome-twitter"></span></a>
      			<button className="twitter">Log in using Twitter</button>
      		</p>

        </div>
      </div>
    )
  }
}
