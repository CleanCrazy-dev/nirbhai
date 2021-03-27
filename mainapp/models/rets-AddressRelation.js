const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AddressRelationSchema = new Schema({
  StateOrProvince: String,
  CountyOrParish: String,
  City: String,
  District: String,
  SubdivisionName: String  
}, {
    collection: 'rets-AddressRelation'
})

module.exports = mongoose.model('rets-AddressRelation', AddressRelationSchema)