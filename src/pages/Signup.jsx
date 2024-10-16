import React from 'react'
import signupImg from "../assets/signup.webp"
import Template from '../components/auth/Template'

const Signup = () => {
  return (
    <Template
        title="Join MelodyVerse 🎧"
        description1="Sign up and start your musical journey!"
        description2="Create an account to connect with artists, share your favorite tracks, and discover new music every day."
        image={signupImg}
        formType="signup"
    />
  )
}

export default Signup