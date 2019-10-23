// dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan =require("morgan");
const port = 3000;
const app = express();

// Include config 
// const configOptions = require("./config/config").get(env);
// console.log(configOptions.body);


// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app routes here
const mainRoutes = require("./routes/main");

app.use(mainRoutes);



// init app
app.listen(port,()=>{
    console.log("App is listening on:" +port);
})
module.exports = app;