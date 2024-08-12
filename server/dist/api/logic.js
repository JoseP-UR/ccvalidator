"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCardNumber = void 0;
var validateCardNumber = function (cardNumber) {
    if (cardNumber.length !== 16) {
        return false;
    }
    if (/[^0-9\s]+/.test(cardNumber))
        return false;
    var nCheck = 0, bEven = false;
    for (var n = cardNumber.length - 1; n >= 0; n--) {
        var cDigit = cardNumber.charAt(n), nDigit = parseInt(cDigit, 10);
        if (bEven && (nDigit *= 2) > 9)
            nDigit -= 9;
        nCheck += nDigit;
        bEven = !bEven;
    }
    return (nCheck % 10) == 0;
};
exports.validateCardNumber = validateCardNumber;
//# sourceMappingURL=logic.js.map