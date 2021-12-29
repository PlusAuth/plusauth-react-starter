import React from 'react'
import { useNavigate } from 'react-router-dom'

class AuthCallback extends React.Component {
  async componentDidMount() {
    try {
      await window.$auth.loginCallback()
      this.props.navigate('/')
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    return <div></div>
  }
}

// useNavigate cannot be used in Class Components
// function component created and exported to use useNavigate()
function WithNavigate(props) {
  let navigate = useNavigate()
  return <AuthCallback {...props} navigate={navigate} />
}

export default WithNavigate
