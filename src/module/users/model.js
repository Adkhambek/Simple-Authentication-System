const { fetchAll, fetchOne } = require("../../database/connect");
const { secretKey } = require("../../config");

const GET_ALL_USERS = `
SELECT * FROM users
`;

exports.fetchUsers = () => fetchAll(GET_ALL_USERS);

const GET_USER_BY_ID = `
SELECT * FROM users
WHERE id = ?
`;

exports.fetchUser = (id) => fetchOne(GET_USER_BY_ID, id);

const INSERT_USER = `
INSERT INTO users(
    username,
    password,
    mail,
    age
) 
VALUES (?, AES_ENCRYPT(?, ?), ?, ?)
`;

exports.addUser = (data) =>
  fetchOne(
    INSERT_USER,
    data.username,
    data.password,
    secretKey,
    data.mail,
    data.age
  );

/*
login:
SELECT * FROM users WHERE username = 'adham' AND CAST(AES_DECRYPT(password, 'adham') AS CHAR) = 'asa123'
*/
