import React, { useEffect } from 'react'
import { Heading } from '@adobe/react-spectrum'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  position: fixed;
`

// https://developers.google.com/identity/gsi/web/reference/js-reference

// eslint-disable-next-line react/prop-types
const SignInWithGoogleButton = ({ handleSignInWithGoogle }) => {
  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleSignInWithGoogle
      })

      google.accounts.id.renderButton(document.getElementById('loginDiv'), {
        type: 'standard',
        theme: 'filled_black',
        // size: 'small',
        text: 'signin_with',
        shape: 'pill'
      })

      // google.accounts.id.prompt() is used to automatically ask the user to sign in immediately they open your web page. It can be placed in the root file or the login page.
      // google.accounts.id.prompt()
    }
  })

  return (
    <>
      <Heading level={2}>Login to continue</Heading>
      <ButtonContainer id="loginDiv">Loading...</ButtonContainer>
    </>
  )
}

export default SignInWithGoogleButton
