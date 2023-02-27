const { response } = require('express');
const Transaction = require('../models/Transaction');

const createTransaction = (req, res = response) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    const transaction = new Transaction({
        title:   req.body.title,
        desc:   req.body.desc,
        amount: req.body.amount,
        img:    req.body.img,
        lat:    req.body.lat,
        lng:    req.body.lng,
        wallet: req.body.wallet
    });
    // Save infocar in the database
    Transaction.create( transaction ).then(() => {
      res.json({
          ok: true,
          transaction 
      });
      }).catch( err => {
          res.json({
              ok: false,
              err
          });
      });
};

const findAll = async(req, res = response ) => {

    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    Transaction.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

};

const findOne = async(req, res = response ) => {
    const id = req.params.id;
  
    Transaction.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

const updateTransaction = async(req, res = response ) => {

  if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
  }
  
  const id = req.params.id;
  
  Transaction.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
  .then(data => {
      if (!data) {
      res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
      });
      } else res.send({ message: "Tutorial was updated successfully." });
  })
  .catch(err => {
      res.status(500).send({
      message: "Error updating Tutorial with id=" + id
      });
  });

};
  
const deleteTransaction = async(req, res = response ) => {
    const id = req.params.id;
    Transaction.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
  
};


const deleteAllTransaction = async(req, res = response ) => {
    Transaction.deleteMany({})
    .then(data => {
        res.send({
            message: `${data.deletedCount} Tutorials were deleted successfully!`
        });
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while removing all tutorials."
        });
    });
};

module.exports = {
    createTransaction,
    findAll,
    findOne,
    updateTransaction,
    deleteTransaction,
    deleteAllTransaction
  }