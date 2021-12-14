const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/jwtConfig.json");

const jwtModule = {
  create: (payload) => {
    const option = {
      algorithm: "HS256",
      expiresIn: "30d",
      issuer: "pyojeongmmon",
    };

    const token = jwt.sign(payload, jwtSecret.secretKey, option);

    return token;
  },

  verify: (token) => {
    let decoded;
    try {
      decoded = jwt.verify(token, jwtSecret.secretKey);
    } catch (error) {
      if (error.message === "jwt expired") {
        console.log("expired token");
        return -1;
      } else if (error.message === "invalid token") {
        console.log("invlid token");
        return -2;
      } else {
        console.log("error token");
        return -3;
      }
    }
    return decoded;
  },
};

module.exports = jwtModule;
