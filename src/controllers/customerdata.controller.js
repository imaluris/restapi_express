const CustomerData = require("../models/customerdata.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customerdata
    const customer = new CustomerData({
      name: req.body.name,
      surname: req.body.surname,
      dateofbirth: req.body.dateofbirth,
      gender: req.body.gender,
      country: req.body.country,
      province: req.body.province,
      residency: req.body.residency,
      address: req.body.address,
      residency: req.body.residency,
      user_id: req.body.user_id

    });
  
    // Save User in the database
    CustomerData.create(customer, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      else res.send(data);
    });
};

    exports.getall = (req, res) => {
  
        CustomerData.getall((err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving customers."
            });
          else res.send(data);
        });
      };

      exports.findById = (req, res) => {
        CustomerData.findById(req.params.id, (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Customer with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error retrieving Customer with id " + req.params.id
              });
            }
          } else res.send(data);
        });
      };

      exports.delete = (req, res) => {
        CustomerData.remove(req.params.id, (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Customer with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Could not delete Customer with id " + req.params.id
              });
            }
          } else res.send({ message: `Customer was deleted successfully!` });
        });
      };