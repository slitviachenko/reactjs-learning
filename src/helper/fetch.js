'use strict'

import _ from 'underscore'

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// @todo: jsdoc/require-jsdoc
export async function postData(url, data, jwtToken = null, headers = {}) {
  if (jwtToken !== null) {
    headers['Authorization'] = `Bearer ${jwtToken}`
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(data)
  })

  // @todo: describe the response object structure
  if (response.ok) {
    return await response.json()
  } else {
    const error = await response.json()
    throw new Error(error['message'])
  }
}

// @todo: jsdoc/require-jsdoc
export async function getData(url, queryParams = {}, jwtToken = null, headers = {}) {
  if (!_.isEmpty(queryParams)) {
    url += '?' + new URLSearchParams(queryParams)
  }
  if (jwtToken !== null) {
    headers['Authorization'] = `Bearer ${jwtToken}`
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  })

  // @todo: describe the response object structure
  if (response.ok) {
    return await response.json()
  } else {
    const error = await response.json()
    throw new Error(error['message'])
  }
}
