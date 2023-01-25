'use strict'

import { SIGN_IN_WITH_GOOGLE, LOGOUT } from './actions'
import { getLoggedInUser } from './storage'

export const STATE_KEY = 'auth'
export const STATE_USER_KEY = 'user'

export const INITIAL_STATE = {
  [STATE_USER_KEY]: getLoggedInUser()
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_WITH_GOOGLE: {
      return {
        [STATE_USER_KEY]: action.payload
      }
    }
    case LOGOUT: {
      return {
        [STATE_USER_KEY]: null
      }
    }
    default: {
      return state
    }
  }
}
