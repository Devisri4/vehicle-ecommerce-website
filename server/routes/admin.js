const express = require('express');
const router = express.Router();
const db = require('../config/db');

// 🔹 Get all users
router.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ message: 'Failed to fetch users' });
    }
    res.json(results);
  });
});

// 🔹 Get all vehicles
router.get('/vehicles', (req, res) => {
  db.query('SELECT * FROM vehicles', (err, results) => {
    if (err) {
      console.error('Error fetching vehicles:', err);
      return res.status(500).json({ message: 'Failed to fetch vehicles' });
    }
    res.json(results);
  });
});

// 🔹 Delete user by ID
router.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      return res.status(500).json({ message: 'Failed to delete user' });
    }
    res.json({ message: 'User deleted successfully' });
  });
});

// 🔹 Delete vehicle by ID
router.delete('/vehicles/:id', (req, res) => {
  const vehicleId = req.params.id;
  db.query('DELETE FROM vehicles WHERE id = ?', [vehicleId], (err, result) => {
    if (err) {
      console.error('Error deleting vehicle:', err);
      return res.status(500).json({ message: 'Failed to delete vehicle' });
    }
    res.json({ message: 'Vehicle deleted successfully' });
  });
});

module.exports = router;
