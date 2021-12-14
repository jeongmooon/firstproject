const express = require("express");
const router = express.Router();
const authModule = require("../../modules/authModule");

const {
  createtPost,
  readPost,
  updatePost,
  deletePost,
  readDetailPost,
} = require("../../controllers/posts/postsCntroller");

// 게시물 만들기
router.post("/", authModule.loggedIn, createtPost);

// 게시물 조회
router.get("/", readPost);

// 게시글 수정
router.put("/:id", updatePost);

// 게시글 삭제
router.delete("/:id", deletePost);

// 특정게시글 검색
router.get("/:id", readDetailPost);

module.exports = router;
