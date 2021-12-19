const {Schema, model} = require('mongoose');

const schema = new Schema({
  prefix: {
    type: String
  },
  serverID:{
    type: String,
    unique: true
  }
})

module.exports = model('prefix', schema)