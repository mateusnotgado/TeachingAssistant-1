"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route("/")
    .get((req, res) => {
    return res.json({ Hello: "World" });
});
exports.default = router;
//# sourceMappingURL=disciplina.routes.js.map