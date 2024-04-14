const multer = require('multer');

// Configure storage
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

module.exports = upload;
