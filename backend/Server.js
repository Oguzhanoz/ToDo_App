const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/ToDoRoute')

require('dotenv').config()

var app = express();
var cors = require('cors');
var PORT = process.env.port||5004

app.use(cors());
app.use(express.json())

mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log('Connected to MongoDB'))
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT,()=> console.log('Listening on: ${PORT}'))