'use strict'

import { SET_PROFILE_DATA } from './actions'
import { LOGOUT } from '../auth/actions'

export const STATE_KEY = 'profile'

export const INITIAL_STATE = {}

// @todo: describe a structure of action.payload
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA: {
      return {
        ...state,
        ...action.payload
      }
    }
    case LOGOUT: {
      return INITIAL_STATE
    }
    default: {
      return state
    }
  }
}
