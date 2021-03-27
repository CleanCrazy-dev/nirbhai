const axios = require('axios')

const db = require("../models");
const rets_property_City = db.rets_property_City;
const rets_property_StateOrProvine = db.rets_property_StateOrProvine;
const rets_property_StreetDirection = db.rets_property_StreetDirection;
const rets_property_SubdivisionName = db.rets_property_SubdivisionName;
const rets_metadata_Property = db.rets_metadata_Property;
const rets_AddressRelation = db.rets_AddressRelation;
const rets_property_PropertyType = db.rets_property_PropertyType;
const rets_property_CondoType = db.rets_property_CondoType;
const rets_property_CommonWalls = db.rets_property_CommonWalls;
const rets_property_ParkingFeatures = db.rets_property_ParkingFeatures;

exports.getStateOrProvinceList = async (req, res) => {
  rets_AddressRelation.find().distinct('StateOrProvince', async function(err, result) {
    if (err) {
      res.send(err);
    } else {
      let data = [];
      
      await result.reduce(async (accum, element) => {
        await accum;

        if(element != "") data.push({value: element, viewValue: element});

      }, Promise.resolve(''));

      res.status(200).send(data);
    }
  });
};

exports.getCountyOrParishListByState = async (req, res) => {
  rets_AddressRelation.find({
    StateOrProvince: req.body.state
  }).sort({ CountyOrParish: 'asc' }).distinct('CountyOrParish', async function(err, result) {
    if (err) {
      res.send(err);
    } else if (result) {
      let data = [];
      
      await result.reduce(async (accum, element) => {
        await accum;

        if(element != "") data.push({value: element, viewValue: element});

      }, Promise.resolve(''));

      res.status(200).send(data);
    } else {
      res.status(200).send([]);
    }
  });
}

exports.getDistrictAndSubdivisionNameByCity = async (req, res) => {
  rets_AddressRelation.find({
    City: req.body.city
  }).sort({ District: 'asc' }).distinct('District', async function(err, result) {
    if (err) {
      res.send(err);
    } else if (result) {
      let data = {};
      
      await result.reduce(async (accum, element) => {
        await accum;

        if(element != "") {
          await rets_AddressRelation.find({ District: element }).sort({ SubdivisionName: 'asc' }).distinct('SubdivisionName', async function(err, subList) {
            if(err) {
              res.send(err);
            } else {
              data[element] = subList;
            }
          })
        }

      }, Promise.resolve(''));

      res.status(200).send(data);
    } else {
      res.status(200).send([]);
    }
  });
}

exports.getStreetDirectionList = async (req, res) => {
  rets_property_StreetDirection.find({}).exec(async function(err, result) { 
    if (err) {
      res.send(err);
    } else {
      let data = [];
      
      await result.reduce(async (accum, element) => {
        await accum;

        data.push({value: element['Long Value'], viewValue: element['Long Value']});

      }, Promise.resolve(''));

      res.status(200).send(data);
    }
  });
};

exports.getCityListByStateGroup = async (req, res) => {
  rets_AddressRelation.find().distinct('StateOrProvince', async function(err, stateList) {
    if (err) {
      res.send(err);
    } else {
      let data = [];

      await stateList.reduce(async (accum, state) => {
        await accum;

        if(state != "") {
          let stateCity = {disabled: false, name: state, cityList: []};

          await rets_AddressRelation.find({ StateOrProvince: state }).distinct('City', async function(err_c, result) { 
            if (err_c) {
              res.send(err_c);
            } else {
              
              await result.reduce(async (accum, element) => {
                await accum;
        
                if(element != "") stateCity['cityList'].push({value: element, viewValue: element});
        
              }, Promise.resolve(''));
            }
          });

          data.push(stateCity);
        }

      }, Promise.resolve(''));

      res.status(200).send(data);
    }
  })
  
};

exports.getCityListByStateAndCounty = async (req, res) => {
  rets_AddressRelation.find({
    StateOrProvince: req.body.state,
    CountyOrParish: req.body.county
  }).sort({ City: 'asc' }).distinct('City', async function(err, result) {
    if (err) {
      res.send(err);
    } else if (result) {
      let data = [];
      
      await result.reduce(async (accum, element) => {
        await accum;

        if(element != "") data.push({value: element, viewValue: element});

      }, Promise.resolve(''));

      res.status(200).send(data);
    } else {
      res.status(200).send([]);
    }
  });
}

