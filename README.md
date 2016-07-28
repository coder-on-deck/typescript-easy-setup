
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


## Debugging 

 - run `npm run compile`
 - tell intellij to run the relevant `js` file under folder `dist`
 - put breakpoint on the relevant `tsc` file
 
* This also works for frontend


tasks

 - [x] try typescript-node
 - [x] write code that will import other code
 - [x] import nodejs libraries
 - [x] write frontend example as well
 - [x] be able to debug backend code
 - [x] be able to debug frontend code
 - [x] add linter 
 - [x] add tests
