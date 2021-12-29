import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
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

  userDisplayName() {
    if (!this.state.user) {
      return null
    } else {
      if (!this.state.user.given_name || !this.state.user.family_name) {
        return this.state.user.username || this.state.user.email
      }
      return `${this.state.user.given_name} ${this.state.user.family_name}`
    }
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand container-fluid" href="/">
            Plusauth Starter
          </a>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav"></ul>
            {this.state.user && (
              <li className="nav-item navbar-nav text-light">
                <Link className="nav-link" to="/profile">
                  Logged in as: {this.userDisplayName()}
                </Link>
                <button
                  className="btn btn-link"
                  onClick={() => window.$auth.logout()}
                >
                  Logout
                </button>
              </li>
            )}
            {!this.state.user && (
              <li className="nav-item navbar-nav">
                <button
                  className="btn btn-link"
                  onClick={() => window.$auth.login()}
                >
                  Login
                </button>
              </li>
            )}
          </div>
        </nav>
      </header>
    )
  }
}
