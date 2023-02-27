const { Schema, model } = require('mongoose');

const EventSchema = Schema({
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    start: {
        type: String,
    },
    end: {
        type: String
    },
    allDay: {
        type: Boolean
    }
});

EventSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('Event', EventSchema );