const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const animalRoutes = require('./routes'); // Import the routes for the Animals

dotenv.config(); // Load environment variables from .env file

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware for parsing JSON bodies
app.use(cors()); // Enable CORS for all routes and origins
app.use('/api/animals', animalRoutes); // Mount the animal routes on the /api/animals path

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

