class Circle extends Shape {
  render() {
    return `<circle cx="50" cy="150" r="40" fill="${this.colorShape}" /><text x="25" y ="160" font-size="30" fill="${this.colorText}">${this.text}</text>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="50,14 100,100 0,100" fill="${this.colorShape}" /><text x="25" y ="85" font-size="30" fill="${this.colorText}">${this.text}</text>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="10" y="10" width="90" height="90" fill="${this.colorShape}" /><text x="30" y ="65" font-size="30" fill="${this.colorText}">${this.text}</text>`;
  }
}

class Shape {
  constructor() {
    this.colorShape = "";
    this.colorText = "";
    this.text = "";
  }
  setcolorShape(colorShape) {
    this.colorShape = colorShape;
  }
  setcolorText(colorText) {
    this.colorText = colorText;
  }
  settext(text) {
    this.text = text;
  }
}

class SVG {
  constructor() {
    this.shape = "";
  }
  setshape(shape) {
    this.shape = shape;
  }
  render() {
    return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">${this.shape}</svg>`;
  }
}

module.exports = { SVG, Shape, Circle, Triangle, Square };
