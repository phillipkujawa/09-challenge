function renderLicenseBadge(license) {
    if (license !== 'No License') {
      return `![License](https://img.shields.io/badge/license-${license}-blue)`;
    }
    return '';
  }
  
  function renderLicenseLink(license) {
    if (license !== 'No License') {
      return `(https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
    }
    return '';
  }
  
  function renderLicenseSection(license) {
    if (license !== 'No License') {
      return `## License
  This application is covered under the [${license}]${renderLicenseLink(license)} license.`;
    }
    return '';
  }
  
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For more information, check out my GitHub profile: [${data.username}](https://github.com/${data.username})
  
  If you have any additional questions, please send an email to: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
  