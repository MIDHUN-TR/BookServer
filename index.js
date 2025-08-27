require('dotenv').config()


require('./DBconnect/MongoDBconnect')
const express = require('express')
const cors = require('cors')


const server = express()

// implementing application level authentication
server.use(cors())
server.use(express.json()) 

// setting a default port 
const PORT = 3000 || process.env.PORT

server.listen(PORT,()=>{
    console.log("Server Running at ",PORT)
})

