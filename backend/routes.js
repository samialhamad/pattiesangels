// const express = require('express');
// const db = require('./db'); // Import the database connection

// const router = express.Router();

// // Route to get all animals
// router.get('/', (req, res) => {
//   db.query('SELECT * FROM Animals', (error, results) => {
//     if (error) {
//       return res.status(500).json({ error: error.message });
//     }
//     res.json(results); // Send the results as JSON
//   });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();

// Test route
router.get('/', (req, res) => {
    res.json({ message: "Test route is working!" });
});

module.exports = router;
