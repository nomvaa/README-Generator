// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  # Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Licenses](#licenses)
  -[Contribution](#contribution)
  -[Test](#test)
  -[Username](#username)

## Description:
${response.description}

## Installation:  
${response.installation}

# Usage:  
${response.usage}

# Licenses:  
${response.licenses}

# Contribution  
${response.contribution}

## Test:  
${response.tests}

# Email:  
${response.email}

  `;
  }
  
  module.exports = generateMarkdown;