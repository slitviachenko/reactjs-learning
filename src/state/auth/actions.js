'use strict'

import { saveLoggedInUser, clearLoggedInUser } from './storage'

export const SIGN_IN_WITH_GOOGLE = 'auth/SIGN_IN_WITH_GOOGLE'
export const LOGOUT = 'auth/CLEAR_USER'

export const OAUTH_PROVIDER_KEY = 'oauthProvider'
export const OAUTH_PROVIDER_GOOGLE = 'google'

export const logout = () => {
  clearLoggedInUser()
  return {
    type: LOGOUT
  }
}

export const signInWithGoogle = (loggedInUser) => {
  loggedInUser[OAUTH_PROVIDER_KEY] = OAUTH_PROVIDER_GOOGLE
  saveLoggedInUser(loggedInUser)
  return {
    type: SIGN_IN_WITH_GOOGLE,
    payload: loggedInUser
  }
}
