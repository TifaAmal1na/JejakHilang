const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Replace with your MySQL password
  database: 'jejakhilang'   // Replace with your database name
});

db.connect((err) => {
  if (err) {
      console.error('Database connection error:', err);
      return;
  }
  console.log('Connected to MySQL Database');
});

module.exports = db;
