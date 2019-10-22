// dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan =require("morgan");
const port = process.env.PORT || 3000;
const app = express();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//  init home route for testing
app.get('/',(req,res)=>{
    res.json({
        "success": true,
        "home": "Connected to mini-netflix backend successfully!!!"
    })
})



// init app
app.listen(port,()=>{
    console.log("App is listening on:" +port);
})
module.exports = app;