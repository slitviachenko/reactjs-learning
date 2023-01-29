'use strict'

import React from 'react'

// https://react-spectrum.adobe.com/react-spectrum/Provider.html
import { defaultTheme, Provider as AdobeReactSpectrumProvider } from '@adobe/react-spectrum'

// https://www.w3schools.com/react/react_router.asp
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Layout from '../views/layout'
import Home from '../views/home'
import Login from '../views/login'
import Profile from '../views/profile'
import NoPage from '../views/no-page'

import { useStateValue } from '../state'
import { STATE_KEY as AUTH_STATE_KEY, STATE_GET_LOGGED_IN_USER_KEY } from '../state/auth/reducer'

const AppRoutes = () => {
  const [state] = useStateValue()
  const loggedInUser = state[AUTH_STATE_KEY][STATE_GET_LOGGED_IN_USER_KEY]()

  return (
    <AdobeReactSpectrumProvider theme={defaultTheme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route
                path="login"
                element={
                  loggedInUser !== null ? <Navigate to="/profile" replace={true} /> : <Login />
                }
              />
              <Route
                path="profile"
                element={
                  loggedInUser !== null ? <Profile /> : <Navigate to="/login" replace={true} />
                }
              />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AdobeReactSpectrumProvider>
  )
}

export default AppRoutes
