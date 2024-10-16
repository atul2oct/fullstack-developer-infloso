import React from 'react';
import { Link } from 'react-router-dom';
import CardHomePage from '../components/common/CardHomePage';
import Footer from '../components/common/Footer';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col w-11/12 mx-auto">
            {/* Hero Section */}
            <header className="bg-blue-600 text-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Connectverse</h1>
                    <p className="text-lg mb-8">
                        Your ultimate platform for seamless connections and interactions.
                    </p>
                    <Link to="/signup" className="bg-white text-blue-600 hover:text-white hover:border hover:bg-blue-600 duration-300 rounded-lg py-2 px-4 font-semibold">
                        Sign Up
                    </Link>
                    <Link to="/login" className="bg-transparent border border-white hover:bg-white duration-300 hover:text-blue-600 rounded-lg py-2 px-4 font-semibold ml-4">
                        Log In
                    </Link>
                </div>
            </header>

            {/* Features Section */}
            <section className="flex-grow container mx-auto py-20">
                <h2 className="text-4xl font-bold text-center mb-10">Why Choose Connectverse?</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  <CardHomePage title='Secure Authentication' description='Your data is safe with our secure login and registration system.'/>
                  <CardHomePage title='User-Friendly Interface' description='Navigate through the app with ease and enjoy a seamless experience.'/>
                  <CardHomePage title='Real-Time Notifications' description='Stay updated with real-time notifications for all your activities.'/>
                  <CardHomePage title='Responsive Design' description='Access Connectverse from any device, anywhere.'/>
                  <CardHomePage title='Community Engagement' description='Join a vibrant community and make meaningful connections.'/>
                  <CardHomePage title='OTP Verification' description='Enhance your account security with OTP-based verification.'/>
                </div>
            </section>

            {/* Footer Section */}
            <Footer/>
        </div>
    );
};

export default Home;