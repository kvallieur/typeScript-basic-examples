# TypeScript-basic-examples
- Typescript is a superset of javascript. It has matured a lot since its inception. 
- It helps a developer to write clean javscript code
- In addition to javascript typescript has some additional features like Enums, Tuples, Types, etc.

## Types: 
- similar to Java where method args can be declared with datatypes TS allows the same feature
- Implicit typing is allowed. TS assumes based on the code and does the implicit typing

Typescript is like a developer tool that notifies the developer about code smells
End of the day - TS transpiles the ts file into javascript file

# how to transpile and run
```sh 
$ tsc XXXX.ts
```  
compiles and generates the js file
```sh
$ node XXXX.js 
``` 
executes the compiled js file

```sh 
$ tsc XXXX.ts --watch 
```
will automatically compile the changes when a file is modified
