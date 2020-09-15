const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const markdown = require("./utils/generateMarkdown");


const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser (){
    return inquirer.prompt ([
{
    message: "What is your Github username?",
    name: "userName"
},
{
    message: "What is the title of the project?",
    name: "title"
},
{
    message: "Please provide a table of content",
    name: "table of content"
},
{
    message: "What is the installation process?",
    name: "installation"
},
{
    message: "How will this project be used?",
    name: "usage"
},
{
    message: "What licenses are required with this project?",
    name: "licenses"
},
{
    message: "Who are the contributors to this project?",
    name: "contribution"
},
{
    message: "What is the test process for this project?",
    name: "test"
},
{
    message: "What is your Github address?",
    name: "github"
}
]);
}
function generateHTML(answers) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">${answers.title}</h1>
      <ul class="list-group>
      <li class="list-group-item">Table of Contents</li>
      <li class="list-group-item">Installation</li>
        <li class="list-group-item">Usage</li>
        <li class="list-group-item">Contribution</li>
        <li class="list-group-item">License</li>
        <li class="list-group-item">Test</li>
      </ul>
      <p class="lead">Installation: ${answers.installation}</p>
      <p class="lead">Usage: ${answers.usage}</p>
      <p class="lead">Credits: ${answers.contribution}</p>
      <p class="lead">License: ${answers.license}</p>
      <p class="lead">Tests: ${answers.test}</p>
      <h3>Contact <span class="badge badge-secondary">Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub address is ${answers.github}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
  }
  

promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });


// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {
//     inquirer.prompt(questions)
//     .then((inquirerResponse, data) => {
//         console.log("Making READMe");
//         fs.writeFileSync("ReadME.md", inquirerResponse, data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }

// // function call to initialize program
// init();

// const userName = questions.userName

// axios.get(`https://api.github.com/users/${userName}`)
// .then(questions => {
//     console.log(questions.data);
// });
