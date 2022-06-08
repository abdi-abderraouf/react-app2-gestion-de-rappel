const mongoose = require('mongoose');

const RappelSchema = new mongoose.Schema({
  
  texte: {
    type: String,
    required: true
  },
  Date: {
    type: String,
    required: true
  },
});

module.exports = Rappel = mongoose.model('rappel', RappelSchema);