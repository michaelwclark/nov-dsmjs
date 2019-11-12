import express from 'express'
import bodyParser from 'body-parser'
// import graphqlHTTP from 'express-graphql'
// import { graphqlRoot } from './data/graphQLRoot'
// import { graphqlSchema } from './data/GraphQLSchema'
import { getGetFile } from './getGitFile'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const getFileHandler = async (req, res) => {
  const fileName = req.params.name || "package.json"
  console.log({fileName})
  const response = await getGetFile(fileName)
  const data = Buffer.from(response.content, 'base64')
  const decodedFile = data.toString('ascii')
  const result = { file: decodedFile, name: response.name }
  console.log(JSON.stringify(result, null, 3))
  res.send(result.file)
}
  
app.get('/getFile/:name', getFileHandler) 

app.listen(8181, () => console.log("listening at port 8181"))
// getFileHandler({send:x=>console.log})
