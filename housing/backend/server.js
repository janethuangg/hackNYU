const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//for environment variables
require('dotenv').config();

//create express server
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

//get this info from mongoDB (uri = where database is stored)
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const listingsRouter = require('./routes/listings');
const usersRouter = require('./routes/users');

app.use('/listings', listingsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});