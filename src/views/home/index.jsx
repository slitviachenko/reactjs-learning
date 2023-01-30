'use strict'

import React, { useEffect } from 'react'
import { View, Content, Heading } from '@adobe/react-spectrum'

const Home = () => {
  useEffect(() => {
    document.title = 'Home'
  })

  return (
    <View>
      <Heading level={2}>Welcome</Heading>
      <Content>Main Content</Content>
    </View>
  )
}

export default Home
