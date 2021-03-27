const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let propertyCitySchema = new Schema({
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
    collection: 'rets-property-City'
})

module.exports = mongoose.model('rets-property-City', propertyCitySchema)