const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Creating the server
const app = express();

// // Connecting the DB
conectarDB();

app.use(cors());

app.use(express.json());

app.use('/api/books', require('./routes/book'));
// app.use('/api/authors', require('./routes/author'));

app.listen(4000, () => {
    console.log('The server is working correctly');
})

