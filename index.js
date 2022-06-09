// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of the project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe any installation needed for the project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the project usage for?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any contributor for the project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license for the project.',
        choices: [
            'Apache',
            'GNU',
            'ISC',
            'MIT',
            'Mozilla',
            'Open'
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your have successfully created README.md!')
        }
    });
};

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {
        const data = await inquirer.prompt(questions);
        await writeFileAsync('./dist/README.md', generateMarkdown(data));
        console.log('README.md successfully created!')
    } catch(err) {
        console.log(err);
    }
};

// Function call to initialize app
init();




