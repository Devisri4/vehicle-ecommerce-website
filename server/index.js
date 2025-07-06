const path = require('path');
const express = require('express');
const cors = require('cors');
const messageRoutes = require('./routes/messages');
const app = express();
const PORT = 5000;

// Connect to MySQL Database
const db = require('./config/db');

// Import Routes
const authRoutes = require('./routes/auth');
const vehicleRoutes = require('./routes/vehicles'); // ✅ Vehicle route
const adminRoutes = require('./routes/admin');

// Middleware to parse JSON in request body
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Routes
app.use('/api/auth', authRoutes);         // /signup, /login
app.use('/api/vehicles', require('./routes/vehicles'));
 // / → post a vehicle
app.use('/api/messages', messageRoutes);
app.use('/api/admin', adminRoutes);


 // Test route
app.get('/', (req, res) => {
  res.send('🚀 Vehicle E-Commerce Backend is Running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
