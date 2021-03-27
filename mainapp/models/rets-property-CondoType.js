const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let condoTypeSchema = new Schema({
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
    collection: 'rets-property-CondoType'
})

module.exports = mongoose.model('rets-property-CondoType', condoTypeSchema)