import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: '/html.png' },
    { name: 'CSS', icon: '/css.webp' },
    { name: 'JAVASCRIPT', icon: '/js.png' },
    { name: 'REACT JS', icon: '/react.png' },
    { name: 'GITHUB', icon: '/GitHub-Logo.png' },
  ];

  return (
    <div className="bg-[#0f172a] text-white py-10 px-4 h-screen">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          My <span className="text-red-500">Skills</span>
        </h2>
        {/* <p className="text-gray-300 mt-2 text-sm md:text-base">
          Writing code using languages :{' '}
          <span className="text-white">
            C++, C#, Java, HTML, CSS, JS, Dart, PHP, MYSQL, and Python.
          </span>
        </p> */}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-105 transition"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 object-contain"
            />
            <p className="mt-2 text-sm font-medium text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
