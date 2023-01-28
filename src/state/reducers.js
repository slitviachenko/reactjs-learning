'use strict'

import authReducer, { STATE_KEY as AUTH_STATE_KEY } from './auth/reducer'
import profileReducer, { STATE_KEY as PROFILE_STATE_KEY } from './profile/reducer'

export default (state, action) => ({
  [AUTH_STATE_KEY]: authReducer(state[AUTH_STATE_KEY], action),
  [PROFILE_STATE_KEY]: profileReducer(state[PROFILE_STATE_KEY], action)
})
