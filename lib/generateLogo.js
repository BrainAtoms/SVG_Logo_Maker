const Shape = require("./shapes.js");
let CSS_COLORS = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];
const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i; 



function generateLogo(data) {
    if (data.characters.length > 3) {
        throw new Error('characters must be no more than 3 characters!')
    } 
    if (!data.shapecolor) {
        throw new Error('must enter an actual shape color!')
    } 
    if (!data.textcolor) {
        throw new Error('must enter an actual text color!')
    }
    if (!CSS_COLORS.includes(data.textcolor)){
      if  (!hexRegex.test(data.textcolor))  {
        throw new Error('that text color does not exist')
      }
    }
    if (!CSS_COLORS.includes(data.shapecolor)){
        if  (!hexRegex.test(data.shapecolor))  {
            throw new Error('that shape color does not exist')
          }
    }
  if (data.shape === "circle") {
    const newLogo = new Shape.Circle(
      data.shapecolor,
      data.characters,
      data.textcolor
    );
    return newLogo.drawShape();
  } else if (data.shape === "square") {
    const newLogo = new Shape.Square(
      data.shapecolor,
      data.characters,
      data.textcolor
    );
    return newLogo.drawShape();
  } else if (data.shape === "triangle") {
    const newLogo = new Shape.Triangle(
      data.shapecolor,
      data.characters,
      data.textcolor
    );
    return newLogo.drawShape();
  }
}

module.exports = generateLogo;
