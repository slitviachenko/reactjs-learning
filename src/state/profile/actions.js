'use strict'

export const SET_PROFILE_DATA = 'profile/SET_PROFILE_DATA'

export const setProfileData = (payload) => {
  return {
    type: SET_PROFILE_DATA,
    payload
  }
}
