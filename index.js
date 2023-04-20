const questions = require('inquirer');
const fs = require('fs');

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
    return `
    # ${response.title}
  
    ${renderLicenseSection(response.license)}
  
    ## Description 
    ${response.description}
  
    ## Table of Contents (Optional) 
    ${response.contents}
  
    ## Installation 
    ${response.installation}
  
    ## Usage 
    ${response.usage}
  
    ## Credits 
    ${response.credits}
  
    ## License 
    ${response.license}`
  };

questions
    .prompt([
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
            name: 'license',
            message: 'License Information',
        },
        {
            type: 'input',
            name: 'status',
            message: 'Project Status',
        },
    ])


    // TODO: Create a function to write README file
    .then((response) => {
        console.log(response);
        writeToFile('README2.md', response)
    })

function writeToFile(fileName, response) {
    fs.writeFile(fileName, JSON.stringify(response), null, (error) => {
    error ? console.error(error) : console.log('Great, thank you!')
    })   
}

// TODO: Create a function to initialize app
function init() {
    questions.prompt(questions)
    .then((response) => {
        console.log(response);
        const markdownData = generateMarkdown(response);
        writeToFile('README2.md', markdownData)
    })
}

// Function call to initialize app
init();