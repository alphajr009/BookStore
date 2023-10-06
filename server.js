const express = require("express");


const app =express();
require('dotenv').config();

const dbconfig = require('./db')
const booksRoute = require('./routes/book_details')

app.use(express.json())

app.use('/api/books', booksRoute)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Node Server Started using Nodemon!'));