exports.getSubdivisionNameList = async (req, res) => {
  rets_property_SubdivisionName.find({}).exec(async function(err, result) { 
    if (err) {
      res.send(err);
    } else {
      let data = [];
      
      await result.reduce(async (accum, element) => {
        await accum;

        data.push({value: element['Long Value'], viewValue: element['Long Value']});

      }, Promise.resolve(''));

      res.status(200).send(data);
    }
  });
};

exports.getSubdivisionNameListByCity = async (req, res) => {
  let query = {};
  query['City'] = req.body.city;
  // rets_AddressRelation.find(query).sort({ SubdivisionName: 'asc' }).distinct('SubdivisionName', async function(err, result) {
  rets_AddressRelation.aggregate([ {$match: query}, {$group: {"_id": '$SubdivisionName'}}, {$sort: {"_id": 1}}]).exec(async function(err, result) {
    if (err) {
      res.send(err);
    } else if (result) {
      let data = [];
      
      await result.reduce(async (accum, element) => {
        await accum;

        if(element._id != "" && element._id != "NONE") data.push({value: element._id, viewValue: element._id});

      }, Promise.resolve(''));

      res.status(200).send(data);
    } else {
      res.status(200).send([]);
    }
  });
}

exports.getPropertyType = async (req, res) => {
  rets_property_PropertyType.find({}).exec(async function(err, result) { 
    if (err) {
      res.send(err);
    } else {
      let data = [];
      
      await result.reduce(async (accum, element) => {
        await accum;

        data.push({value: element['Long Value'], viewValue: element['Long Value']});

      }, Promise.resolve(''));

      res.status(200).send(data);
    }
  });
}

exports.createAddressRelation = async (req, res) => {
  let totalRecord = await rets_metadata_Property.find().countDocuments();

  var limit = 1000;
  var offset = 0;

  createAddressRelationHandler(limit, offset, totalRecord);
  
  res.status(200).send('success');
}

async function createAddressRelationHandler(limit, offset, totalRecord) {
  console.log("offset = ", offset);
  await rets_metadata_Property.find().limit(limit).skip(offset).exec(async function(err, result) { 
    if (err) {
      console.log(err);
    } else {
      await result.reduce(async (accum, element) => {
        await accum;
        
        var data = {};
        data['StateOrProvince'] = element['StateOrProvince'];
        data['CountyOrParish'] = element['CountyOrParish'];
        data['City'] = element['City'];
        data['District'] = element['District'];
        data['SubdivisionName'] = element['SubdivisionName'];

        await rets_AddressRelation.updateOne(
          {
            StateOrProvince: data['StateOrProvince'],
            CountyOrParish: data['CountyOrParish'],
            City: data['City'],
            District: data['District'],
            SubdivisionName: data['SubdivisionName']
          }, 
          data,
          {upsert: true}
        ); 

      }, Promise.resolve(''));

      offset += limit;

      if(offset > totalRecord) return;
      else createAddressRelationHandler(limit, offset, totalRecord);
    }
  });
}


exports.getCondoTypeList = async (req, res) => {
  rets_property_CondoType.find({}).exec(async function(err, result) { 
    if (err) {
      res.send(err);
    } else {
      let data = [];
      
      await result.reduce(async (accum, element) => {
        await accum;

        data.push({value: element['Long Value'], viewValue: element['Long Value']});

      }, Promise.resolve(''));

      res.status(200).send(data);
    }
  });
}

exports.getCommonWallsList = async (req, res) => {
  rets_property_CommonWalls.find({}).exec(async function(err, result) { 
    if (err) {
      res.send(err);
    } else {
      let data = [];
      
      await result.reduce(async (accum, element) => {
        await accum;

        data.push({value: element['Long Value'], viewValue: element['Long Value']});

      }, Promise.resolve(''));

      res.status(200).send(data);
    }
  });
}

exports.getParkingFeatureList = async (req, res) => {
  rets_property_ParkingFeatures.find({}).exec(async function(err, result) { 
    if (err) {
      res.send(err);
    } else {
      let data = [];
      
      await result.reduce(async (accum, element) => {
        await accum;

        data.push({value: element['Long Value'], viewValue: element['Long Value']});

      }, Promise.resolve(''));

      res.status(200).send(data);
    }
  });
}