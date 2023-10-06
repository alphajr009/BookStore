const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    author :{
        type: String,
        required: true
    },

    ISBN: {
        type: String,
        required: true
    },

},{
    timestamps: true,
})

const bookModel = mongoose.model('books',bookSchema)

module.exports = bookModel