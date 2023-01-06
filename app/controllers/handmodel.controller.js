const db = require("../models");
const HandModel = db.handmodels;

// Create and Save a new HandModel
exports.create = (req, res) => {
  // Validate request
  if (req.body.data.title=="") {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a HandModel
  const handmodel = new HandModel({
    availability: req.body.data.availability,
    from: req.body.data.from,
    ethnic: req.body.data.ethnic,
    expereience: req.body.data.expereience,
    gender: req.body.data.gender,
    height: req.body.data.height,
    nationality: req.body.data.nationality,
    shoesize: req.body.data.shoesize,
    skintone: req.body.data.skintone,
    published: req.body.data.published ? req.body.data.published : false,
    filename: req.body.data.filename
  });

  handmodel
    .save(handmodel)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the HandModel."
      });
    });
};

// Retrieve all HandModels from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  HandModel.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving handmodels."
      });
    });
};

// Find a single HandModel with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  HandModel.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found HandModel with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving HandModel with id=" + id });
    });
};

// Update a HandModel by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  HandModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update HandModel with id=${id}. Maybe HandModel was not found!`
        });
      } else res.send({ message: "HandModel was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating HandModel with id=" + id
      });
    });
};

// Delete a HandModel with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  HandModel.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete HandModel with id=${id}. Maybe HandModel was not found!`
        });
      } else {
        res.send({
          message: "HandModel was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete HandModel with id=" + id
      });
    });
};

// Delete all HandModels from the database.
exports.deleteAll = (req, res) => {
  HandModel.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} HandModels were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all handmodels."
      });
    });
};

// Find all published HandModels
exports.findAllPublished = (req, res) => {
  HandModel.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving handmodels."
      });
    });
};
