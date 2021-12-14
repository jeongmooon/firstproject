const userSchema = require("../../models/users");
const jwtModule = require("../../modules/jwtModule");

const usersController = {
  createUser: async (req, res) => {
    const { email, name, password } = req.body;

    let userEmail = await userSchema.findOne({ email });

    if (userEmail) {
      res.status(400).json({
        message: "중복된 이메일, 새로운 이메일을 등록하세요",
      });
      return;
    } else {
      const data = new userSchema({
        email,
        name,
        password,
        createDate: new Date(),
      });

      try {
        const saveData = await data.save();
        res.status(200).json({
          message: "회원가입 완료",
          data: saveData,
        });
      } catch (error) {
        res.status(500).json({
          message: "DB 서버 에러",
        });
      }
    }
  },

  loginUser: async (req, res) => {
    const { email, password } = req.body;

    const findUserInfo = await userSchema.findOne({ email });

    if (findUserInfo) {
      //이메일이 있을 때
      const userPassword = findUserInfo.password;
      if (userPassword === password) {
        // 비밀번호가 일치할때
        const accessToken = jwtModule.create({
          email,
        });

        res.status(200).json({
          message: "로그인 성공",
          accessToken: accessToken,
        });
      } else {
        //비밀번호가 틀릴때
        res.status(401).json({
          message: "비밀번호가 일치 하지 않습니다",
        });
      }
    } else {
      //유저 정보 없을때
      res.status(400).json({
        message: "해당 계정정보를 찾을 수 없음",
      });
    }
  },
};

module.exports = usersController;
