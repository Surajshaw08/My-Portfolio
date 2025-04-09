import React from 'react';

const projects = [
  {
    title: 'Password Manager App',
    image: '/images/password-manager.png',
    description: 'A secure password manager with login, signup, and encrypted storage.',
    github: 'https://github.com/yourname/password-manager',
    demo: 'https://your-password-manager.vercel.app',
  },
  {
    title: 'Portfolio Website',
    image: '/images/portfolio.png',
    description: 'A modern developer portfolio made with React and Tailwind CSS.',
    github: 'https://github.com/yourname/portfolio',
    demo: 'https://yourportfolio.vercel.app',
  },
  {
    title: 'Blog App',
    image: '/images/blog-app.png',
    description: 'A full-stack blog platform with admin dashboard and MySQL database.',
    github: 'https://github.com/yourname/blog-app',
    demo: 'https://yourblogapp.netlify.app',
  },
  {
    title: 'Weather App',
    image: '/images/weather.png',
    description: 'A live weather app using OpenWeatherMap API and React.',
    github: 'https://github.com/yourname/weather-app',
    demo: 'https://yourweatherapp.vercel.app',
  },
  {
    title: 'E-commerce Store',
    image: '/images/ecommerce.png',
    description: 'An e-commerce website with cart, checkout, and payment gateway.',
    github: 'https://github.com/yourname/ecommerce-store',
    demo: 'https://yourstore.vercel.app',
  },
  {
    title: 'Chat App',
    image: '/images/chat-app.png',
    description: 'A real-time chat application using Socket.IO and Node.js.',
    github: 'https://github.com/yourname/chat-app',
    demo: 'https://yourchatapp.vercel.app',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-[#01d3e2]">Projects</span>
        </h2>
        <p className="text-gray-400 mb-12">
          Here are some of the cool things I've built recently!
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-[#01d3e2] mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-black px-4 py-1 rounded hover:bg-[#01d3e2] hover:text-black transition"
                  >
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#01d3e2] text-black px-4 py-1 rounded hover:opacity-80 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
