const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require('cors')

// Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

// Middlewares
server.get('/', (req. res, next) => res.send('BackEnd'))

// Start Server
server.listen(3000)
