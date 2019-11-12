import express from 'express'
import bodyParser from 'body-parser'

import { getGitFile } from './getGitFile'
import graphqlHTTP from 'express-graphql' 
import { graphqlRoot } from './graphql/graphQLRoot'
import { graphqlSchema } from './graphql/GraphQLSchema'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const getGitFileHandler = async (req, res) => {
  const fileName = req.params.name || "package.json"
  console.log({fileName})
  const response = await getGitFile(fileName)
  const data = Buffer.from(response.content, 'base64')
  const decodedFile = data.toString('ascii')
  const result = { file: decodedFile, name: response.name }
  console.log(JSON.stringify(result, null, 3))
  res.send(result.file)
}
  
app.get('/gitFile/:name', getGitFileHandler) 
app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlRoot,
  graphiql: true,
}))

app.listen(8181, () => console.log("listening at port 8181"))
// getFileHandler({send:x=>console.log})
