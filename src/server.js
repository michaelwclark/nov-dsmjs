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
  const response = await getGetFile()
  const data = Buffer.from(response.content, 'base64')
  const contents = data.toString('ascii')
  req.send(contents)
}
  
app.get('/getFile', getFileHandler) 

app.listen(8181, () => console.log("listening at port 8181"))


// getGetFile() //?
getFileHandler({send: console.log})
