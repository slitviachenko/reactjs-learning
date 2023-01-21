import React from 'react'
import { Flex, View } from '@adobe/react-spectrum'
import styled from 'styled-components'
import Navigation from './components/navigation'

const Main = styled.main`
  position: relative;
  padding: 1em;
`

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <Flex direction="column" gap="size-100">
      <View backgroundColor="gray-200" height="size-2000"></View>
      <Flex direction="row" height="size-6000" gap="size-100">
        <View backgroundColor="gray-300" width="size-2000">
          <Navigation />
        </View>
        <View backgroundColor="gray-75" flex>
          <Main>{children}</Main>
        </View>
      </Flex>
      <View backgroundColor="gray-200" height="size-800"></View>
    </Flex>
  )
}

export default Layout
