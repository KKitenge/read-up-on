const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path') //a built in method, platform path.

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// A short list of 4
//case sensitive
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license === 'Apache') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === 'Mozilla') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    } else if ( license === 'Eclipse') {
        return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    } else if(license === 'None') {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'None') {
        return "";
    } else {
        return `* [License](#license)`;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {  
    if (license === 'None') {
        return ""; 
    }  else {
        return `## License 🖋️
        ${license}`
    }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
    return `
#  ${response.title}   
  
${renderLicenseBadge(response.license)}
  
## Description 📖
    ${response.description}
  
## Table of Contents 📜  
    ${response.contents}
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contributors](#contibutors)
${renderLicenseLink(response.license)}
  
## Installation 💾
    ${response.installation}
  
## Usage 💻
    ${response.usage}
  
## Credits 🎞️
    ${response.credits}

## Contributors 👯
    ${response.contributors}

## Status
    ${response.status}
  
${renderLicenseSection(response.license)}`
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
            type: 'input',
            name: 'contributors',
            message: 'Contributors',
        },
        {
            type: 'list', //type list, to give choices
            name: 'license',
            message: 'Which license are you using?',
            choices: ['MIT', 'Apache', 'Mozilla', 'Eclipse', 'None'],
        },
        {
            type: 'input',
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