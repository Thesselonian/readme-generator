// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const renderLicenseBadge = require('./utils/generateLicenseBadge');
const generateMarkdownFile = require('./utils/generateMarkdownFile');

// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt([
        // Name of the project
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

        // Description of the project
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

        // How to install the application
        {
            type: 'input',
            name: 'installation',
            message: 'Describe how to install the application'
        },

        // How the application is designed to be used
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how the application is designed to be used'
        },

        // license information
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

        // How to make contributions to the project
        {
            type: 'input',
            name: 'contributing',
            message: 'Describe how contributions can be made to the project'
        },

        // How to make tests for the app
        {
            type: 'input',
            name: 'tests',
            message: 'Describe how tests can be made for the application'
        },

        // Where to direct questions about the app
        {
            type: 'input',
            name: 'email',
            message: 'Enter an email address where questions can be sent'
        },

        // Name of github repository
        {
            type: 'input',
            name: 'github',
            message: 'Enter the name of the GitHub repository'
        },

        // Screenshot of readme generated by app
        {
            type: 'input',
            name: 'screenshot',
            message: 'Enter the relative pathway to a screenshot of your application (using the README.md in root directory)'
        },

        // Command for running application 
        {
            type: 'input',
            name: 'runApplication',
            message: 'Enter the command prompt to start the application locally'
        },

        // link to deployed application
        {
            type: 'input',
            name: 'liveLink',
            message: 'Enter a link to the deployed application. If unavailable simply leave empty.'
        },
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
        return renderLicenseBadge(data);
    })
    .then((data) =>{
        return generateMarkdown(data);;
    })
    .then(markdown => {
        generateReadme(markdown);
    })

    // 3) What was the motivation for this project?
    // 4) Provide a link to the GitHub repository.
    // 5) 