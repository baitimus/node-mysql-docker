const express = require('express');
const mysql = require('mysql2');

// Initialize the express app
const app = express();
const port = 3000;

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'mysql',           // MySQL container name (Docker Compose service)
  user: 'root',            // MySQL user
  password: 'rootpassword', // MySQL root password
  database: 'my_database',  // MySQL database name
  port: 3306               // MySQL internal port
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

//create default api message
app.get('/', (req, res) => {
  res.send('Hel32dasdad131221lo World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
