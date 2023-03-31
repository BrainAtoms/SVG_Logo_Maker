class Shape {
    constructor(color, characters, textcolor) {
        this.color = color;
        this.characters = characters;
        this.textcolor = textcolor;
    }
}

class Triangle extends Shape{
    drawShape = function() {
        return (` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -20 100 170">
        <polygon points="50 15, 100 100, 0 100" fill="${this.color}"/>
            <text x="35" y="75" class="small" fill="${this.textcolor}">${this.characters}</text>
    </svg>`)
    }
}


class Circle extends Shape{
    drawShape = function() {
    return (`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="30" fill="${this.color}"/>
    <text x="36" y="53" class="small" fill="${this.textcolor}">${this.characters}</text>
  </svg>`)
    }
}

class Square extends Shape{
    drawShape = function() {
        return (`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" width="50" height="50" fill="${this.color}"/>
        <text x="41" y="59" class="small" fill="${this.textcolor}">${this.characters}</text>
      </svg>`)
    }
}

module.exports = {
    Circle: Circle, 
    Square: Square,
    Triangle: Triangle
}