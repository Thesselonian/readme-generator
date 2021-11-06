// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const renderLicenseBadge = require('./utils/generateLicenseBadge');
const generateMarkdownFile = require('./utils/generateMarkdownFile');

// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter a name for your project!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'description',
            message: 'Enter a short description for your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('Please enter a short description for your project!')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'screenshot',
            message: 'Enter the relative pathway to a screenshot of your application (using the README.md in root directory)'
        },

        {
            type: 'input',
            name: 'runApplication',
            message: 'Enter the command prompt to start the application locally'
        },

        {
            type: 'input',
            name: 'liveLink',
            message: 'Enter a link to the deployed application. If unavailable simply leave empty.'
        },

        {
            type: 'list',
            name: 'license',
            Message: 'Choose the type of license you would like to have on this project.',
            choices: [
                'MIT',
                'Apache',
                'ISC'
            ]
            
        },

        {
            type: 'input',
            name: 'technologies',
            message: 'Enter one of the technologies that you used to develop this project.'
        },

        {
            type: 'confirm',
            name: 'confirmAddTechnologies',
            message: 'Would you like to enter another technology?',
            default: false
        }
    ])
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

promptUser()
    .then((data) =>{
        console.log('index.js data: ', data);
        renderLicenseBadge(data);
    })
    .then((data) =>{
        generateMarkdownFile(data);
    })




    // 3) What was the motivation for this project?
    // 4) Provide a link to the GitHub repository.
    // 5) 