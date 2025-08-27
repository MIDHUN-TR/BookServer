
const Mongoose = require('mongoose')


// Creating a connection to the MongoDB atlas
Mongoose.connect(process.env.MongoDBuri).then((res)=>{
    console.log('MongoDB atlas is connected')
}).catch((err)=>{
    console.log(err)
})