const { authJwt } = require("../middlewares");
const controller = require("../controllers/basicLookup.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/basicLookup/StateOrProvince", controller.getStateOrProvinceList);

  app.post("/api/basicLookup/CountyOrParishListByState", controller.getCountyOrParishListByState);

  app.post("/api/basicLookup/DistrictAndSubdivisionNameByCity", controller.getDistrictAndSubdivisionNameByCity);
  app.get("/api/basicLookup/StreetDirection", controller.getStreetDirectionList);

  app.get("/api/basicLookup/CityListByStateGroup", controller.getCityListByStateGroup);
  app.post("/api/basicLookup/CityListByStateAndCounty", controller.getCityListByStateAndCounty);

  app.get("/api/basicLookup/SubdivisionName", controller.getSubdivisionNameList);
  app.post("/api/basicLookup/SubdivisionNameByCity", controller.getSubdivisionNameListByCity);

  app.get("/api/basicLookup/PropertyType", controller.getPropertyType);

  app.get("/api/basicLookup/createAddressRelation", controller.createAddressRelation);

  app.get("/api/basicLookup/CondoType", controller.getCondoTypeList);
  
  app.get("/api/basicLookup/CommonWallsList", controller.getCommonWallsList);
  
  app.get("/api/basicLookup/ParkingFeatureList", controller.getParkingFeatureList);
};