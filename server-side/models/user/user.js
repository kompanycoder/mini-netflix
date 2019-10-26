// include mongoose
const mongoose = require("mongoose");
// create schema
const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        max: 50,
        min: 2
    },
    lastName:{
        type: String,
        required: true,
        max: 50,
        min: 2
    },
    email:{
        type: String,
        required: true,
        max: 50,
        min: 2
    },
    city: {
        type: String,
        required: true,
        max: 50,
        min: 2
    },
    passwordOne: {
        type: String,
        required: true,
        max: 50,
        min: 2
    },
    passwordCopy: {
        type: String,
        required: true,
        max: 50,
        min: 2
    },
    pictureUrl: {
        type: String,
        required: true,
        max: 50,
        min: 2
    }
});
// create model
const User = mongoose.Model("User", userSchema);

// export object
module.exports = {
    User
};
