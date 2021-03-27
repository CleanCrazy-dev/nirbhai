const { authJwt } = require("../middlewares");
const controller = require("../controllers/property.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/property/recentList", controller.recentList);

  app.post("/api/property/propertySearchResult", controller.propertySearchResult);

  app.post("/api/property/PropertyById", controller.getPropertyById);

  app.post("/api/property/PropertyCalgarySearchResult", controller.PropertyCalgarySearchResult);
};