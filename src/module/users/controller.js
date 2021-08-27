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
  const id = req.params.id * 1;
  const user = await model.fetchUser(id);
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

exports.insertUser = async (req, res) => {
  const inputs = req.body;
  const newUser = await model.addUser(inputs);
  res.status(201).json({
    status: "success",
    message: "Inserted successfully",
    data: {
      user: newUser,
    },
  });
};
