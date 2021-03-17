const mongoose = require('mongoose')

const Video = new mongoose.Schema({
    url_video: {
        type: String,
    }
},
{
    timestamps: true,
})

mongoose.model('video', Video)
