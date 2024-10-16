import React from 'react';
import Footer from '../components/common/Footer';

const AboutPage = () => {
    return (
        <div className="bg-gray-100 text-richblack-5 min-h-screen flex flex-col w-11/12 mx-auto">
            <header className="bg-richblue-600 text-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold">About Connectverse</h1>
                    <p className="text-lg mt-4">Connecting people through meaningful interactions.</p>
                </div>
            </header>

            <section className="container mx-auto w-11/12 py-20">
                <h2 className="text-4xl font-bold text-center mb-10">Our Mission</h2>
                <p className="text-lg text-center mb-4">
                    At Connectverse, we aim to provide a platform that fosters connections and enhances communication among individuals. 
                    Our goal is to create a vibrant community where users can engage, share ideas, and collaborate seamlessly.
                </p>

                <h2 className="text-4xl font-bold text-center mt-10 mb-10">Our Values</h2>
                <ul className="list-disc list-inside mx-auto max-w-2xl text-lg">
                    <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
                    <li>Innovation: We are committed to continuous improvement and innovation.</li>
                    <li>Community: We foster a sense of community and belonging.</li>
                    <li>Security: We prioritize the security and privacy of our users.</li>
                </ul>
            </section>

            <Footer/>
        </div>
    );
};

export default AboutPage;
