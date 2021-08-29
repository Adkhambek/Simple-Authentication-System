const { fetchOne, fetchAll } = require("../../database/connect");

GET_ALL_CONDIDATES = `
SELECT * FROM candidates
`;
exports.fetchAllCondidates = () => fetchAll(GET_ALL_CONDIDATES);
