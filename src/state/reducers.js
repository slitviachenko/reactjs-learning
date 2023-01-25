'use strict'

import authReducer, { STATE_KEY as AUTH_STATE_KEY } from './auth/reducer'

export default (state, action) => ({
  [AUTH_STATE_KEY]: authReducer(state[AUTH_STATE_KEY], action)
})
