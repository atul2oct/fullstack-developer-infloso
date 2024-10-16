import React, { useState } from 'react';
import Footer from '../components/common/Footer';
import { apiConnector } from '../services/apiConnector';
import { contactusEndpoint } from '../services/api';

const ContactUsPage = () => {

  const [loading,setLoading] = useState(false)


    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phoneNo: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
      setLoading(true)
      e.preventDefault();
      // Here you can handle the form submission (e.g., sending the data to your server)
      try{
        const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, formData)
        console.log("Email response- ",response);
        setFormData({ firstname: '',lastname: '',email: '',phoneNo: '',message: '', }); // Reset form
      }catch(error){
        console.log("Error: ",error.message)
      }
      setLoading(false)

    };

    return (
        <div className="bg-gray-100 text-richblack-5 min-h-screen flex flex-col w-11/12 mx-auto w-11/12 mx-auto">
            <header className="bg-richblue-600 text-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold">Contact Us</h1>
                    <p className="text-lg mt-4">We would love to hear from you!</p>
                </div>
            </header>

            <section className="container mx-auto py-20 text-richblack-900">
                <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>
                <form className="bg-white shadow-md rounded-lg p-8 max-w-xl mx-auto" onSubmit={handleSubmit}>
                    <div className='flex flex-col sm:flex-row sm:justify-between gap-x-4'>                    
                        <div className="mb-4">
                            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
                            Phone No.
                        </label>
                        <input
                            type="phoneNo"
                            id="phoneNo"
                            name="phoneNo"
                            value={formData.phoneNo}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500"
                    >
                        Send Message
                    </button>
                </form>
            </section>

            <Footer/>
        </div>
    );
};

export default ContactUsPage;
