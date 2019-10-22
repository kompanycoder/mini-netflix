const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan =require("morgan");
const port = process.env.PORT || 3000;
const app = express();

app.listen(()=>{
    console.log("App is listening on:" +port);
})
module.exports = app;