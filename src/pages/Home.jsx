import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Surajshaw08' },
    { icon: IoIosMail, url: 'mailto:surajshaw17082004@gmail.com' },
    { icon: FaInstagram, url: 'https://www.instagram.com/ig_suraj08/' },
    { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/surajkrshaw08/' },
    { icon: FaPhoneAlt, url: 'tel:+6290315511' },
  ];

  return (
    <div className="relative bg-[#0f172a] text-white min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 py-12 overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="bg-[#0f172a] bg-opacity-5 backdrop-blur-lg p-6 ">
          <h2 className="text-lg sm:text-xl font-medium">Hello, It's Me</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2">Suraj Kr Shaw</h1>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 text-[#01d3e2] drop-shadow-[0_0_10px_#01d3e2]">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "React.js Specialist",
                2000,
                "Backend Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#01d3e2]"
            />
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
                className="text-[#01d3e2] border-2 border-[#01d3e2] p-2 rounded-full hover:bg-[#01d3e2] hover:text-black hover:shadow-[0_0_20px_#01d3e2] transition duration-300"
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
      </div>

      {/* Right Section - Profile Image */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center drop-shadow-[0_0_40px_#01d3e2]">
          <div className=" rounded-3xl p-1">
            <img
              src="/p1.png"
              alt="profile"
              className="w-60 sm:w-72 md:w-80 lg:w-[400px] rounded-3xl object-contain"
            />
        </div>
      </div>

      {/* Wave at bottom */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(150%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.39C186.58 72.91 83.24 94.07 0 113.07V0h1200v27.35c-87.17 22.62-183.15 44.93-319.39 56.39-104.49 8.65-202.91 6.26-337.22-8.61C411.89 57.94 370.94 50.35 321.39 56.39z"
            fill="#0f172a"
          ></path>
        </svg>
      </div> */}
    </div>
  );
};

export default Home;
