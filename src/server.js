import express from 'express'
import bodyParser from 'body-parser'
// import graphqlHTTP from 'express-graphql'
// import { graphqlRoot } from './data/graphQLRoot'
// import { graphqlSchema } from './data/GraphQLSchema'


const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlRoot,
  graphiql: true,
  context: db
}))

app.listen(8080, () => console.log("listening at port 8080"))
