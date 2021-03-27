const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["Buyer", "Admin", "Seller"];
db.rets_metadata_Property = require("./rets-metadata-Property");
db.rets_metadata_Property_Calgary_Residential = require('./rets-metadata-Property_Calgary_Residential');
db.rets_property_City = require('./rets-property-City');
db.rets_property_StateOrProvine = require('./rets-property-StateOrProvince');
db.rets_property_StreetDirection = require('./rets-property-StreetDirection');
db.rets_property_SubdivisionName = require('./rets-property-SubdivisionName');
db.rets_AddressRelation = require('./rets-AddressRelation');
db.rets_property_PropertyType = require('./rets-property-PropertyType');

db.rets_property_CondoType = require('./rets-property-CondoType');
db.rets_property_CommonWalls = require('./rets-property-CommonWalls');
db.rets_property_ParkingFeatures = require('./rets-property-ParkingFeatures');

module.exports = db;