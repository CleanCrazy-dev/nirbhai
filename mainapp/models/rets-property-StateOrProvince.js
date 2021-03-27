const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let propertyStateOrProvinceSchema = new Schema({
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
    collection: 'rets-property-StateOrProvince'
})

module.exports = mongoose.model('rets-property-StateOrProvince', propertyStateOrProvinceSchema)