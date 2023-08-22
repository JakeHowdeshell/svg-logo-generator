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

class Circle extends Shapes {
  constructor(data) {
    super(data);
    this.logoShape = `<${data.shape} cx="150" cy="100" r="80" fill="${data.shapeColor}" />`;
  }
}

class Triangle extends Shapes {
  constructor(data) {
    super(data);
    this.logoShape = `<polygon points="150,20 100,180 200,180" fill="${data.shapeColor}" />`;
  }
}

class Square extends Shapes {
  constructor(data) {
    super(data);
    this.logoShape = `<rect width="150" height="150" fill="${data.shapeColor}" />`;
  }
}

module.exports = { Shapes, Circle, Triangle, Square };
