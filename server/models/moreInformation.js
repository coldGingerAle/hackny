const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const moreInfoSchema = new Schema({
  email:String,
  field:String,
  value:String
});



module.exports = mongoose.model('moreInfo', moreInfoSchema);
