# Connectverse Authentication System

## Overview

### MelodyVerse is a login and signup app built using React.js, Node.js (Express), MongoDB, and JWT for secure user authentication. This project demonstrates secure user registration, authentication, and JWT-based session management, adhering to best practices for a modern full-stack application.



## Features

- **User Registration**: Allows users to create an account with a unique username, email, and password.
- **User Login**: Authenticates users with their credentials and provides a JWT for secure session management.
- **Password Hashing**: User passwords are securely hashed using bcrypt.
- **JWT Authentication**: Utilizes JWT for secure authentication and protects routes.
- **Rate Limiting**: Implements rate limiting to protect against brute-force attacks, limiting the number of requests from a single IP address.
- **OTP Verification**: Generates and sends OTPs for user verification during signup or password reset using `otp-generator` and `nodemailer`.
- **Responsive Design**: Built with Tailwind CSS for a visually appealing and responsive UI that works across devices (desktop, tablet, mobile).
- **Input Validation**: Includes input validation to prevent invalid data entry.
- **User-Friendly Messages**: Provides clear error and success messages for user actions.
- **Forgot Password Functionality**: Basic implementation for users to initiate password recovery.

## Technology Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (jsonwebtoken library)
- **Email Sending**: nodemailer
- **OTP Generation**: otp-generator
- **Middleware**: express-rate-limit for rate limiting

## API Endpoints

### POST /api/v1/auth/signup
- Registers a new user.
- Requires username, email, and password.
- Returns a success message and JWT token upon successful registration.

### POST /api/v1/auth/login
- Authenticates a user.
- Requires username/email and password.
- Returns a JWT token upon successful authentication.

## Installation

1. Clone the repository:
   ```bash
   git clone git clone https://github.com/atul2oct/fullstack-developer-infloso.git
    ```
2. Install dependencies for both the frontend and backend:
    ```bash
   npm install
    ```
3. Start the frontend and backend server at same time (concurrently):
    ```bash
   npm run dev
    ```