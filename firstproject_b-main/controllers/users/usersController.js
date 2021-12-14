const usersController = {
  getUserInfo: (req, res) => {
    const userInfo = req.userInfo;
    if (!userInfo) {
      res.status(400).json({
        message: "유저정보가 없음",
      });
      return;
    }

    res.status(200).json({
      message: "유저 조회 성공",
      data: userInfo,
    });
  },
};

module.exports = usersController;
