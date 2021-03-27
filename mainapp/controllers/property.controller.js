const axios = require('axios')

const db = require("../models");
const rets_metadata_Property = db.rets_metadata_Property;
const rets_metadata_Property_Calgary_Residential = db.rets_metadata_Property_Calgary_Residential;

let dbConfig = require('../config/db.config');

const PROPERTY_API = dbConfig.PROPERTY_API;

exports.recentList = async (req, res) => {
  rets_metadata_Property.find({}).sort({ModificationTimestamp: 'desc'}).limit(15).exec(async function(err, result) { 
    if (err) {
      res.send(err);
    } else {
      // let data = [];
      
      // let idList = [];
      
      // await result.reduce(async (accum, element) => {
      //   await accum;

      //   idList.push(element.ListingKeyNumeric);

      // }, Promise.resolve(''));

      // await axios
      //   .post(PROPERTY_API, {
      //     'idList': JSON.stringify(idList)
      //   })
      //   .then(res => {
      //     data.push({"element": result, "resource": res.data});
      //   })
      //   .catch(error => {
      //     console.error(error)
      //   });

      res.status(200).send(result);
    }
  });
};

exports.propertySearchResult = async (req, res) => {
  var query = {};
  if (req.body.city != '') query['City'] = req.body.city;
  if (req.body.subdivisionName != '') query['SubdivisionName'] = req.body.subdivisionName;
  if (req.body.propertyType != '') query['PropertyType'] = req.body.propertyType;

  let totalRecord = await rets_metadata_Property.find(query).countDocuments();

  rets_metadata_Property.find(query).sort({ModificationTimestamp: 'desc'}).limit(req.body.limit).skip(req.body.offset).exec(async function(err, result) { 
    if (err) {
      res.send(err);
    } else {
      let data = [];
      
      // await result.reduce(async (accum, element) => {
      //   await accum;

      //   await axios
      //     .post(PROPERTY_API, {
      //       'id': element.ListingKeyNumeric
      //     })
      //     .then(res => {
      //       data.push({"element": element, "resource": res.data});
      //     })
      //     .catch(error => {
      //       console.error(error)
      //     });

      // }, Promise.resolve(''));

      let idList = [];
      
      await result.reduce(async (accum, element) => {
        await accum;

        idList.push(element.ListingKeyNumeric);

      }, Promise.resolve(''));

      await axios
        .post(PROPERTY_API, {
          'idList': JSON.stringify(idList)
        })
        .then(res => {
          data.push({"element": result, "resource": res.data});
        })
        .catch(error => {
          console.error(error)
        });

      res.status(200).send({data, totalRecord});
    }
  });
};

exports.getPropertyById = async (req, res) => {
  var query = {};
  var ListingKeyNumeric = req.body.ListingKeyNumeric;
  if (ListingKeyNumeric != '') query['ListingKeyNumeric'] = ListingKeyNumeric;
  else {
    res.status(500).send("There is not exist data");
    return;
  }
  if(req.body.City == "Calgary") {
    rets_metadata_Property_Calgary_Residential.find(query).exec(async function(err, result) { 
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(result);
      }
    });
  } else {
    rets_metadata_Property.find(query).exec(async function(err, result) { 
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(result);
      }
    });
  }
};

exports.PropertyCalgarySearchResult = async (req, res) => {
  var query = {};
  if (req.body.city != '') query['City'] = req.body.city;
  if (req.body.district != '') query['District'] = req.body.district;
  if (req.body.subdivisionName != '') query['SubdivisionName'] = req.body.subdivisionName;

  if(req.body.city == "Calgary") {
    let totalRecord = await rets_metadata_Property_Calgary_Residential.find(query).countDocuments();

    rets_metadata_Property_Calgary_Residential.find(query).sort({ModificationTimestamp: 'desc'}).limit(req.body.limit).skip(req.body.offset).exec(async function(err, result) { 
      if (err) {
        res.send(err);
      } else {
        res.status(200).send({result, totalRecord});
      }
    });
  } else {
    let totalRecord = await rets_metadata_Property.find(query).countDocuments();

    rets_metadata_Property.find(query).sort({ModificationTimestamp: 'desc'}).limit(req.body.limit).skip(req.body.offset).exec(async function(err, result) { 
      if (err) {
        res.send(err);
      } else {
        res.status(200).send({result, totalRecord});
      }
    });
  }
  
};