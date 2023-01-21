// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// @todo: jsdoc/require-jsdoc
export async function postData(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
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
