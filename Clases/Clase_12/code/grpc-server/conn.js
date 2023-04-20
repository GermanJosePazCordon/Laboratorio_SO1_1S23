var mysql = require("mysql2");
var connectionMYSQL = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "secret",
  database: "dbclase12",
  port: 3306,
});
connectionMYSQL.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Conn mysql");
  }
});

module.exports = connectionMYSQL;