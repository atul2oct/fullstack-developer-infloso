const express = require('express');
const router = express.Router();

// Controllers
const {
    sendOTP,
    signUp,
    login,
    changePassword
} = require('../controllers/auth');

// Resetpassword controllers
// const {
//     resetPasswordToken,
//     resetPassword,
// } = require('../controllers/resetPassword');

// Middleware
const { auth } = require('../middleware/Auth');

//                      Routes for Login, Signup, and Authentication

// Route for user signup
router.post('/signup', signUp);

// Route for user login
router.post('/login', login);

// Route for sending OTP to the user's email
router.post('/sendotp', sendOTP);

// Route for Changing the password
router.post('/changepassword', auth, changePassword);

//                                      Reset Password

// Route for generating a reset password token
// router.post('/reset-password-token', resetPasswordToken);

// Route for resetting user's password after verification
// router.post("/reset-password", resetPassword)

module.exports = router;