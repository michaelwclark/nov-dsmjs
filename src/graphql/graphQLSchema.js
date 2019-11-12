import { buildSchema } from 'graphql'

export const graphqlSchema = buildSchema(`
  type FileOutput {
    """ get a file from a github repo """
    name: String
    contents: String
  }
  type Message {
    """ return a nice message """
    name: String
  }
  type Query {
    """
    Get the contents of a message
    """
    HelloWorld(name: String): Message
    getFile(name: String): FileOutput
  }
  `)

