const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
} = require("../../controllers/users/usersController");

// 회원가입
router.post("/signup", createUser);

//로그인
router.post("/singin", loginUser);

module.exports = router;
