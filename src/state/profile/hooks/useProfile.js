'use strict'

import { useState } from 'react'
import { useStateValue } from '../../index'
import { STATE_KEY as PROFILE_STATE_KEY } from '../reducer'
import { loadProfile } from '../queries'
import { setProfileData } from '../actions'
import { STATE_KEY as AUTH_STATE_KEY, STATE_USER_KEY } from '../../auth/reducer'

const useProfile = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [state, dispatch] = useStateValue()
  const loggedInUser = state[AUTH_STATE_KEY][STATE_USER_KEY]

  const request = async () => {
    setIsLoading(true)
    try {
      const profileData = await loadProfile(loggedInUser['token'])
      dispatch(setProfileData(profileData))
    } catch (e) {
      setError(e.message)
    }
    setIsLoading(false)
  }

  return [state[PROFILE_STATE_KEY], request, isLoading, error]
}

export default useProfile
