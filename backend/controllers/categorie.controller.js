const db = require("../models");
const Categorie = db.categories;
const Op = db.Sequelize.Op;

// Create and Save a new Categorie
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Categorie
  const categorie = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Categorie in the database
  Categorie.create(categorie)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Categorie."
      });
    });
};

// Retrieve all Categories from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Categorie.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Categories."
      });
    });
};

// Find a single Categorie with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Categorie.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Categorie with id=" + id
      });
    });
};

// Update a Categorie by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Categorie.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Categorie was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Categorie with id=${id}. Maybe Categorie was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Categorie with id=" + id
      });
    });
};

// Delete a Categorie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Categorie.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Categorie was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Categorie with id=${id}. Maybe Categorie was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Categorie with id=" + id
      });
    });
};

// Delete all Categories from the database.
exports.deleteAll = (req, res) => {
  Categorie.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Categories were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Categories."
      });
    });
};

// find all published Categorie
exports.findAllPublished = (req, res) => {
  Categorie.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Categories."
      });
    });
};
