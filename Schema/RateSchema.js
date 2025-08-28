const mongoose = require('mongoose')

const RateSchema = mongoose.Schema({
    bookId:{
        type:String,
        required:true
    },
    UserId:{
        type:String,
        required:true
    },
    Rate:{
        type:Number,
        required:true
    },
    Comment:{
        type:String,
        required:true
    }
})

const Rates = mongoose.model('Rates',RateSchema)
module.exports = Rates