const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commonWallsSchema = new Schema({
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
    collection: 'rets-property-CommonWalls'
})

module.exports = mongoose.model('rets-property-CommonWalls', commonWallsSchema)