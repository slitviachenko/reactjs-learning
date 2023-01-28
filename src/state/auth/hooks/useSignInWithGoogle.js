'use strict'

import { useState } from 'react'
import { useStateValue } from '../../index'
import { signInWithGoogle } from '../actions'
import { STATE_KEY as AUTH_STATE_KEY, STATE_USER_KEY } from '../reducer'
import { postData } from '../../../helper/fetch'

const loginApiUrl = process.env.REACT_APP_BACKEND_API_URL + '/login'

const useSignInWithGoogle = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [state, dispatch] = useStateValue()
  const loggedInUser = state[AUTH_STATE_KEY][STATE_USER_KEY]

  if (loggedInUser === null) {
    const handleSignInWithGoogle = async (signInWithGoogleResponse) => {
      setIsLoading(true)
      try {
        const loginApiResponse = await postData(loginApiUrl, {
          credential: signInWithGoogleResponse.credential
        })
        dispatch(signInWithGoogle(loginApiResponse.data))
      } catch (e) {
        setError(e.message)
      }
      setIsLoading(false)
    }

    return [handleSignInWithGoogle, isLoading, error]
  } else {
    throw new Error('A user is already logged in.')
  }
}

export default useSignInWithGoogle
