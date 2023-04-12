"use strict";
class ThemeAController {
    defaultMethod() {
        return {
            text: `You've reached the ${this.constructor.name} default method`
        };
    }
}
module.exports = new ThemeAController();
