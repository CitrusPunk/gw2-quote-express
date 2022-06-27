const db = require("../models");
const Author = db.authors;
const Op = db.Sequelize.Op;

// Create and Save a new Author
exports.create = (req, res) => {
  // Validate request
  if (!req.body.first_name) {
    res
      .status(400)
      .send({
        message: "The author needs at least a first name; This can't be empty!",
      });
    return;
  }
  // Create a Author
  const author = {
    first_name: req.body.first_name,
    laste_name: req.body.last_name,
    race: req.body.race,
    description: req.body.description,
  };
  // Save Author in database
  Author.create(author)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Author.",
      })
    );
};

// Retrieve all Authors from the database.
exports.findAll = (req, res) => {
  const name = req.query.name; // TODO: maybe adjust to search all attributes
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  Author.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving authors.",
      });
    });
};

// Find a single Author with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Author.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Author with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Author with id=" + id,
      });
    });
};

// Update a Author by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Author.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Author was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Author with id=${id}. Maybe Author was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Author with id=" + id,
      });
    });
};

// Delete a Author with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Author.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Author was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Author with id=${id}. Maybe Author was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Author with id=" + id,
      });
    });
};

// Delete all Authors from the database.
exports.deleteAll = (req, res) => {
    Author.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Authors were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all authors.",
      });
    });
};