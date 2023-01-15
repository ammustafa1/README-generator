function generateMarkdown(answers) {
  const {
    title,
    link,
    description,
    installation,
    license,
    email,
  } = answers;
  return `# ${title}

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
  ${license}
  ## Questions
  Reach out to me through Email for any questions or concerns:
  ${email}
`;
}

module.exports = generateMarkdown;