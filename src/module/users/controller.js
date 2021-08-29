const model = require("./model");

exports.getUsers = async (req, res) => {
  const users = await model.fetchUsers();
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
};

exports.getUserById = async (req, res) => {
  console.log(req.headers);
  const id = req.params.id * 1;
  const user = await model.fetchUser(id);
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};
