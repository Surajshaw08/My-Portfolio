import React from 'react';
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from 'react-icons/fa';
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
    <div className="bg-[#0f172a] text-white min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 py-12">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-lg sm:text-xl font-medium">Hello, It's Me</h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2">Suraj Kr Shaw</h1>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2">
          And I'm a <span className="text-[#01d3e2]">Full Stack Developer</span>
          <span className="text-[#01d3e2] animate-pulse ml-1">|</span>
        </h3>
        <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
          A passionate MERN Stack Developer who builds full-stack web apps that are fast,
          responsive, and clean. From frontends with React & Tailwind CSS to powerful backends
          with Node.js & Express — I love crafting seamless digital experiences.
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
          {socialLinks.map(({ icon: Icon, url }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#01d3e2] border-2 border-[#01d3e2] p-2 rounded-full hover:bg-[#01d3e2] hover:text-black transition"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
          <a
            href="/mynew2.pdf"
            download
            className="bg-[#01d3e2] text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Download CV
          </a>
          <Link to="/Projects">
            <button className="bg-[#01d3e2] text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
              Projects
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <div className="w-60 sm:w-72 md:w-80 lg:w-[400px] border-4 border-[#01d3e2] rounded-3xl overflow-hidden">
          <img
            src="/p1.png"
            alt="profile"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
