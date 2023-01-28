'use strict'

import React from 'react'
import { View, Text } from '@adobe/react-spectrum'
import Alert from '@spectrum-icons/workflow/Alert'

/* eslint-disable react/prop-types */
const DisplayError = (props) => {
  return (
    <View>
      <Alert aria-label="Negative Alert" color="negative" />
      <Text marginStart="size-65">{props.error}</Text>
    </View>
  )
}

export default DisplayError
