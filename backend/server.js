const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
//const bodyParser = require('body-parser');
//const expressSession = require('express-session');

const animalRoutes = require('./routes'); // Import the routes for the Animals
const applyingRoutes = require('./routes/applyingRoutes');

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(express.json()); // Middleware for parsing JSON bodies
app.use(cors()); // Enable CORS for all routes and origins
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Specific route for serving the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/home', 'index.html'));
});

// Mount the animal routes on the '/api/animals' path
app.use('/api/animals', animalRoutes);

app.use('/apply', applyingRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
