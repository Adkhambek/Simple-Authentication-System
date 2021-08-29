const model = require("./model");

exports.allCondidates = async (req, res) => {
  const condidates = await model.fetchAllCondidates();
  res.status(200).json({
    status: "success",
    results: condidates.length,
    data: {
      condidates,
    },
  });
};
