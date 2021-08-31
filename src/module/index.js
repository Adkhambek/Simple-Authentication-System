const usersRouter = require("./server/users");
const authRouter = require("./server/auth");
const loginRouter = require("./client/login");
// const signupRouter = require("./client/signup");

module.exports = [usersRouter, authRouter, loginRouter];
