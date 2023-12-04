// Template for README
`# TITLE

# LISENCE

# DESCRIPTION

# TABLE OF CONTENTS

# INSTALLATION

# USAGE

# CONTRIBUTION

# TESTS

# QUESTIONS`
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What installation instructions does the user need?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What usage information does the user need?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed to this project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What test insturctions does the user need?',
        },
        {
            type: 'list',
            name: 'license',
            options: ['MIT license', '']
        }
    ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
