const usersRouter = require("./server/users");
const authRouter = require("./server/auth");
const loginRouter = require("./client/login");
const homeRouter = require("./client/home");
const signupRouter = require("./client/signup");

module.exports = [
  usersRouter,
  authRouter,
  loginRouter,
  homeRouter,
  signupRouter,
];
