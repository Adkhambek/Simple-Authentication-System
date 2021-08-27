const { fetchAll, fetchOne } = require("../../database/connect");

const GET_ALL_USERS = `
SELECT * FROM users
`;

exports.fetchUsers = () => fetchAll(GET_ALL_USERS);

const GET_USER_BY_ID = `
SELECT * FROM users
WHERE id = ?
`;

exports.fetchUser = (id) => fetchOne(GET_USER_BY_ID, id);
