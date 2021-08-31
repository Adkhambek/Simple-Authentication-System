const model = require("./model");
const { sign } = require("../../../lib/jwt");

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
  console.log(data.username, data.password);
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
    const token = "Bearer " + sign(id);
    res
      .cookie("token", token, {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: process.env.NODE_ENV.trim() === "production",
      })
      .status(200)
      .json({
        status: "success",
        message: "Logged in successfully",
      });
  }
};
