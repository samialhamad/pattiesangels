const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
//const mariadb = require('mariadb');
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
//app.use(bodyParser.json());


// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '../frontend')));

app.set('views', path.join(__dirname, '../backend/views'));

// Specific route for serving the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/home', 'index.html'));
});


// app.post('/api/animals', async (req, res) => {
//   // Handle updating pet information here
//   console.log('Received update request for pet:', req.body);
//   try {
//     const { Animal_ID, name, breed } = req.body;

//     // Connect to the database using credentials from .env file
//     const conn = await mariadb.createConnection({
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_DATABASE
//     });

//     // Log the database connection details
//     console.log('Connected to database:', process.env.DB_NAME);

//     // Execute the SQL query to update the pet information
//     await conn.query('UPDATE Animals SET NAME = ?, breed = ? WHERE Animal_ID = ?', [name, breed, Animal_ID]);

//     // Close the connection
//     await conn.end();

//     // Respond with success message
//     res.status(200).json({ message: 'Pet information updated successfully' });
//   } catch (error) {
//     console.error('Error updating pet:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
//   // Update the pet in the database
//   // Respond with appropriate status code
//   //res.sendStatus(200); // Respond with success status code
// });


// Mount the animal routes on the '/api/animals' path
app.use('/api/animals', animalRoutes);

app.use('/apply', applyingRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
