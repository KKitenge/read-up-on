// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}



const questions = require('inquirer');
const fs = require('fs');

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

    const string = 
    `# ${response.title}
    
    ## ${response.description}
    
    ## ${response.contents}
    
    ## ${response.installation}
    
    ## ${response.usage}
    
    ## ${response.credits}
    
    ## ${response.license}`
}


// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();