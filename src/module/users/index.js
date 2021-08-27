const router = require("express").Router();
const { getUsers, getUserById, insertUser } = require("./controller");

router.get("/api/users", getUsers);
router.get("/api/users/:id", getUserById);
router.post("/api/user", insertUser);

module.exports = router;
