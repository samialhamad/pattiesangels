// Import AWS SDK
const AWS = require('aws-sdk');
require('dotenv').config({ path: '../.env' }); // Adjust the path accordingly

// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-west-1'
});

// Create an S3 instance
const s3 = new AWS.S3();

// Function to upload a file to a specific folder in the bucket
function uploadFile(folderName, fileName, fileContent, contentType) {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `${folderName}/${fileName}`,
    Body: fileContent,
    ContentType: contentType
  };

  return s3.upload(params).promise()
    .then(data => data.Location)  // Return only the URL of the uploaded file
    .catch(error => {
      console.error("Error uploading file to S3:", error);
      throw error;  // Rethrow the error to handle it in the calling function
    });
}


// Function to retrieve a file from a specific folder in the bucket
function getFile(folderName, fileName) {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `${folderName}/${fileName}`
  };

  return s3.getObject(params).createReadStream();
}

module.exports = { uploadFile, getFile };
