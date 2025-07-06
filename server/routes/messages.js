const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/', (req, res) => {
  const { sender_name, email, message, vehicle_id } = req.body;

  if (!sender_name || !email || !message || !vehicle_id) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const sql = `INSERT INTO messages (sender_name, email, message, vehicle_id)
               VALUES (?, ?, ?, ?)`;

  db.query(sql, [sender_name, email, message, vehicle_id], (err, result) => {
    if (err) {
      console.error("Message insert error:", err);
      return res.status(500).json({ message: "Message sending failed" });
    }
    res.status(201).json({ message: "Message sent successfully" });
  });
});

module.exports = router;

