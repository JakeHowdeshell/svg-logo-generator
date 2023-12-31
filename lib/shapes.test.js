// importing dependencies
const { Shapes, Circle, Triangle, Square } = require("./shapes.js");
// testing that the triangle class has the capability to accept user input and provide 
// an accepted output.
describe("Triangle", () => {
  it("should return the user provided fill with the SVG data to generate a triangle", () => {
    const data = {
      text: "ABC",
      textColor: "pink",
      shapeColor: "blue",
    };
    const shape = new Triangle(data);
    expect(shape.render(data.shapeColor)).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});
// testing that the circle class has the capability to accept user input and provide 
// an accepted output.
describe("Circle", () => {
  it("should return the user provided fill with the SVG data to generate a circle", () => {
    const data = {
      text: "CBA",
      textColor: "black",
      shapeColor: "orange",
    };
    const shape = new Circle(data);
    expect(shape.render(data.shapeColor)).toEqual(
      '<circle cx="150" cy="100" r="80" fill="orange" />'
    );
  });
});
// testing that the square class has the capability to accept user input and provide 
// an accepted output.
describe("Square", () => {
  it("should return the user provided fill with the SVG data to generate a square", () => {
    const data = {
      text: "CBA",
      textColor: "black",
      shapeColor: "pink",
    };
    const shape = new Square(data);
    expect(shape.render(data.shapeColor)).toEqual(
      '<rect x="75" y="25" width="150" height="150" fill="pink" />'
    );
  });
});
