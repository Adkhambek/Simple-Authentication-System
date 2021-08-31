const { fetchAll, fetchOne } = require("../../../database/connect");
const { secretKey } = require("../../../config");

const INSERT_USER = `
INSERT INTO users(
    username,
    password,
    mail,
    age
) 
VALUES (?, AES_ENCRYPT(?, ?), ?, ?)
`;

exports.register = (data) =>
  fetchOne(
    INSERT_USER,
    data.username,
    data.password,
    secretKey,
    data.mail,
    data.age
  );

const LOGIN = `
SELECT * FROM users WHERE BINARY username = BINARY ? AND BINARY CAST(AES_DECRYPT(password, ?) AS CHAR) = BINARY ?
`;

exports.login = (data) => {
  return fetchAll(LOGIN, data.username, secretKey, data.password);
};
