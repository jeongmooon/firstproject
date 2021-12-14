const postModel = require("../../models/post");
const jwtModule = require("../../modules/jwtModule");

const postsController = {
  createtPost: async (req, res) => {
    const { title, content } = req.body;

    const userInfo = req.userInfo;
    console.log(userInfo);

    const post = new postModel({
      writer: userInfo.name,
      title,
      content,
      createDate: new Date(),
    });

    try {
      const saveData = await post.save();
      res.status(200).json({
        message: "업로드 완료",
        data: saveData,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },

  readPost: async (req, res) => {
    try {
      const listData = await postModel.find();
      if (listData.length === 0) {
        res.status(400).json({
          message: "결과값이 없습니다",
        });
        return;
      }

      res.status(200).json({
        message: "조회 완료",
        data: listData,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },

  updatePost: async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
      await postModel.findByIdAndUpdate(id, { title: title, content: content });
      res.status(200).json({
        message: "업데이트 완료",
      });
    } catch (error) {
      res.status(500).json({
        message: "DB서버 에러",
      });
    }
  },

  deletePost: async (req, res) => {
    const { id } = req.params;
    try {
      await postModel.findByIdAndDelete(id);
      res.status(200).json({
        message: "삭제완료",
      });
    } catch (error) {
      res.status(500).json({
        message: "DB서버 에러",
      });
    }
  },

  readDetailPost: async (req, res) => {
    const { id } = req.params;

    try {
      const Data = await postModel.findOne({ id });
      res.status(200).json({
        message: "검색완료",
        data: Data,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB서버 에러",
      });
    }
  },
};

module.exports = postsController;
