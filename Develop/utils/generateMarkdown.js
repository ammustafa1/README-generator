
function renderLicenseBadge(license) {
  const badges = {
    "MIT License": "https://img.shields.io/badge/License-MIT-yellow.svg",
    "GNU General Public License v3.0": "https://img.shields.io/badge/License-GPLv3-blue.svg",
    "Apache License": "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
  };
  if (!badges[license]) return "";
  return `![${license} Badge](${badges[license]})`;
}


function renderLicenseSection(license) {
  return (license === "None") ? 
    "There are no licenses associated with this project." : 

    `This project uses the following license: ${renderLicenseLink(license)}`;
}


function generateMarkdown(answers) {
  const {
    title,
    link,
    description,
    installation,
    license,
    github,
    email,
  } = answers;
  return `# ${title}
  ${renderLicenseBadge(license)}

  ##Link
  ${link}

  ## Description
  ${description}
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  
  [Questions](#questions)
  ## Installation
  ${installation}

  ## License
  ${renderLicenseSection(license)}
  ## Questions
  Reach out to me through Email for any questions or concerns:
  ${email}
`;
}

module.exports = generateMarkdown;