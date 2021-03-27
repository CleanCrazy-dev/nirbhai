const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let propertyTypeSchema = new Schema({
  'Value': {
    type: String
  },
  'Short Value': {
    type: String
  },
  'Long Value': {
    type: String
  }
}, {
    collection: 'rets-property-PropertyType'
})

module.exports = mongoose.model('rets-property-PropertyType', propertyTypeSchema)