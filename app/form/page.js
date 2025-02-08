'use client';

import { motion } from "framer-motion";
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    const [isButtonHovered, setIsButtonHovered] = useState(false)

    return (
        <>
            <form onSubmit={handleSubmit} className="  font-inter max-w-[80%] mx-auto p-6 bg-black text-white space-y-4     h-[100vh] flex flex-col justify-evenly ">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-2xl opacity-50">First name *</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full focus:outline-none border-b border-gray-400 bg-black text-white p-2" />
                    </div>
                    <div>
                        <label className="block text-2xl opacity-50">Last name *</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full focus:outline-none border-b border-gray-400 bg-black text-white p-2" />
                    </div>
                </div>
                <div>
                    <label className="block text-2xl opacity-50">Company name</label>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full focus:outline-none border-b border-gray-400 bg-black text-white p-2" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-2xl opacity-50">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full focus:outline-none border-b border-gray-400 bg-black text-white p-2" />
                    </div>
                    <div>
                        <label className="block text-2xl opacity-50">Phone number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full focus:outline-none border-b border-gray-400 bg-black text-white p-2" />
                    </div>
                </div>
                <div>
                    <label className="block text-2xl opacity-0">What service are you interested in</label>
                    <p className=' opacity-50 text-2xl'>What service are you interested in</p>
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full focus:outline-none border-b border-gray-400 bg-black text-white p-2">
                        <option className='' value=""></option>
                        <option value="web-design">
                            Branding</option>
                        <option value="seo">Graphic Design</option>
                        <option value="marketing">Web Design</option>
                        <option value="marketing">Web Development</option>
                        <option value="marketing">Motion Graphics</option>
                    </select>
                </div>
                <div>
                    <label className="block text-2xl opacity-50">Your budget</label>
                    <input type="text" name="budget" value={formData.budget} onChange={handleChange} className="w-full focus:outline-none border-b border-gray-400 bg-black text-white p-2" />
                </div>

                <div className=" flex justify-between">
                    <p className=" text-[1.4vw] w-1/2 font-light">Our team strives to respond as quickly as possible, usually within 24-48 hours.</p>
                    <div className=" relative  w-full flex justify-end items-center">
                      <div className=" absolute w-full h-[1px] bg-white" />
                        <button
                            onMouseEnter={() => setIsButtonHovered(true)}
                            onMouseLeave={() => setIsButtonHovered(false)}
                            className=' font-inter w-fit h-fit bg-black relative overflow-hidden cta-button-clamps font-light border-[1px] p-2 px-10 rounded-full '>
                            <motion.p
                                className=''
                                animate={{
                                    y: isButtonHovered ? "-100%" : "0%",
                                }}
                                transition={{ duration: 0.2 }}
                            >Send</motion.p>
                            <motion.p
                                className=' absolute'
                                animate={{
                                    y: isButtonHovered ? "-100%" : "0",
                                }}
                                transition={{ duration: 0.2 }}
                            >Send</motion.p>
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
