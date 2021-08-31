const { verify } = require("../lib/jwt");
const model = require("../module/server/users/model");
exports.protect = async (req, res, next) => {
  let token;
  if (req.cookies.token && req.cookies.token.startsWith("Bearer")) {
    token = req.cookies.token.split(" ")[1];
  }
  if (!token) {
    return next(
      res.status(401).json({
        status: "fail",
        message: "you are not logged in. Please login in to access. ",
      })
    );
  }
  try {
    const decode = verify(token);
    const userExist = await model.fetchUser(+decode.id);
    if (!userExist) {
      return res.status(401).json({
        status: "fail",
        message: "The user belonging to this token does no longer exist.",
      });
    }
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        status: "fail",
        message: "Invalid token. Please, log in again!",
      });
    } else if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        status: "fail",
        message: "Your token has expired. Please, log in again!",
      });
    }
  }
};
