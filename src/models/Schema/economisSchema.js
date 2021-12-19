const {Schema, model} = require('mongoose');

const schema = new Schema({
  userID: {
    type: String,
    unique: true
  },
  serverID:{
    type: String
  },
  dinero: {
    type: Number,
    default: 0
  },
  dinerobanco: {
    type: Number,
    default: 0
  },
  bitcoin: {
    type: Number,
    default: 0
  },
  etherum: {
    type: Number,
    default: 0
  },
  dogecoin: {
    type: Number,
    default: 0
  }
})

module.exports = model('economia', schema)