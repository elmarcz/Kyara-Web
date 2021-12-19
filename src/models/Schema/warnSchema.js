const {Schema, model} = require('mongoose');

const schema = new Schema({
  userID: {
    type: String,
    required: true
  },
  serverID: {
    type: String,
    required: true
  },
  warnings: {
    type: Number,
    required: true
  }
})

module.exports = model('Warn', schema)