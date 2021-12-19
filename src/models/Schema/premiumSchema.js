const {Schema, model} = require('mongoose');

const schema = new Schema({
  userID: {
    type: Number,
    unique: true
  },
  status: {
    type: String
  }
})

module.exports = model('premium', schema)