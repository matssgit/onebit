// package.json

// ...
"scripts": {
    "hello": "hello-world-npm"
	},
// ...

// package.json

// ...
"scripts": {
    "hello": "hello-world-npm",
    "start": "node index.js"
  },
// ...

// index.js

const hello = require('hello-world-npm')

console.log(hello())