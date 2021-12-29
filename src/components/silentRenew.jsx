import React from 'react'
import { OIDCClient } from '@plusauth/plusauth-oidc-client-js'

export default class SilentRenew extends React.Component {
  async componentDidMount() {
    await new OIDCClient({
      issuer: process.env.REACT_APP_OIDC_ISSUER,
    }).loginCallback()
  }
  render() {
    return <div></div>
  }
}
