function generateMarkdown(data) {
  return `# ${data.title}
    # Description
    ${data.description}

    ##Table of Contents
      [Installation](#install)
      [Usage](#usage)
      [Contribution](#contribute)
      [Tests](#test)
      [License](#license)
      [Questions](#reach)

      ##Installation
      ${data.install}

      ##Usage
      ${data.usage}

      ##Contributions
      ${data.contribute}

      ##Tests
      ${data.test}

      ##License
      ${data.license}

      ##Questions

      **Github:** ${data.username}
      **Email:** ${data.email}

`;
}

module.exports = generateMarkdown;
