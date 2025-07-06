const express = require('express');
const router = express.Router();
const db = require('../config/db');
const upload = require('../middleware/upload'); // ✅ Only ONE upload line!

// POST: Add new vehicle with image
router.post('/', upload.single('image'), (req, res) => {
  const { title, price, year, location, type, condition, description, seller_id } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: 'Image not uploaded' });
  }

  const image_url = `/uploads/${req.file.filename}`;

  const sql = `
    INSERT INTO vehicles (title, price, year, location, type, \`condition\`, description, image_url, seller_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [title, price, year, location, type, condition, description, image_url, seller_id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting vehicle:', err);
      return res.status(500).json({ message: 'Vehicle creation failed' });
    }
    res.status(201).json({ message: 'Vehicle created successfully!' });
  });
});

// GET /api/vehicles/:id → Get a vehicle by its ID
router.get('/:id', (req, res) => {
  const vehicleId = req.params.id;
  const sql = 'SELECT * FROM vehicles WHERE id = ?';

  db.query(sql, [vehicleId], (err, results) => {
    if (err) {
      console.error('❌ Error fetching vehicle by ID:', err);
      return res.status(500).json({ message: 'Failed to fetch vehicle' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    res.status(200).json(results[0]); // send the single vehicle object
  });
});

// GET /api/vehicles/seller/:id → Get vehicles posted by a seller
router.get('/seller/:id', (req, res) => {
  const sellerId = req.params.id;
  const sql = 'SELECT * FROM vehicles WHERE seller_id = ?';

  db.query(sql, [sellerId], (err, results) => {
    if (err) {
      console.error('❌ Error fetching seller vehicles:', err);
      return res.status(500).json({ message: 'Failed to fetch vehicles' });
    }

    res.status(200).json(results); // return all vehicles for this seller
  });
});

// 🔧 GET route to fetch all vehicles
router.get('/', (req, res) => {
  db.query('SELECT * FROM vehicles', (err, results) => {
    if (err) {
      console.error('❌ Error fetching vehicles:', err);
      return res.status(500).json({ message: 'Error fetching vehicles' });
    }
    res.json(results); // ✅ Return all vehicles as JSON
  });
});
// PUT /api/vehicles/:id → Update a vehicle
router.put('/:id', (req, res) => {
  const vehicleId = req.params.id;
  const { title, price, year, location, type, condition, description } = req.body;

  const sql = `
    UPDATE vehicles
    SET title = ?, price = ?, year = ?, location = ?, type = ?, \`condition\` = ?, description = ?
    WHERE id = ?
  `;

  const values = [title, price, year, location, type, condition, description, vehicleId];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating vehicle:", err);
      return res.status(500).json({ message: "Update failed." });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Vehicle not found." });
    }

    res.json({ message: "Vehicle updated successfully." });
  });
});


module.exports = router;
