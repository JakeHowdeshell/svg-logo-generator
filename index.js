// imported dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { Shapes, Circle, Triangle, Square } = require("./lib/shapes.js");
// promting the user to provide data used to create the image
inquirer
  .prompt([
    {
      type: "input",
      message:
        "What characters would you like displayed on your logo? (limit to 3 characters)",
      validate: function (input) {
        if (input.length <= 3) {
          return true;
        }
        return "Limit to 3 characters";
      },
      name: "text",
    },
    {
      type: "input",
      message:
        "Please enter a color keyword or a hexadecimal color for your text",
      validate: function (input) {
        const colorRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (
          input.match(colorRegex) ||
          /^(red|blue|green|yellow|purple|pink|orange|brown|white|black)$/i.test(
            input
          )
        ) {
          return true;
        }
        return (
          "Please enter a valid color keyword or a valid hexadecimal color." +
          input +
          colorRegex
        );
      },
      name: "textColor",
    },
    {
      type: "list",
      message: "What shape would you like your logo?",
      choices: ["circle", "triangle", "square"],
      name: "shape",
    },
    {
      type: "input",
      message:
        "Please enter a color keyword or a hexadecimal color for your shape",
      validate: function (input) {
        const colorRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (
          input.match(colorRegex) ||
          /^(red|blue|green|yellow|purple|pink|orange|brown|white|black)$/i.test(
            input
          )
        ) {
          return true;
        }
        return "Please enter a valid color keyword or a valid hexadecimal color.";
      },
      name: "shapeColor",
    },
  ])
  // using the user data to define which class will be used to generate the image
  .then(function (data) {
    let newShape;
    switch (data.shape) {
      case "circle":
        newShape = new Circle(data).createLogo();
        break;
      case "triangle":
        newShape = new Triangle(data).createLogo();
        break;
      case "square":
        newShape = new Square(data).createLogo();
        break;
      default:
        console.error("Invalid shape choice");
        return;
    }
    // writing the file to the examples folder under the name logo.svg
    const outputFolder = path.join(__dirname, "examples", "logo.svg");
    fs.writeFile(outputFolder, newShape, (err) =>
      err ? console.error(err) : console.log("Generated logo.svg")
    );
  });
