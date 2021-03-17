const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    url_01: {
        type: String,
    },
    title_01: {
        type: String,
    },
    description_01: {
        type: String,
    },
    url_02: {
        type: String,
    },
    title_02: {
        type: String,
    },
    description_02: {
        type: String,
    },
    url_03: {
        type: String,
    },
    title_03: {
        type: String,
    },
    description_03: {
        type: String,
    },
},
{
    timestamps: true,
})

mongoose.model('product', Product)
