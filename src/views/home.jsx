import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { user: null }
  }

  async componentDidMount() {
    window.$auth.on('user_login', ({ user }) => this.setState({ user: user }))
    window.$auth.on('user_logout', () => this.setState({ user: null }))
    const user = await window.$auth.getUser()
    this.setState({ user: user })
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">
            Hello, {this.state.user ? this.state.user.username : 'World'}!
          </h1>
          <p>
            This is a template for a simple login/register system. It includes
            the OpenID Connect Implicit Flow. To view Profile page please login.
          </p>
          <p>
            {this.state.user && (
              <Link className="btn btn-primary btn-lg" to="/profile">
                View Profile &raquo;
              </Link>
            )}

            {!this.state.user && (
              <button
                className="btn btn-primary btn-lg"
                onClick={() => window.$auth.login()}
              >
                Login/Register &raquo;
              </button>
            )}
          </p>
        </div>
      </div>
    )
  }
}
