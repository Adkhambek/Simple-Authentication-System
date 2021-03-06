const jwt = require("jsonwebtoken");
const { secretKey } = require("../config");

module.exports = {
  sign: (id) => jwt.sign({ id }, secretKey, { expiresIn: "24h" }),
  verify: (token) => jwt.verify(token, secretKey),
};
