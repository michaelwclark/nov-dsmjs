import { buildSchema } from 'graphql'

export const graphqlSchema = buildSchema(`
""" Response from GitHub """
type FileOutput {
  name: String
  contents: String
}

""" How we can define an input """
input FileInput {
  branch: String
  path: String
  repo: String
}

type Query {
  """
  Retrieves a file and its metadata from GitHub
  """
  File(FileInput: FileInput): FileOutput
}
`)

