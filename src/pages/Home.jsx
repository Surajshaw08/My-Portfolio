import React from 'react';
import {FaGithub,FaTwitter,FaInstagram,FaLinkedinIn,FaPhoneAlt,} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Surajshaw08' },
    { icon: FaTwitter, url: 'https://twitter.com/yourhandle' },
    { icon: FaInstagram, url: 'https://www.instagram.com/ig_suraj08/' },
    { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/surajkrshaw08/' },
    { icon: FaPhoneAlt, url: 'tel:+6290315511' },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-16 bg-[#0f172a] text-white h-screen">
      {/* Left Section */}
      <div className="max-w-xl md:w-1/2">
        <h2 className="text-xl text-white font-semibold">Hello, It's Me</h2>
        <h1 className="text-5xl md:text-6xl font-extrabold mt-2">Suraj Kr Shaw</h1>
        <h3 className="text-2xl md:text-3xl font-semibold mt-2">
          And I'm a <span className="text-[#01d3e2]">Full stack Developer</span>
          <span className="text-[#01d3e2] animate-pulse">|</span>
        </h3>
        <p className="mt-4 text-gray-400">
          a passionate MERN Stack Developer who loves building full-stack web apps that are fast,
          clean, and user-friendly. From crafting responsive frontends with React and Tailwind CSS
          to developing robust backends with Node.js and Express, I bring ideas to life with clean
          code and smart design. Check out my projects, grab my CV, and feel free to connect!
        </p>

        {/* Social Icons */}
        <div className="flex space-x-5 mt-6">
          {socialLinks.map(({ icon: Icon, url }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(1,211,226)] border-2 border-[#01d3e2] p-2 rounded-full hover:bg-[#01d3e2] hover:text-black transition"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="space-x-4 mt-6">
          <a
            href="/mynew2.pdf"
            download
            className="bg-[#01d3e2] text-black px-8 py-2 rounded-full font-semibold hover:scale-105 transition inline-block"
          >
            Download CV
          </a>
          <Link to="/Projects">
            <button className="bg-[#01d3e2] text-black px-8 py-2 rounded-full font-semibold hover:scale-105 transition cursor-pointer">
              Projects
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="mt-12 md:mt-0 md:w-1/3 flex justify-center items-center border-4 max-w-[500px] mx-auto overflow-hidden rounded-4xl">
        <img
          src="/p1.png" // Transparent PNG recommended
          alt="profile"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
