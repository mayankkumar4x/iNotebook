const mongoose = require('mongoose');
require("dotenv").config()
const mongoURI = process.env.URI; // Replace 'yourDatabaseName' with the actual name of your database
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
        // useCreateIndex: true,  // This option is recommended for avoiding deprecation warnings
        // useFindAndModify: false,     
    });
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectToMongo;
