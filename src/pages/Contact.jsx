import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-16 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl font-bold text-center mb-4">
          Contact <span className="text-[#01d3e2]">Me</span>
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Got a question or want to work together? Drop me a message!
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01d3e2]"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01d3e2]"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Your Message</label>
            <textarea
              placeholder="Type your message here..."
              rows="5"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#01d3e2]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#01d3e2] text-black font-semibold py-2 px-6 rounded-full hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>Email: <a href="mailto:you@example.com" className="text-[#01d3e2]">you@example.com</a></p>
          <p>Phone: <span className="text-[#01d3e2]">+91 12345 67890</span></p>
          <p>Location: <span className="text-[#01d3e2]">New Delhi, India</span></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
