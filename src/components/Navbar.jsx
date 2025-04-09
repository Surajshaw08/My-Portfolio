// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX,  } from 'react-icons/hi';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="w-full px-6 py-4 bg-[#20242d] text-white flex items-center justify-between shadow-md sticky top-0 z-50">
            <Link to='/'>
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
            <button className="md:hidden text-2xl" onClick={toggleMenu}>
                {menuOpen ? <HiX /> : <HiMenu />}
            </button>

            {/* Mobile Menu Drawer */}
            {menuOpen && (
                <ul className="absolute top-16 left-0 w-full bg-dark text-center flex flex-col space-y-4 py-4 md:hidden font-medium text-lg border-t border-gray-700 bg-[#20242d]">
                    <li><Link to="/" onClick={toggleMenu} className="hover:text-primary">Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu} className="hover:text-primary">About</Link></li>
                    <li><Link to="/skills" onClick={toggleMenu} className="hover:text-primary">Skills</Link></li>
                    <li><Link to="/Projects" onClick={toggleMenu} className="hover:text-primary">Projects</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu} className="hover:text-primary">Contact</Link></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
