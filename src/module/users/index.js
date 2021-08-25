const router = require("express").Router();
const { getUsers } = require("./controller");

router.get("/api/users", getUsers);

module.exports = router;
