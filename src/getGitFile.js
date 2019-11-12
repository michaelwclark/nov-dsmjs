import fetch from 'node-fetch'

export const getGetFile = async (branch = 'master', path = 'package.json') => {
  const uri = `https://api.github.com/repos/michaelwclark/nov-dsmjs/contents/${path}`
  const response = await fetch(uri, {
    method: 'GET',
    headers: {
      'Authorization': 'token dc39e05f573465a507b195c26bdaeec925e508bf',
      'Accept': 'application/json'
    },
  })
  const body = await response.json()
  return body
}
