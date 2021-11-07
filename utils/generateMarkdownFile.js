// pull file system module
const fs = require('fs');
const { reject } = require('lodash');

generateMarkdown = (data) => {
    const { name, description, screenshot, runApplication, liveLink, badge, technologies} = data;
    return `
# ${name}
${description}
## Installation
${runApplication}
## Technologies Used
${technologies}
## Screenshot of Generated Document
![Weather App Screenshot](${screenshot} "Weather App Screenshot")
${generateLiveLink(liveLink)}
${badge}
    `
}

generateLiveLink = liveLink => {
    if (!liveLink) {
        return '';
    }
    else {
        return `
## Link to Live URL
${liveLink}
        `

    }
}
generateReadme = markDown => {
    fs.writeFile('./dist/readme.md', markDown, err => {
        if (err) {
            reject(err);
            return;
        }
    })
}

module.exports = {generateMarkdown, generateReadme};