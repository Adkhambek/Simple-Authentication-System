const model = require("./model");

exports.signup = async (req, res) => {
  const data = req.body;
  const newUser = await model.register(data);
  res.status(201).json({
    status: "success",
    message: "registered successfully",
    data: {
      user: newUser,
    },
  });
};

exports.login = async (req, res) => {
  const data = req.body;
  const login = await model.login(data);
  if (login.length) {
    res.status(201).json({
      status: "success",
      message: "logined successfully",
      data: {
        user: login,
      },
    });
  } else {
    res.status(401).json({
      status: "fail",
      message: "wrong password or username",
    });
  }
};
