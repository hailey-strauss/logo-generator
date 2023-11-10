const { Shape } = require("./shapes");

class Triangle extends Shape {
  render() {
    return `<polygon points="50,14 100,100 0,100" fill="${this.colorShape}" /><text x="25" y ="85" font-size="30" fill="${this.colorText}">${this.text}</text>`;
  }
}

module.exports = Triangle;
