const express = require('express');
const db = require('./db'); // Import the database connection

const router = express.Router();

// Route to get all animals
router.get('/', (req, res) => {
  db.query('SELECT * FROM Animals', (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results); // Send the results as JSON
  });
});

// Endpoint for adding a new animal
router.post('/add', async (req, res) => {
  try {
    const { name, breed, gender, age, description, isFixed, isAdopted } = req.body;
    const result = await db.query('INSERT INTO Animals (name, breed, gender, age, description, isFixed, isAdopted) VALUES (?, ?, ?, ?, ?, ?, ?)', [name, breed, gender, age, description, isFixed, isAdopted]);
    res.status(201).json({ message: 'Animal added successfully', animalId: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;