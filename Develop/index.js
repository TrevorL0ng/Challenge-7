// Required modules. Neat.
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// Array of questions for the user to generate the readme with. Much input. Wow.
const questions = [
    {
        type:"input",
        name:"title",
        message:"Please enter a title for your project"
    },
    {
        type:"input",
        name:"description",
        message:"Please enter a description of your project"
    },
    {
        type:"input",
        name:"install",
        message:"Please enter the installation instructions for your project"
    },
    {
        type:"input",
        name:"usage",
        message:"Please enter the usage information for your project"
    },
    {
        type:"input",
        name:"contribute",
        message:"Please enter any contribution guildelines for your Project"
    },
    {
        type:"input",
        name:"test",
        message:"Please enter testing instructions for your Project"
    },
    {
        type:"list",
        name:"license",
        message:"Please enter a title for your Project"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
