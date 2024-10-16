const express = require('express');
const app = express();

// routes
const userRoutes = require('./routes/user');

const database = require('./config/database');
const cookieParser = require('cookie-parser');


const cors = require('cors');//front end ki request ko backend entertain kre
require('dotenv').config();

const PORT = process.env.PORT || 4000;

// database connect
database.connect();

// middleware
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
    process.env.FRONE_END_URL_1 ,
    process.env.FRONE_END_URL_2 ,
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