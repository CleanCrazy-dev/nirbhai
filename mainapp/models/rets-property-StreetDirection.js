const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let propertyStreetDirectionSchema = new Schema({
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
    collection: 'rets-property-StreetDirection'
})

module.exports = mongoose.model('rets-property-StreetDirection', propertyStreetDirectionSchema)