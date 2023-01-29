'use strict'

import React, { useEffect } from 'react'
import { View, Content, Heading, Well } from '@adobe/react-spectrum'
import Loading from '../layout/components/spinner'
import DisplayError from '../layout/components/displayError'
import { useStateValue } from '../../state'
import { STATE_KEY as AUTH_STATE_KEY, STATE_GET_LOGGED_IN_USER_KEY } from '../../state/auth/reducer'
import { OAUTH_PROVIDER_KEY } from '../../state/auth/actions'
import useProfile from '../../state/profile/hooks/useProfile'
import _ from 'underscore'

const Profile = () => {
  const [state] = useStateValue()
  const loggedInUser = state[AUTH_STATE_KEY][STATE_GET_LOGGED_IN_USER_KEY]()
  const [profile, request, isLoading, error] = useProfile()

  useEffect(() => {
    document.title = 'Profile'
  })

  useEffect(() => {
    if (_.isEmpty(profile)) {
      request()
    }
  }, [])

  return (
    <View>
      <Loading show={isLoading} />
      {error !== null && <DisplayError error={error} />}
      <View>
        <Heading level={2}>
          Hi {loggedInUser['firstName']} {loggedInUser['lastName']}
        </Heading>
        <Content>
          <View>
            <p>
              You are logged in using your {loggedInUser[OAUTH_PROVIDER_KEY]}{' '}
              {loggedInUser['email']} account.
            </p>
            <View>
              <p>Returned profile data:</p>
              {_.isEmpty(profile) ? (
                <Well>Retrieving profile data...</Well>
              ) : (
                <Well>{JSON.stringify(profile.data)}</Well>
              )}
            </View>
          </View>
        </Content>
      </View>
    </View>
  )
}

export default Profile
