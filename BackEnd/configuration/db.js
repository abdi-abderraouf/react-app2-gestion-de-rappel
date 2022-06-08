const mongoose = require('mongoose');
const config = require('configuration');
const db = configuration.get('mongoURI');

const connectDB = async () => {
  try {
    mongoose.connect(
      db,
      { useNewUrlParser: true }
    );

    console.log('rappel back connected to MongoDB ...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;