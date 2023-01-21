import React, { useEffect } from 'react'
import { View, Text } from '@adobe/react-spectrum'
import Alert from '@spectrum-icons/workflow/Alert'
import useSignInWithGoogle from '../../state/auth/hooks/useSignInWithGoogle'
import SignInWithGoogleButton from './components/signInWithGoogleButton'
import Loading from '../layout/components/spinner'

const Login = () => {
  const [handleSignInWithGoogle, isLoading, error] = useSignInWithGoogle()

  useEffect(() => {
    document.title = 'Login'
  })

  return (
    <View>
      <Loading show={isLoading} />
      {error !== null && (
        <>
          <View>
            <Alert aria-label="Negative Alert" color="negative" />
            <Text marginStart="size-65">{error}</Text>
          </View>
        </>
      )}
      <SignInWithGoogleButton handleSignInWithGoogle={handleSignInWithGoogle} />
    </View>
  )
}

export default Login
