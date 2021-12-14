const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users/usersController");
const authModule = require("../../modules/authModule");

// 계정 정보를 가져온다
// http method : GET
//  /users

router.get("/", authModule.loggedIn, userController.getUserInfo);

module.exports = router;
