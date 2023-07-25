const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  { type: 'input', name: 'title', message: 'What is your project title?' },
  { type: 'input', name: 'description', message: 'Enter a description for your project:' },
  { type: 'input', name: 'installation', message: 'Enter installation instructions:' },
  { type: 'input', name: 'usage', message: 'Enter usage information:' },
  { type: 'input', name: 'contributing', message: 'Enter contribution guidelines:' },
  { type: 'input', name: 'tests', message: 'Enter test instructions:' },
  { type: 'list', name: 'license', message: 'Choose a license:', choices: ['MIT', 'GPL', 'Apache', 'No License'] },
  { type: 'input', name: 'username', message: 'Enter your GitHub username:' },
  { type: 'input', name: 'email', message: 'Enter your email address:' },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
  });
}

init();
