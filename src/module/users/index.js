const router = require("express").Router();
const { getUsers, getUserById } = require("./controller");

router.get("/api/users", getUsers);
router.get("/api/users/:id", getUserById);

module.exports = router;
