const { response } = require('express');
const Event = require('../models/Event');

const createEvent = async(req, res = response ) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    // Create a Evento
    const event = new Event ({
        title : req.body.title,
        desc  : req.body.desc,
        start   : req.body.start,
        end   : req.body.end,
        allDay   : req.body.allDay,
    });
    // Save Evento in the database
    Event.create( event ).then(() => {
        res.json({
            ok: true,
            event 
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

    Event.find(condition)
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

    Event.findById(id)
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

const updateEvent = async(req, res = response ) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
    const id = req.params.id;
    
    Event.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

const deleteEvent = async(req, res = response ) => {
    const id = req.params.id;
  
    Event.findByIdAndRemove(id, { useFindAndModify: false })
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

module.exports = {
    createEvent,
    findAll,
    findOne,
    updateEvent,
    deleteEvent
}