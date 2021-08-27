const router = require("express").Router();
const { signup, login } = require("./controller");

router.post("/api/user/signup", signup);
router.post("/api/user/login", login);

module.exports = router;
