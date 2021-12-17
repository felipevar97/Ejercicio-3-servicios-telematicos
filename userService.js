const User = require("../models/user");

async function getUsers() {
  return await User.find({});
}

async function createUser(user) {
  return await User.create(user);
}

module.exports = {
  getUsers,
  createUser,
};
