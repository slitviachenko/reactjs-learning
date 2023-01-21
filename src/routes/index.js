import React from 'react'
import { StateProvider } from '../state'
import reducers from '../state/reducers'
import {
  INITIAL_STATE as AUTH_INITIAL_STATE,
  STATE_KEY as AUTH_STATE_KEY
} from '../state/auth/reducer'

import AppRoutes from './app-routes'

const Root = () => {
  const initialState = {
    [AUTH_STATE_KEY]: AUTH_INITIAL_STATE
  }

  return (
    <StateProvider initialState={initialState} reducer={reducers}>
      <AppRoutes />
    </StateProvider>
  )
}

export default Root
