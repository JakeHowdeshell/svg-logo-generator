// Class used to create the sctructure of the SVG file
class Shapes {
  constructor(data) {
    this.svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">`;
    this.logoShape = "";
    this.logoText = `<text x="150" y="125" text-anchor="middle" fill="${data.textColor}" font-size="60">${data.text}</text>
</svg>`;
  }
  createLogo() {
    return this.svgContent + this.logoShape + this.logoText;
  }
}
// class to create a circle shape while inheriting the overall structure from the shapes class
class Circle extends Shapes {
  constructor(data) {
    super(data);
    this.logoShape = `<circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />`;
  }
  // added a render function to all inherent classes so they would output only the code for logoShape
  render() {
    return this.logoShape;
  }
}
// class to create a triangle shape while inheriting the overall structure from the shapes class
class Triangle extends Shapes {
  constructor(data) {
    super(data);
    this.logoShape = `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}" />`;
  }
  render() {
    return this.logoShape;
  }
}
// class to create a square shape while inheriting the overall structure from the shapes class
class Square extends Shapes {
  constructor(data) {
    super(data);
    this.logoShape = `<rect x="75" y="25" width="150" height="150" fill="${data.shapeColor}" />`;
  }
  render() {
    return this.logoShape;
  }
}
// exporting the data
module.exports = { Shapes, Circle, Triangle, Square };
