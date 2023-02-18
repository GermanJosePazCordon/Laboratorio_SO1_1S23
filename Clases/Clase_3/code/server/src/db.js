const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'secret',
  database: 'clase3',
  port:'3306'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err);
    return;
  }

  console.log('Connected to MySQL');
});

module.exports = connection;