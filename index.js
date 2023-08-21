const inquirer = require("inquirer");
const fs = require("fs");
const {createLogo} = require('./lib/shapes.js')

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
          /^(red|blue|green|yellow|purple|pink|orange|brown)$/i.test(input)
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
      choices: ["Circle", "Triangle", "Square"],
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
          /^(red|blue|green|yellow|purple|pink|orange|brown)$/i.test(input)
        ) {
          return true;
        }
        return "Please enter a valid color keyword or a valid hexadecimal color.";
      },
      name: "shapeColor",
    },
  ])
  .then(function (data) {
    //logo = createLogo(data);
    const outputFolder = path.join(__dirname, "examples", "logo.svg");
    fs.writeFile(outputFolder, logo, (err) =>
      err ? console.error(err) : console.log("Generated logo.svg")
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
