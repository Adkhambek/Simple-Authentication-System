const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "src", "views", "index.html"));
});
module.exports = router;
