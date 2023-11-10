const { Shape } = require('./shapes');

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="150" r="40" fill="${this.colorShape}" /><text x="25" y ="160" font-size="30" fill="${this.colorText}">${this.text}</text>`
    }
};

module.exports = Circle;