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

export const getFile = (name) => {
  return {
    name: 'YourMomsFile.mp4',
    contents: '<?php print_r("Hey Mike") ?>'
  }
}


export const graphqlRoot = {
    HelloWorld: (args, context) => {
      return helloWorld(args.name)
    },
    getFile: (args, context) => {
      return getFile(args.name)
    }
}