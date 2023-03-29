function generateLogo(data) {
    return `Your logo will have ${data.characters} as its text, ${data.textcolor} as its text color, ${data.shape} as its shape and ${data.shapecolor} as its shape color.`
}

module.exports = generateLogo;