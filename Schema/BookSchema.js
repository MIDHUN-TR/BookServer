const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Image:{
        type:String,
        required:true
    },
    URL:{
        type:String,
        required:true
    }
})


const book  = mongoose.model("Books",BookSchema)
module.exports = book