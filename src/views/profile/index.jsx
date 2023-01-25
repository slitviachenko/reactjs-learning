'use strict'

import React, { useEffect } from 'react'
import { View, Content, Heading } from '@adobe/react-spectrum'
import { useStateValue } from '../../state'
import { STATE_KEY as AUTH_STATE_KEY, STATE_USER_KEY } from '../../state/auth/reducer'
import { OAUTH_PROVIDER_KEY } from '../../state/auth/actions'

const Profile = () => {
  const [state] = useStateValue()
  const loggedInUser = state[AUTH_STATE_KEY][STATE_USER_KEY]

  useEffect(() => {
    document.title = 'Profile'
  })

  return (
    <View>
      <Heading level={2}>Hi here!</Heading>
      <Content>
        You are viewing this page because you are logged in using {loggedInUser[OAUTH_PROVIDER_KEY]}
        {JSON.stringify(loggedInUser)}
      </Content>
    </View>
  )
}

export default Profile
