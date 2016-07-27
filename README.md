
# Explanations 

## Terminology 

**typings** - is a way of porting code from none typescript to typescript. it adds type definitions to existing code
 This is how you are able to use with type safety the regular node libraries
 
**typings (the app)** - is the package manager (like npm). it was previously known as tsd.

 
 

## installing typings for node

once you run

```
typings install dt~node --save --global
```

now you can simply run 

```
typings install 
```

the dependencies are kept in typings.json


tasks

 - [x] try typescript-node
 - [ ] try typescript-require
 - [ ] write code that will import other code
 - [ ] import nodejs libraries
 - [ ] write frontend example as well
 - [ ] add linter 
 - [ ] add tests
