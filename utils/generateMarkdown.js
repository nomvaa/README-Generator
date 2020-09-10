// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[licenses](#licenses)
  -[contribution](#contribution)
  -[test](#test)
  -[username](#username)
  
  ${response.username}
  ##username:
  
      ${response.description}
  ##description:
  
      ${response.installation}
  ##installation:
  
      ${response.usage}
  ##usage:
  
      ${response.licenses}
  ##licenses:
  
      ${response.contribution}
  ##contribution:
  
      ${response.test}
  ##test:
  
      ${response.email}
  ##email:

  `;
  }
  
  module.exports = generateMarkdown;