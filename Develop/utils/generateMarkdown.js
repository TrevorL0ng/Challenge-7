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

      

`;
}

module.exports = generateMarkdown;
