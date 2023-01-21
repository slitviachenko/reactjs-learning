const LOGGED_IN_USER_KEY = 'logged_in_user'

// @todo: jsdoc/require-jsdoc
export function getLoggedInUser() {
  return JSON.parse(sessionStorage.getItem(LOGGED_IN_USER_KEY))
}

// @todo: jsdoc/require-jsdoc
export function saveLoggedInUser(loggedInUser) {
  return sessionStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(loggedInUser))
}

// @todo: jsdoc/require-jsdoc
export function clearLoggedInUser() {
  return sessionStorage.removeItem(LOGGED_IN_USER_KEY)
}
