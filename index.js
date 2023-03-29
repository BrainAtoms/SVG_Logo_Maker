const fs = require("fs");
const inquirer = require("inquirer");
const generateLogo = require("./lib/generateLogo");

const questions = [
  {
    type: "input",
    name: "characters",
    message:
      "Please enter the characters for your logo (must be no more than 3):",
  },
  {
    type: "input",
    name: "textcolor",
    message:
      "Please enter the color for your text (name or hexadecimal number):",
  },
  {
    type: "list",
    name: "shape",
    message: "Please choose a shape for your logo:",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapecolor",
    message:
      "Please choose a color for your shape (name or hexadecimal number):",
  },
];

function writeToFile(data) {
  let fileName = "./examples/.svg";
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Your .svg file has been created!");
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => writeToFile(generateLogo(answers)));
}

init();
