import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Auth from './auth'
import 'bootstrap/dist/css/bootstrap.min.css'

// Make auth object global to access from anywhere
window.$auth = Auth

Auth.initialize()
  .then(() => {})
  .catch(console.error)
  .finally(() => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    )
  })
