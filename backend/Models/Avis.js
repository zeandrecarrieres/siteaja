const mongoose = require('mongoose')

const Avis = new mongoose.Schema({
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
    }
},
{
    timestamps: true,
})

mongoose.model('avis', Avis)
