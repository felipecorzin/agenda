const { Schema, model } = require('mongoose');

const NoteSchema = Schema({
    title: {
        type: String,
        index: true
    },
    desc: {
        type: String,
    },
    created: {
        type: Date
    },
    img: {
        type: String
    },
});

NoteSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

NoteSchema.pre('save', function( next ) {
    this.created = new Date();
    next();
});

module.exports = model('Note',  NoteSchema );