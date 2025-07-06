const express = require('express');
const router = express.Router();
const db = require('../config/db');

// ✅ POST: Signup
router.post('/signup', (req, res) => {
  const { name, email, password, role } = req.body;

  // Check for missing fields
  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check if user already exists
  const checkSql = 'SELECT * FROM users WHERE email = ?';
  db.query(checkSql, [email], (err, results) => {
    if (err) {
      console.error("Signup Check SQL Error:", err);
      return res.status(500).json({ message: "Server error during signup" });
    }

    if (results.length > 0) {
      return res.status(409).json({ message: "Email already exists. Try logging in." });
    }

    // Insert new user
    const insertSql = `INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`;
    db.query(insertSql, [name, email, password, role], (err, result) => {
      if (err) {
        console.error("Signup Insert SQL Error:", err);
        return res.status(500).json({ message: "Signup failed" });
      }

      res.status(201).json({ message: "User registered successfully" });
    });
  });
});

// ✅ POST: Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error("Login SQL Error:", err);
      return res.status(500).json({ message: "Login failed" });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = results[0];
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  });
});

module.exports = router;
