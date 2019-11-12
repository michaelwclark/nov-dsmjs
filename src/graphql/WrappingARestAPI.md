# Wrapping a RESTful API with GraphQL

## Current endpoint

Running ```curl http://localhost:8181/gitFile/package.js```

Returns
```
{
  "name": "nov-dsmjs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "@babel/core": "^7.0.0-rc.1",
    "@babel/node": "^7.0.0-rc.1",
    "@babel/plugin-proposal-export-default-from": "^7.0.0-rc.1",
    "@babel/plugin-proposal-function-bind": "^7.0.0-rc.1",
    "@babel/plugin-proposal-object-rest-spread": "^7.0.0-rc.1",
    "@babel/plugin-proposal-optional-chaining": "^7.0.0-rc.1",
    "@babel/plugin-syntax-dynamic-import": "^7.2.0",
    "@babel/plugin-transform-runtime": "^7.0.0-rc.1",
    "@babel/preset-env": "^7.0.0-rc.1",
    "@babel/runtime": "^7.0.0-rc.1",
    "babel-core": "^7.0.0-0",
    "babel-jest": "^24.5.0",
    "babel-loader": "^8.0.0-beta",
    "babel-plugin-dynamic-import-node": "^2.2.0",
    "babel-plugin-root-import": "^6.1.0",
    "body-parser": "^1.18.3",
    "express": "^4.16.4",
    "express-graphql": "^0.8.0",
    "graphql": "^14.5.8",
    "node-fetch": "^2.6.0",
    "nodemon": "^1.18.7",
    "request": "^2.88.0",
    "superagent": "^5.0.5"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon --exec babel-node ./src/server.js"
  },
  "author": "",
  "license": "ISC"
}
```

Which is just a blob of the the file content. It's not exactly clear what the shape of the data is before we get it back. With GraphQL, we start by defining the Schema, starting with the simple output type.

```
type FileOutput {
    """ Response from GitHub """
    name: String
    contents: String
}
```

Now the input
```
input FileInput {
    """ File Specifics """
    branch: String
    path: String
    repo: String
}
```

Now we have the input and output strictly defined, but we still can't query with it since we need to add the query type.
```
  type Query {
    """
    Retrieves a file and its metadata from GitHub
    """
    File(FileInput: FileInput): FileOutput
  }
```

By now, our file should look like this:

```
type FileOutput {
    """ Response from GitHub """
    name: String
    contents: String
}

input FileInput {
    """ File Specifics """
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
```

Next