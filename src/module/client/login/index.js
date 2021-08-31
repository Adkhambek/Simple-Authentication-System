const router = require("express").Router();
const path = require("path");
router.get("/login", (req, res) => {
  res.sendFile(path.join(process.cwd(), "src", "views", "login.html"));
});
module.exports = router;
