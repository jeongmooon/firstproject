const jwtModule = require("./jwtModule");
const usersModel = require("../models/users");

const authModule = {
  loggedIn: async (req, res, next) => {
    const accessToken = req.headers.authorization;

    if (!accessToken) {
      res.status(409).json({
        message: "토큰 없음",
      });
      return;
    }

    const decoded = jwtModule.verify(accessToken);
    if (decoded === -1) {
      return res.status(409).json({
        message: "만료돈 토큰 입니다",
      });
    } else if (decoded === -2) {
      return res.status(409).json({
        message: "유효하지 않는 토큰 입니다",
      });
    } else if (decoded === -3) {
      return res.status(409).json({
        message: "토큰 에러 입니다",
      });
    }

    let userInfo;

    try {
      userInfo = await usersModel.findOne({ email: decoded.email });
      if (!userInfo) {
        return res.status(401).json({
          message: "일치하지 않는 유저입니다.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "유효하지 않는 유저 입니다",
      });
    }

    req.userInfo = userInfo;
    next();
  },
};

module.exports = authModule;
