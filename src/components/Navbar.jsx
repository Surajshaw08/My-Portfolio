import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="w-full px-6 py-4 bg-[#20242d] text-white flex items-center justify-between shadow-md sticky top-0 z-50">
        <Link to="/">
          <h1 className="text-2xl font-bold cursor-pointer">Portfolio.</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><Link to="/" className="hover:text-[#01d3e2] transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#01d3e2] transition">About</Link></li>
          <li><Link to="/skills" className="hover:text-[#01d3e2] transition">Skills</Link></li>
          <li><Link to="/Projects" className="hover:text-[#01d3e2] transition">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-[#01d3e2] transition">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl z-50" onClick={toggleMenu}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#20242d] text-white z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col mt-20 space-y-6 px-6 text-lg font-medium">
          <li><Link to="/" onClick={closeMenu} className="hover:text-[#01d3e2]">Home</Link></li>
          <li><Link to="/about" onClick={closeMenu} className="hover:text-[#01d3e2]">About</Link></li>
          <li><Link to="/skills" onClick={closeMenu} className="hover:text-[#01d3e2]">Skills</Link></li>
          <li><Link to="/Projects" onClick={closeMenu} className="hover:text-[#01d3e2]">Projects</Link></li>
          <li><Link to="/contact" onClick={closeMenu} className="hover:text-[#01d3e2]">Contact</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
