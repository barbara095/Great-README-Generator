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
        // Add options
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
            "GNU General Public License v2.0",
            "GNU General Public License v3.0",
            "ISC",
            "Eclipse Public License 1.0",
            "Microsoft Public License",
            "Open Software License 3.0"
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

  function generateREADME(responses) {
    return `
# ${responses.title}

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
* [![License](https://img.shields.io/badge/License-${responses.license}-blue.svg)(https://opensource.org/licenses/${responses.license})]

## Contributing
* ${responses.contributing}

## Test
* ${responses.test}

## Questions
* Github profile: https://github.com/${responses.question1}
* If you have any questions, feel free to email me at ${responses.question2}

`;
  }

promptUser()
    .then(function(responses) {
        const md = generateREADME(responses);
        return writeFileAsync("README.md", md); 
    })
    .then(function() {
        console.log("Successfully created README.md");
    })
    .catch(function(err) {
        console.log(err);
    })

// // Append title
// fs.appendFileAsync("README.md", `("## " + ${responses.title})` + '\n', function(err) {
//     if (err) {
//         return console.log(err);
//     } 
//         console.log ("Success!");
// });
// // Append description
// fs.appendFileAsync("README.md", `("## " + ${responses.description})` + '\n', function(err) {
//     if (err) {
//         return console.log(err);
//     } 
//         console.log ("Success!");
// });
// // Append installation
// fs.appendFileAsync("README.md", `("## " + ${responses.installation})` + '\n', function(err) {
//     if (err) {
//         return console.log(err);
//     } 
//         console.log ("Success!");
// });
// // Append usage
// fs.appendFileAsync("README.md", ("## " + `${responses.usage}`) + '\n', function(err) {
//     if (err) {
//         return console.log(err);
//     } 
//         console.log ("Success!");
// });
// // Append usage
// fs.appendFileAsync("README.md", ("## " + `${responses.usage}`) + '\n', function(err) {
//     if (err) {
//         return console.log(err);
//     } 
//         console.log ("Success!");
// });
// // Append license
// fs.appendFileAsync("README.md", ("## " + `${responses.license}`) + '\n', function(err) {
//     if (err) {
//         return console.log(err);
//     } 
//         console.log ("Success!");
// });
// // Append contributing
// fs.appendFileAsync("README.md", ("## " + `${responses.contributing}`) + '\n', function(err) {
//     if (err) {
//         return console.log(err);
//     } 
//         console.log ("Success!");
// });
// // Append test
// fs.appendFileAsync("README.md", ("## " + `${responses.test}`) + '\n', function(err) {
//     if (err) {
//         return console.log(err);
//     } 
//         console.log ("Success!");
// });
// // Append Question 1
// fs.appendFileAsync("README.md", ("## " + `${responses.question1}`) + '\n', function(err) {
//     if (err) {
//         return console.log(err);
//     } 
//         console.log ("Success!");
// });
// // Append Question 2
// fs.appendFileAsync("README.md", ("## " + `${responses.question2}`) + '\n', function(err) {
//     if (err) {
//         return console.log(err);
//     } 
//         console.log ("Success!");
// });



    