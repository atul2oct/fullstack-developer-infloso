const express = require('express')
const app = express()

// const database = require('./config/database')
const cookieParser = require('cookie-parser')

const cors = require('cors')//front end ki request ko backend entertain kre
require('dotenv').config()

const PORT = process.env.PORT || 4000 

// database connect
// database.connect()

// middleware
app.use(express.json())
app.use(cookieParser())

// const allowedOrigins = [
//     "https://study-notion-ed-tech-project-rosy.vercel.app",
//     "https://study-notion-ed-tech-project-9aaemlo9o-atuls-projects-ec02cbcd.vercel.app",
// ];

// app.use(
//     cors({
//         origin: function (origin, callback) {
//             if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//                 callback(null, origin); // Allow the request
//             } else {
//                 callback(new Error('Not allowed by CORS')); // Reject the request
//             }
//         },
//         credentials: true,
//     })
// );




// routes

// http://localhost:4000/api/v1/course

// default route
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"server is up and running..."
    })
})

app.listen(PORT,()=>{
    console.log(`App is running at port no.: ${PORT}`)
})