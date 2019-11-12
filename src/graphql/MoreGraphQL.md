# More GraphQL

### FileInput
```
  input FileInput {
    branch: String
    path: String
    repo: String
  }
```

### FileOutput
```
type FileOutput {
    """ File data from GitHub"""
    name: String
    contents: String
    size: Int
    branch: String
    type: String
    encoding: String
}
```

