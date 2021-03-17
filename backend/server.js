const express = require('express')
const mongoose = require('mongoose')
const db = mongoose.connection;
require('./Models/Product')
require('./Models/Avis')
require('./Models/Video')

const Product = mongoose.model('product')
const Avis = mongoose.model('avis')
const Video = mongoose.model('video')


const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost/siteatlas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('servidor funcionando 100%!')
});


app.get('/', (req, res)=>{
    res.json({"mensagem":"Servidor funcionando!"})
})

app.post('/product', (req, res)=>{
    const product = Product.create(req.body, (error)=>{
        if(error) return res.status(400).json({
            error: true,
            message: "Error: Not Saved, try again!"
        })
        return res.status(200).json({
            error: false,
            message: "Saved!"
        })
    })
})

//Route - create Avis
app.post('/avis', (req, res)=>{
    const avis = Avis.create(req.body, (error)=>{
        if(error) return res.status(400).json({
            error: true,
            message: "Error: Not Saved, try again!"
        })
        return res.status(200).json({
            error: false,
            message: "Saved!"
        })
    })
})

//Route - create Video
app.post('/video', (req, res)=>{
    const video = Video.create(req.body, (error)=>{
        if(error) return res.status(400).json({
            error: true,
            message: "Error: Not Saved, try again!"
        })
        return res.status(200).json({
            error: false,
            message: "Saved!"
        })
    })
})

app.listen(3001)