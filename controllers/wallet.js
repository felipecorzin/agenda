const { response } = require('express');
const Wallet = require('../models/Wallet');

const createWallet = (req, res = response) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    const wallet = new Wallet({
        title: req.body.title
    });
    // Save infocar in the database
    Wallet.create( wallet ).then(() => {
      res.json({
          ok: true,
          wallet 
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
    Wallet.find(condition)
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
  
    Wallet.findById(id)
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

const deleteWallet = async(req, res = response ) => {
    const id = req.params.id;
    Wallet.findByIdAndRemove(id, { useFindAndModify: false })
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


const deleteAllWallet = async(req, res = response ) => {
    Wallet.deleteMany({})
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
    createWallet,
    findAll,
    findOne,
    deleteWallet,
    deleteAllWallet
}