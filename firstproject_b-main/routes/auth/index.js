const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
} = require("../../controllers/auth/authController");

// 회원가입
router.post("/signup", createUser);

//로그인
router.post("/singin", loginUser);

module.exports = router;
