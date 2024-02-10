// const mysql = require('mysql');
// require('dotenv').config();

// const dbConfig = {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE
// };

// const connection = mysql.createConnection(dbConfig);

// connection.connect(error => {
//   if (error) throw error;
//   console.log("Successfully connected to the database.");
// });

// module.exports = connection;


const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect(error => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log("Successfully connected to the database.");

  // Test query
  connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

  // End the connection
  connection.end();
});

// Export the connection for other modules to use
module.exports = connection;
