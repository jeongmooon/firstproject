var express = require("express");
var router = express.Router();

router.use("/posts", require("./posts"));
router.use("/auth", require("./auth/index"));

module.exports = router;
