-- Create Database
CREATE DATABASE IF NOT EXISTS vehicle_store;

-- Use the database
USE vehicle_store;

-- Users Table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'buyer',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Vehicles Table
CREATE TABLE vehicles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100),
  price DECIMAL(10,2),
  year INT,
  location VARCHAR(100),
  type VARCHAR(50),
  condition VARCHAR(50),
  description TEXT,
  image_url VARCHAR(255),
  seller_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (seller_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Messages Table
CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  sender_name VARCHAR(100),
  email VARCHAR(100),
  message TEXT,
  vehicle_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (vehicle_id) REFERENCES vehicles(id) ON DELETE CASCADE
);
