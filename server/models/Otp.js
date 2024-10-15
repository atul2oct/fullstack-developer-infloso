const mongoose = require('mongoose');
const mailSender = require('../utils/mailSender');
const emailTemplate = require('../mail/templates/emailVerificationTemplate');

const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60,// The document will be automatically deleted after 5 minutes of its creation time. TTL index will delete the document 5 minutes (300 seconds) after its creation
    }
});

// a function to send emails
async function sendVerificationEmail(email,otp) {
	// Send the email
    try{
        const mailResponse = await mailSender(email,"Verification Email from MelodyVerse",emailTemplate(otp));
        console.log("Email send Successfully: ",mailResponse.response);
    }catch(error){
        console.log(`Something went wrong in mail sender in otp model error: ${error}`);
		throw error;
    }
}

otpSchema.pre("save",async function (next) {
    console.log("New document saved to database");    
    // Only send an email when a new document is created
    if(this.isNew){
        await sendVerificationEmail(this.email,this.otp);
    }
    next();    
});

module.exports = mongoose.model("Otp",otpSchema)