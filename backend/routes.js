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

// Endpoint for updating an existing animal
router.post('/update', async (req, res) => {
  console.log('Received update request for pet:', req.body)

  try {
    const { Animal_ID, name, breed, gender, age, description, isFixed, isAdopted} = req.body;
    const result = db.query('UPDATE Animals SET name = ?, breed = ?, gender = ?, age = ?, description = ?, isFixed = ?, isAdopted = ? WHERE Animal_ID = ?', [name, breed, gender, age, description, isFixed, isAdopted, Animal_ID]);
    
    res.status(201).json({ message: 'Animal added successfully', animalId: result.insertId });
  } catch (error) {
    console.log("Didn't");
    res.status(500).json({ error: error.message });
  }
});

// Endpoint for deleting a pet
router.post('/delete', async (req, res) => {
  try {
    const { animalID } = req.body; // Assuming the ID is passed in the request body
    // Perform the deletion operation using the animalID
    await db.query('DELETE FROM Animals WHERE Animal_ID = ?', [animalID]);
    res.status(200).json({ message: 'Pet deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;