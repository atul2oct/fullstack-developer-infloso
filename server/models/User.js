const mongoose = require('mongoose')

// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema({
    // Define the name field with type String, required, and trimmed
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    // Define the password field with type String and required
    password:{
        type:String,
        required:true,
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile",
    },
    image:{
        type:String,
        required:true,
    },
    token:{
        type:String,
    },
    resetPasswordExipres:{
        type:Date,
    },
})
module.exports = mongoose.model("User",userSchema)