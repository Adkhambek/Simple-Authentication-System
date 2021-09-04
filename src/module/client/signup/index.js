const router = require("express").Router();
const path = require("path");
router.get("/signup", (req, res) => {
  res.sendFile(path.join(process.cwd(), "src", "views", "signup.html"));
});
module.exports = router;
