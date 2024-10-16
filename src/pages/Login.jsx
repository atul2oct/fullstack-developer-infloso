import React from 'react'
import loginImg from "../assets/login.webp"
import Template from '../components/auth/Template'

const Login = () => {
  return (
    <Template
        title="Welcome to MelodyVerse 🎶"
        description1="Log in to connect with your rhythm!"
        description2="Enter your credentials to explore, share, and vibe with fellow music lovers around the world."
        image={loginImg}
        formType="login"
    />
  )
}

export default Login