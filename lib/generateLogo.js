function generateLogo(data) {
    if (data.shape === "circle") {
    return (`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="30" fill="${data.shapecolor}"/>
  </svg>`)}
    else if (data.shape === "square") {
    return (`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="30" width="40" height="40" fill="${data.shapecolor}"/>
  </svg>`)
    }
    else if (data.shape === "triangle") {
    return (` <svg id="triangle" xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" width="70%" height="70%" viewBox="-100 -60 100 100" fill="${data.shapecolor}">
  <polygon points="0 -35, 50 50, -50 50" />
 </svg>`)
    }
}

module.exports = generateLogo;