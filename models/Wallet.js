const { Schema, model } = require('mongoose');

const WalletSchema = Schema({
    title: {
        type: String,
        index: true
    },
    created: {
        type: Date
    },
});

WalletSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

WalletSchema.pre('save', function( next ) {
    this.created = new Date();
    next();
});

module.exports = model('Wallet',  WalletSchema );