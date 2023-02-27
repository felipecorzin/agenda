const { response } = require('express');
const Note = require('../models/Note');

const createNote = (req, res = response) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    const note = new Note({
        title:   req.body.title,
        desc:   req.body.desc,
        img:    req.body.img
    });
    // Save infocar in the database
    Note.create( note ).then(() => {
      res.json({
          ok: true,
          note 
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
    Note.find(condition)
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
  
    Note.findById(id)
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

const updateNote = async(req, res = response ) => {

  if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
  }
  
  const id = req.params.id;
  
  Note.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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
  
const deleteNote = async(req, res = response ) => {
    const id = req.params.id;
    Note.findByIdAndRemove(id, { useFindAndModify: false })
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


const deleteAllNote = async(req, res = response ) => {
    Note.deleteMany({})
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
  createNote,
  findAll,
  findOne,
  updateNote,
  deleteNote,
  deleteAllNote
}