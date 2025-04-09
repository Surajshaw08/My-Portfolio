import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn,FaPhoneAlt } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-16 bg-[#0f172a] text-white h-screen">
            {/* Left Section */}
            <div className="max-w-xl md:w-1/2">
                <h2 className="text-xl text-white font-semibold">Hello, It's Me</h2>
                <h1 className="text-5xl md:text-6xl font-extrabold mt-2">Suraj Kumar</h1>
                <h3 className="text-2xl md:text-3xl font-semibold mt-2">
                    And I'm a <span className="text-[#01d3e2]">Frontend Developer</span><span className="text-[#01d3e2] animate-pulse">|</span>
                </h3>
                <p className="mt-4 text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nulla sed saepe rerum, animi expedita.
                </p>

                {/* Social Icons */}
                <div className="flex space-x-5 mt-6">
                    {[FaGithub, FaTwitter, FaInstagram, FaLinkedinIn,FaPhoneAlt].map((Icon, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="text-[rgb(1,211,226)] border-2 border-[#01d3e2] p-2 rounded-full hover:bg-[#01d3e2] hover:text-black transition"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>


                <div className=' space-x-4'>
                {/* CV Button */}
                <button className="mt-6 bg-[#01d3e2] text-black px-8 py-2 rounded-full font-semibold hover:scale-105 transition">
                    Download CV
                </button>
                {/* CV Button */}
                <button className="mt-6 bg-[#01d3e2] text-black px-8 py-2 rounded-full font-semibold hover:scale-105 transition">
                    Projects
                </button>

                </div>
            </div>

            {/* Right Section - Image */}
            <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center items-center border-4 max-w-[500px] mx-auto overflow-hidden rounded-4xl">
                <img
                    src="/p1.png" // Make sure it's a transparent PNG
                    alt="profile"
                    className="w-full h-full object-contain"
                />
            </div>



        </div>
    );
};

export default Home;
