const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/users");
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/users", users);

const port = process.env.PORT || 8000; // process.env.port is Heroku's port if you choose to deploy the app there

const listingsRouter = require("./routes/listings");
const usersRouter = require("./routes/users");

app.use("/listings", listingsRouter);
app.use("/users", usersRouter);

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

/*
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//for environment variables
require("dotenv").config();

//create express server
const app = express();
const port = process.env.PORT || 8000;

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(express.json());

//get this info from mongoDB (uri = where database is stored)
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
*/
