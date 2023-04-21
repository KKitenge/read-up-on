const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path') //a built in method, platform path.

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// A short list of 4
//case sensitive
function renderLicenseBadge(license) { 
    if (license === 'MIT') {
        return `https://shields.io/badge/license-MIT-green`//link to direct MIT logo
    }   else if (license === 'Apache') {

        return `https://shields.io/badge/license-Apache-blue`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
    return `
#  ${response.title}   
  
    ${renderLicenseBadge(response.license)}
  
## Description 
    ${response.description}
  
## Table of Contents (Optional) 
    ${response.contents}
- * [Installation](#installation)
- * [Usage](#usage)
- * [Credits](#credits)
- * [License](#license)
  
## Installation 
    ${response.installation}
  
## Usage 
    ${response.usage}
  
## Credits 
    ${response.credits}
  
## License 
    ${response.license}`
  };

const questions =
    [
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description?',
        },
        {
            type: 'input',
            name: 'contents',
            message: 'What are the Table of Contents? (Optional)',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps needed to install?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the instructions for use?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'An area to list tech, collaborators, 3rd party assets.',
        },
        {
            type: 'checkbox', //type list, to give choices
            name: 'license',
            message: 'Which license are you using?',
            choices: [
                'MIT', 'Apache', 'Mozilla', 'Eclipse',
            ],
        },
        {
            type: 'list', 
            name: 'status',
            message: 'Project Status',
        },
    ]

// TODO: Create a function to write README file
// .then((response) => {
//     console.log(response);
//     writeToFile('README2.md', response)
// })

function writeToFile(fileName, response) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), response);
  }
    

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating README...');
      writeToFile('README2.md', generateMarkdown({ ...inquirerResponses }));
    });
  }
  

// Function call to initialize app
init();