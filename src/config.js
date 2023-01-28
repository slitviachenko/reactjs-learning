'use strict'

const config = {
  googleClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  loginUrl: process.env.REACT_APP_BACKEND_API_URL + '/login'
}

export const getConfig = (key) => {
  if (Object.prototype.hasOwnProperty.call(config, key)) {
    return config[key]
  } else if (Object.prototype.hasOwnProperty.call(process.env, key)) {
    return process.env[key]
  }
  throw new Error(`"${key}" is not defined.`)
}
