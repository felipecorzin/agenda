const { Schema, model } = require('mongoose');

const TransactionSchema = Schema({
    title: {
        type: String,
    },
    amount: {
         type: Number,
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
    lat: {
        type: Number,
    },
    lng: {
        type: Number,
    },
    wallet: {
        type: String
    }
});

TransactionSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

TransactionSchema.pre('save', function( next ) {
    this.created = new Date();
    next();
});

module.exports = model('Transaction',  TransactionSchema );