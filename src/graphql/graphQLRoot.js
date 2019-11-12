import {getGitFile} from '../getGitFile'

const helloWorld = name => {  
  if(name) {
    return {
      name: `Hello, ${name}`
    }
  }
  return {
    name: 'Hello, world'
  }
}


export const FileResolver = async (args) => {
  const { FileInput } = args
  let branch, path
  if(FileInput) {
    branch = FileInput.branch
    path = FileInput.path
  }
  const gitFile = await getGitFile(branch, path)
  const data = Buffer.from(gitFile.content, 'base64')
  const decodedFile = data.toString('ascii')
  return {
    name: gitFile.name,
    contents: decodedFile,
  }
}


export const graphqlRoot = {
    HelloWorld: (args, context) => {
      return helloWorld(args.name)
    },
    File: (args, context) => {
      return FileResolver(args)
    }
}