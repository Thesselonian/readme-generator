// pull file system module
const fs = require('fs');
// const { reject } = require('lodash');

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

generateMarkdown = (data) => {
    const { name, description, screenshot, runApplication, liveLink, badge, technologies} = data;
    return `${badge}


# ${name}

${description}


## Table of Contents

* [Installation](#installation)

* [Screenshot](#screenshot)


## Installation

${runApplication}


## Technologies Used

${technologies}


## Screenshot of Generated Document

![Generated Readme Screenshot](${screenshot} "Generated Readme Screenshot")

${generateLiveLink(liveLink)}


## Questions

Direct any questions to ${email} or you can look at my ${github}.
    `
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