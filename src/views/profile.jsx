import React, { Component } from 'react'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = { user: null }
  }

  async componentDidMount() {
    window.$auth.on('user_login', ({ user }) => 
      this.setState({user: user})
    )
    window.$auth.on('user_logout', () => (this.setState({user: null})))
    const user = await window.$auth.getUser()
    this.setState({user: user})
  }

  render() {
    return (
      <div className="container" >
        {this.state.user && (
          <><h3>Welcome {this.state.user.username} !</h3><pre>User object: {JSON.stringify(this.state.user, null, 2)} </pre></>
        )}
      </div>
    )
  }
}
