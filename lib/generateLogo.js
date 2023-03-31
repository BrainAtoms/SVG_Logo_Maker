const Shape = require("./shapes.js")


function generateLogo(data) {
    if (data.shape === "circle") {
        const newLogo = new Shape.Circle(data.shapecolor, data.characters, data.textcolor)
        return newLogo.drawShape();
}
    else if (data.shape === "square") {
    const newLogo = new Shape.Square(data.shapecolor, data.characters, data.textcolor)
    return newLogo.drawShape();
    }
    else if (data.shape === "triangle") {
        const newLogo = new Shape.Triangle(data.shapecolor, data.characters, data.textcolor)
        return newLogo.drawShape();
    }
}

module.exports = generateLogo;