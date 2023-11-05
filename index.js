// import inquirer from "inquirer";
const inquirer = require("inquirer");
// Define your own questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter your text, limit is three characters.",
    name: "text",
  },

  {
    type: "input",
    message: "Please your text color as a keyword or a hexadecimal number.",
    name: "colorText",
  },

  {
    type: "list",
    message: "Please select from the following shapes:",
    name: "shape",
    choices: ["circle", "triangle", "square"],
  },

  {
    type: "input",
    message: "Please your shape's color as a keyword or a hexadecimal number.",
    name: "colorShape",
  },
];

// Customize the function for writing to a file
async function writeToFile(fileName, data) {
  try {
    // Customize how the data is written to a file
    await fs.writeFile(fileName, data);
    console.log("File saved successfully");
  } catch (error) {
    // Customize error handling
    console.error(error);
  }
  // Customize error handling and success message
  error ? console.error(error) : console.log("File saved successfully");
}

// Customize the function to create your shapes
function generateLogo() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    let customShape;
    // Customize this switch statement to handle your own shape classes
    switch (answers.shape) {
      case "custom1":
        console.log("User selected custom shape 1.");
        customShape = new CustomShape1();
        break;
      case "custom2":
        console.log("User selected custom shape 2.");
        customShape = new CustomShape2();
        break;
      // Add cases for your custom shapes
    }
    // Customize how you set properties for your shapes
    customShape.setCustomProperty1(answers.customInput1);
    customShape.setCustomProperty2(answers.customInput2);

    const svg = new SVG();
    // Customize how the SVG is generated based on your shapes
    svg.setShape(customShape.render());

    writeToFile("output.svg", svg.render()); // Customize the output file name
  });
}

// Call your custom function to generate the logo
generateLogo();
