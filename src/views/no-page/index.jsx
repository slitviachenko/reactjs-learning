'use strict'

import React from 'react'
import { IllustratedMessage, Heading, Content } from '@adobe/react-spectrum'
import NotFound from '@spectrum-icons/illustrations/NotFound'

const NoPage = () => {
  return (
    <IllustratedMessage>
      <NotFound />
      <Heading level={2}>Error 404: Page not found</Heading>
      <Content>This page is not available. Try checking the URL or visit a different page.</Content>
    </IllustratedMessage>
  )
}

export default NoPage
