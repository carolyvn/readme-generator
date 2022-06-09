// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (data.license === 'MIT') {
//     return '(https://img.shields.io/npm/l/express)';
//   } else if (license === 'Apache') {
//     return '(https://img.shields.io/aur/license/android-studio)';
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#lincense)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

  ## Questions
  If you have any questions, please contact me at: 
  - GitHub: [@${data.username}](https://github.com/${data.username})
  - Email: [@email me](${data.email})


`;
}

module.exports = generateMarkdown;
