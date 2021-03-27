const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ParkingFeaturesSchema = new Schema({
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
    collection: 'rets-property-ParkingFeatures'
})

module.exports = mongoose.model('rets-property-ParkingFeatures', ParkingFeaturesSchema)