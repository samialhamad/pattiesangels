const express = require('express');
const db = require('./db'); // Import the database connection
const upload = require('./imageUpload');
const Animal = require('../frontend/model/animal/animal');

const { uploadFile } = require('./aws');

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
router.post('/add', upload.single('animalPhoto'), async (req, res) => {
  try {
    const animal = new Animal({
      age: parseInt(req.body.animalAge),
      breed: req.body.animalBreed,
      description: req.body.animalDescription,
      gender: req.body.animalGender,
      name: req.body.animalName,
      is_fixed: req.body.is_fixed,
      is_adopted: req.body.is_adopted,
    });
    
    const imageUrl = await uploadFile('Adoptable_Animals', req.file.originalname, req.file.buffer, req.file.mimetype);

    const result = await db.query('INSERT INTO Animals (name, breed, gender, age, description, is_fixed, is_adopted, image_url) VALUES (?, ?, ?, ?, ?, ?,?, ?)', [animal.name, animal.breed, animal.gender, animal.ageInMonths, animal.description, animal.is_fixed, animal.is_adopted, imageUrl]);

    res.status(201).json({ message: 'Animal added successfully', animalId: result.insertId });
  } catch (error) {
    console.error("Failed to add animal:", error);
    res.status(500).json({ error: error.message });
  }
});


// Endpoint for updating an existing animal
router.patch('/update/:animal_id', upload.single('animalPhoto'), async (req, res) => {
  try {
    const { animal_id } = req.params;
    const updates = req.body;

    if (req.file) {
      const imageUrl = await uploadFile('Adoptable_Animals', req.file.originalname, req.file.buffer, req.file.mimetype);
      updates.image_url = imageUrl;
    }

    const fields = Object.keys(updates).map(field => `${field} = ?`);
    const values = Object.values(updates).map(value => value.toString());  // Ensure all values are strings to match the fields array

    const query = `UPDATE Animals SET ${fields.join(', ')} WHERE animal_id = ?`;
    const finalValues = [...values, animal_id];  // Append animal_id at the end of the values array for the WHERE clause

    console.log("Executing query:", query);
    console.log("With values:", finalValues);

    const result = await db.query(query, finalValues);
    if (result.affectedRows === 0) {
      console.log("No rows updated, check your animal_id and data.");
      res.status(404).json({ message: 'No animal found with that ID or no changes detected.' });
    } else {
      res.status(200).json({ message: 'Animal updated successfully' });
    }
  } catch (error) {
    console.error("Failed to update animal:", error);
    res.status(500).json({ error: error.message });
  }
});




// Endpoint for deleting a pet
router.post('/delete', async (req, res) => {
  try {
    const { animalID } = req.body; // Assuming the ID is passed in the request body
    // Perform the deletion operation using the animalID
    await db.query('DELETE FROM Animals WHERE animal_id = ?', [animalID]);
    res.status(200).json({ message: 'Pet deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;