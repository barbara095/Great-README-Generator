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
        type: "input",
        name: "license",
        message: "What type of license do you wish to use in your application?"
      },
      {
        type: "input",
        name: "contributing",
        message: "What are the rules/guidelines in contributing to this project?"
      },
      {
        type: "input",
        name: "test",
        message: "run a test"
      }
    ]);
   
  }

  function generateREADME(responses) {
    return `
    
    # ${responses.title}
    
    ## Description 
    * ${responses.description}

    ## Installation 
    * ${responses.installation}

    ## Usage
    * ${responses.usage}

    ## License 
    * ${responses.license}

    ## Contributing
    * ${responses.contributing}

    ## Test
    * ${responses.test}
    `;
  }

promptUser()
    .then(function(responses) {
        md = generateREADME(responses);

        return writeFileAsync("README.md", md);
    })
    .then(function() {
        console.log("Successfully created README.md");
    })
    .catch(function(err) {
        console.log(err);
    })