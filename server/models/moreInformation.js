const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const moreInfoSchema = new Schema({
  email:String,
  information:String,
  value:String
});



module.exports = mongoose.model('moreInfo', moreInfoSchema);
