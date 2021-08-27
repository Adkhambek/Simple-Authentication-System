const { verify } = require("../lib/jwt");
const model = require("../module/users/model");
exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(
      res.status(401).json({
        status: "fail",
        message: "you are not logged in. Please logined in to access. ",
      })
    );
  }

  try {
    const decode = verify(token);
    const userExist = await model.fetchUser(+decode.id);
    delete userExist.password;
    if (!userExist) {
      return res.status(401).json({
        status: "fail",
        message: "The user belonging to this token does no longer exist.",
      });
    }
    req.user = userExist;
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
  next();
};
