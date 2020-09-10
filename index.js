const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const markdown = require(".utils/generateMarkdown");


// array of questions for user
const questions = [ 
{
    message: "What is the title of the project?",
    name: "title"
},
{
    message: "Please provide a table of content",
    name: "table of content"
},
{
    message: "What is your Github username?",
    name: "userName"
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
    message: "What is your Github email address?",
    name: "email"
}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {
        console.log("Making READMe");
        fs.writeFileSync("ReadME.md", inquirerResponse, data);
    })
    .catch((err) => {
        console.log(err);
    })
}

// function call to initialize program
init();

const userName = questions.userName

axios.get(`https://api.github.com/users/${userName}`)
.then(questions => {
    console.log(questions.data);
});