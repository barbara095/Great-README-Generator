const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What do you want the title of your project to be?"
      },
      {
        type: "input",
        name: "description",
        message: "Please enter a description of your project"
      },
      {
        type: "input",
        name: "installation", 
        message: "How do you want to install your application?"
      },
      {
        type: "input",
        name: "usage",
        message: "How do you want to use your application?"
      },
      {
        type: "checkbox",
        name: "license",
        message: "What type of license do you wish to use in your application?",
        choices: [
            "MIT",
            "Apache-2.0",
            "GNU-General-Public-License-v2.0",
            "GNU-General-Public-License-v3.0",
            "ISC",
            "Eclipse-Public-License 1.0",
            "Microsoft-Public-License",
            "Open-Software-License-3.0"
        ],
      },
      {
        type: "input",
        name: "contributing",
        message: "What are the rules/guidelines in contributing to this project?"
      },
      {
        type: "input",
        name: "test",
        message: "please enter test instructions"
      },
      {
        type: "input",
        name: "question1",
        message: "Please enter your Github username"
      },
      { type: "input",
        name: "question2",
        message: "Please enter your email address",
      },
    ]);
   
  }

  // Function to generate the READ ME file
  function generateREADME(responses) {
    return `
# ${responses.title}

[![${responses.license}](https://img.shields.io/badge/License-${responses.license}-blue.svg)]

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Test](#test)
- [Question 1](#question1)
- [Question 2](#question2)

## Description 
* ${responses.description}

## Installation 
* ${responses.installation}

## Usage
* ${responses.usage}

## License 
* This application is licensed under ${responses.license}. 
* For more information about this license, click here: (https://opensource.org/licenses/${responses.license})

## Contributing
* ${responses.contributing}
* For a general set of contribution guidelines, click here: [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)

## Test
* ${responses.test}

## Questions
* Github profile: https://github.com/${responses.question1}
* If you have any questions, feel free to email me at ${responses.question2}

`;
  }

// Call promptUser function, then add user's responses to newly written md file. Alert of success
promptUser()
    .then(function(responses) {
        const md = generateREADME(responses);
        return writeFileAsync("./Generated/README.md", md); 
    })
    .then(function() {
        console.log("Successfully created a README.md for this project");
    })
    .catch(function(err) {
        console.log(err);
    })

