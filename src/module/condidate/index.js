const router = require("express").Router();
const { allCondidates } = require("./controller");

router.get("/api/candidates", allCondidates);

module.exports = router;
