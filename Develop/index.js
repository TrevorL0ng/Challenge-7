// Required modules. Neat.
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");


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
        message:"Please choose the licensing for your Project",
        choices:[   
            "None",
            "Apache2.0",
            "Boost Software 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public 2.0",
            "GNU Affero General Public v3.0",
            "GNU General Public v2.0",
            "GNU Lesser General Public v2.1",
            "GNU Public v3.0",
            "MIT",
            "Mozilla Public 2.0",
            "Unilicense"]
    },
    {
        type:"input",
        name:"username",
        message:"Please enter your Github username"
    },
    {
        type:"input",
        name:"email",
        message:"Please enter your email address"
    }
];

// Record the input to the readme. Cant think of a joke. Path is pretty nice though
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);
    fs.writeFile(__filename.base, markdown, function(err) {
        if (err) throw (err);
        console.log("Your README has successfully been generated!")
    });
}

// Function that actually does the work. All setup for this and the init below it. Godspeed.
function init() {
    inquirer.prompt(questions).then(function(data){
        writeToFile(__filename.base, data);
    })
}

// Function call to initialize app
init();
