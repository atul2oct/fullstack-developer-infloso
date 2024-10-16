const express = require('express');
const app = express();

// routes
const userRoutes = require('./routes/user');

const database = require('./config/database');
const cookieParser = require('cookie-parser');
// To rate limit to protect against brute force attacks
const rateLimit = require('express-rate-limit');

const cors = require('cors');//front end ki request ko backend entertain kre
require('dotenv').config();

const PORT = process.env.PORT || 4000;

// database connect
database.connect();

// middleware
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
    'https://fullstack-developer-infloso.vercel.app',
    'https://fullstack-developer-infloso-git-main-atuls-projects-ec02cbcd.vercel.app',
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, origin); // Allow the request
            } else {
                callback(new Error('Not allowed by CORS')); // Reject the request
            }
        },
        credentials: true,
    })
);


// Rate Limiting Middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// routes
app.use('/api/v1/auth', userRoutes);
// default route
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"server is up and running..."
    })
});

app.listen(PORT,()=>{
    console.log(`App is running at port no.: ${PORT}`)
});