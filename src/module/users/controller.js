const model = require("./model");

exports.getUsers = (req, res) => {
  const users = model.fetchUsers();
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
};
