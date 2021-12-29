import React from 'react'
import { Navigate } from 'react-router-dom'

export default class PrivateRoute extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: true,
  }

  // auth.isLoggedIn returns promise
  // Get isLoggedIn value using await and use in render
  async componentDidMount() {
    const isLoggedIn = await window.$auth.isLoggedIn(true)
    this.setState({ isLoggedIn: isLoggedIn, isLoading: false })
  }

  render() {
    if (this.state.isLoading) return <div>Loading...</div>
    else if (this.state.isLoggedIn) return this.props.children
    // If logged in then go to protected route
    else return <Navigate to="/unauthorized" /> // else navigate to unauthorized page
  }
}
