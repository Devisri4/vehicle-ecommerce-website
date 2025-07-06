const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // default XAMPP user
  password: '',           // keep empty if you didn’t set any
  database: 'vehicle_store',
  port: 3307              // 🔧 <-- ADD THIS if you changed it in my.ini
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Error connecting to MySQL:', err);
    return;
  }
  console.log('✅ Connected to MySQL Database');
});

module.exports = connection;

