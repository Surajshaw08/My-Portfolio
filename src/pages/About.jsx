import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-16 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center mb-6">
          About <span className="text-[#01d3e2]">Me</span>
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Who I am, what I do, and why I love it.
        </p>

        <div className="md:flex items-center gap-10">
          {/* Left - Image */}
          <div className="flex justify-center md:w-1/3 mb-10 md:mb-0">
            <img
              src="/vxt266.jpg" // Replace with your actual image file
              alt="Suraj Kumar"
              className="w-60 h-60 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Right - About Text */}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4 text-[#01d3e2]">I'm Suraj Kumar</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a passionate <span className="text-white font-medium">Frontend Developer</span> with a knack for crafting clean, elegant, and responsive interfaces.
              I love turning ideas into visually appealing and functional products.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a strong foundation in HTML, CSS, JavaScript, React, and Tailwind CSS,
              I build applications that are not only good-looking but also optimized for performance and user experience.
            </p>
            <div className="mt-6">
              <a
                href="/Suraj_Resume.pdf"
                className="bg-[#01d3e2] text-black font-semibold px-6 py-2 rounded-full hover:scale-105 transition"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
