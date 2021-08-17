const express = require("express");
const router = express.Router();

router.get("/join", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.send({ response: "Server is up and running." }).status(200);
});

module.exports = router;
