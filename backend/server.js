const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Initialize a new Express application instance
const app = express();

// Enable CORS for all routes and origins
app.use(cors());

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the 'frontend' directory for home page
app.use(express.static(path.join(__dirname, '../frontend')));

// Set views directory for ejs
app.set('views', path.join(__dirname, '../backend/views'));

// Import Routes
const animalRoutes = require('./routes');
const applyingRoutes = require('./routes/applyingRoutes');

// Mount the routes on their respective paths
app.use('/api/animals', animalRoutes);
app.use('/apply', applyingRoutes);

// Specific route for serving the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/home', 'index.html'));
});

// Set the port for the server to listen on from the environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
