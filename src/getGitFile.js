import fetch from 'node-fetch'
// "env": "GIT_API_TOKEN=c715cb3e491994ecac8fbfe90281516df4be3065"

export const getGitFile = async (branch = 'master', path = 'package.json', repo = 'nov-dsmjs') => {
  console.log('branch: ',branch)
  console.log("getGitFile!!!")
  const uri = `https://api.github.com/repos/michaelwclark/${repo}/contents/${path}`
  const response = await fetch(uri, {
    method: 'GET',
    headers: {
      // 'Authorization': `token ${process.env.GIT_API_TOKEN}`,
      'Authorization': 'token c715cb3e491994ecac8fbfe90281516df4be3065',
      'Accept': 'application/json'
    },
  })
  
  const body = await response.json()
  console.log(JSON.stringify(body, null, 3))
  return body
}
