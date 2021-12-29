import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import SilentRenew from '../components/silentRenew'
import AuthCallback from '../components/authCallback'
import Home from '../views/home'
import Profile from '../views/profile'
import Unauthorized from '../views/unauthorized'

export const RouteList = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/callback" element={<AuthCallback />} />
    <Route path="/silent-renew.html" element={<SilentRenew />} />
    <Route path="/unauthorized" element={<Unauthorized />} />
    <Route
      path="/profile"
      element={
        <PrivateRoute>
          <Profile />{' '}
        </PrivateRoute>
      }
    />
  </Routes>
)
