const { Shape } = require("./shapes");

class Square extends Shape {
  render() {
    return `<rect x="10" y="10" width="90" height="90" fill="${this.colorShape}" /><text x="30" y ="65" font-size="30" fill="${this.colorText}">${this.text}</text>`;
  }
}

module.exports = Square;
