"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var logic_1 = require("./logic");
var router = (0, express_1.Router)();
router.post("/card", function (req, res) {
    var cardNumber = req.body.card_number.replace(/\D/g, "");
    return res.json({ isValid: (0, logic_1.validateCardNumber)(cardNumber) });
});
exports.default = router;
//# sourceMappingURL=routes.js.map