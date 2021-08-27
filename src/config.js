require("dotenv").config({ path: `${__dirname}/.env` });

const PORT = process.env.PORT;
const secretKey = process.env.SECRET_KEY;
const configDB = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

module.exports = {
  PORT,
  secretKey,
  configDB,
};
