const mysql = require("mysql2/promise");
const { configDB } = require("../config");

exports.fetchAll = async (sql, ...values) => {
  const connection = await mysql.createConnection(configDB);
  try {
    const [rows] = await connection.execute(sql, values ? values : null);
    return rows;
  } catch (error) {
    console.log(error);
  } finally {
    connection.end();
  }
};

exports.fetchOne = async (sql, ...values) => {
  const connection = await mysql.createConnection(configDB);
  try {
    const [rows] = await connection.execute(sql, values ? values : null);
    return rows[0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.end();
  }
};
