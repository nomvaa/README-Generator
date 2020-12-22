const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
{
    message: "What is the title of the project?",
    name: "title"
},
{
    message: "Please provide the description of your project",
    name: "description"
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
    name: "tests"
},
{
    message: "What is your email?",
    name: "email"
},
{
    message: "What is your Github address?",
    name: "github"
}
];


function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    }
    console.log("README.md generated")
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const response = generateMarkdown(answers);
    console.log(answers);

    writeToFile("README.md", response);
  })
}

//function call to initialize
init();