'use strict'

import { getData } from '../../helper/fetch'

const profileApiUrl = process.env.REACT_APP_BACKEND_API_URL + '/profile'

// @todo: describe a returned response structure
export const loadProfile = (jwtToken) => {
  return getData(profileApiUrl, {}, jwtToken)
}
