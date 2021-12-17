const express = require("express");
const users = require("../service/userService");

var router = express.Router();

router.post("/users", async (_req, res) => {
  const user = _req.body;
  await users.createUser(user);
  const listUsers = await users.getUsers();
  res.render("index", { data: listUsers });
});

router.get("/", async (_req, res) => {
  const listUsers = await users.getUsers();
  res.render("index", { data: listUsers });
});

module.exports = router;
