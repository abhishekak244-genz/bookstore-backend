// import all packages
// loads .env file contents into process .env by default 
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes/allRoutes')
require('./config/db')


// create server using express packages
const server = express()

// enable cors in server
server.use(cors())
// parse json to js content : Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
server.use(express.json())

// use routes in server
server.use(routes)

// SETUP a port number TO RUN SERVER IN INTERNET 
const PORT = process.env.PORT

// STARt  server  to listen clent request to the port /avilable server  in the internet
server.listen(PORT,()=>{
console.log('sever started in the given the port number & waiting for the client request !!!');
})

//handling global error in server using application specific middle ware 
server.use((err,req,res,next)=>{
    res.status(500).json(err.message)
})

// resolve api (get request http://localhost:3000/) using the express 
server.get('/',(req,res)=>{
    res.status(200).send(`<h1>sever started in the given the port number & waiting for the client request !!!</h1>`
    )
})
