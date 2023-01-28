'use strict'

import React, { useEffect } from 'react'
import { View } from '@adobe/react-spectrum'
import useSignInWithGoogle from '../../state/auth/hooks/useSignInWithGoogle'
import SignInWithGoogleButton from './components/signInWithGoogleButton'
import Loading from '../layout/components/spinner'
import DisplayError from '../layout/components/displayError'

const Login = () => {
  const [handleSignInWithGoogle, isLoading, error] = useSignInWithGoogle()

  useEffect(() => {
    document.title = 'Login'
  })

  return (
    <View>
      <Loading show={isLoading} />
      {error !== null && <DisplayError error={error} />}
      <SignInWithGoogleButton handleSignInWithGoogle={handleSignInWithGoogle} />
    </View>
  )
}

export default Login
