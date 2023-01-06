module.exports = app => {
  const handmodels = require("../controllers/handmodel.controller.js");

  var router = require("express").Router();

  // Create a new HandModel
  // router.post("/", handmodels.create);
  router.post("/add", handmodels.create);

  // Retrieve all HandModels
  router.get("/", handmodels.findAll);

  // Retrieve all published HandModels
  router.get("/published", handmodels.findAllPublished);

  // Retrieve a single HandModel with id
  router.get("/:id", handmodels.findOne);

  // Update a HandModel with id
  router.put("/:id", handmodels.update);

  // Delete a HandModel with id
  router.delete("/:id", handmodels.delete);

  // Create a new HandModel
  router.delete("/", handmodels.deleteAll);

  app.use("/api", router);
};
