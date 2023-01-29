'use strict'

import { SIGN_IN_WITH_GOOGLE, LOGOUT } from './actions'
import { getLoggedInUser } from './storage'

export const STATE_KEY = 'auth'
export const STATE_GET_LOGGED_IN_USER_KEY = 'get_logged_in_user'

export const INITIAL_STATE = {
  [STATE_GET_LOGGED_IN_USER_KEY]: getLoggedInUser
}

// @todo: describe a structure of action.payload
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_WITH_GOOGLE: {
      // nothing to change right now
      return state
    }
    case LOGOUT: {
      // nothing to change right now
      return state
    }
    default: {
      return state
    }
  }
}
