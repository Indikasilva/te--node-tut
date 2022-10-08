// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudu npm install -g <packageName> (mac)

// package.json - manifest file(stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// create a new repository on the command line
// echo "# code-test" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Indikasilva/code-test.git
// git push -u origin main

// or push an existing repository from the command line
// git remote add origin https://github.com/Indikasilva/code-test.git
// git branch -M main
// git push -u origin main

// git init
// git add .
// git commit -m "first commit"

// git remote add origin https://github.com/Indikasilva/code-test.git
// git branch -M main
// git push -u origin main

// Open PowerShell (Run As Administrator)
// Check the current execution policy using this command
// Get-ExecutionPolicy
// # You should get 'Restricted'

// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

const _ = require('lodash')
const items =[1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)
console.log('hello people')