const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let propertySubdivisionNameSchema = new Schema({
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
    collection: 'rets-property-SubdivisionName'
})

module.exports = mongoose.model('rets-property-SubdivisionName', propertySubdivisionNameSchema)