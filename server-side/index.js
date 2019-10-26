// dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
// const port = 3000;
const app = express();

// include user and movie models
const { User } = require("./models/user/user");
const { Movie } = require("./models/movie/movie");
console.log(User);
console.log(Movie);
// Include config
const configOptions = require("./config/config").get(process.env.NODE_ENV);
// console.log(configOptions);

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app routes here
const mainRoutes = require("./routes/main");
const userRoutes = require("./routes/user/userRoutes");
const movieRoutes = require("./routes/movie/movieRoutes");

// include routes in app
app.use(mainRoutes);
app.use(userRoutes);
app.use(movieRoutes);

// init app
app.listen(configOptions.port, () => {
  console.log("App backend is listening on:" + configOptions.port);
});
module.exports = app;
