const model = require("./model");
const { sign } = require("../../lib/jwt");

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
  if (!data.username || !data.password) {
    res.status(400).json({
      status: "fail",
      message: "Please provide username and password",
    });
  } else if (!login.length) {
    res.status(401).json({
      status: "fail",
      message: "Incorrect password or username",
    });
  } else {
    const id = login[0].id.toString();
    const token = sign(id);

    res.status(200).json({
      status: "success",
      token,
    });
  }
};
