// packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./Develop/utils/generateMarkdown.js");

// prompts for user input
const isRequired = (input) => {
    if (input) {
      return true;
    } else {
      return `An input is required!`;
    }
  };

  const prompts = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? (Required)",
      validate: isRequired,
    },
    {
      type: "input",
      name: "link",
      message: "Paste the link to your deployed Application!",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of the project! (Required)",
      validate: isRequired,
    },
    {
      type: "input",
      name: "installation",
      message: "Provide installation instructions (if applicable)",
    },
    {
      type: "input",
      name: "contributing",
      message: "What are the contribution guidelines for your project?",
    },
    {
      type: "checkbox",
      name: "licenses",
      message: "Choose the license(s) for this application: (Min 1 required)",
      choices: ["MIT", "GNU", "APACHE", "None"],
      validate: (choicePicked) => {
        if (choicePicked.length > 0) {
          return true;
        } else {
          return `At least one license is required!`;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message:
        "Provide an email address for users to contact you! (Required)",
      validate: isRequired,
    },
  ];

const promptUser = () => {
    return inquirer.prompt(prompts);
  };

// TODO: function to write README file
const writeToFile = (generatedMarkdown) => {
    return new Promise((resolve, reject) => {
      fs.writeFile("./develop/dist/README.md", generatedMarkdown, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
            ok: true,
            message: "File created!",
          });
        });
      });
    };

// function to initialize app
const init = () => {
    promptUser()
      .then((answers) => {
        return generateMarkdown(answers);
      })
      .then((markdown) => {
        return writeToFile(markdown);
      })
      .catch((err) => {
        console.log(err);
      });
  };

// Function call to initialize app
init();
