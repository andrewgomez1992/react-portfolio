import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const linkedInURL = "https://www.linkedin.com/in/andrewgomez1992";
  const githubURL = "https://github.com/andrewgomez1992";
  const resumeURL = "https://docs.google.com/document/d/1SaiNKo1XMetDAVxoI-2XGdLZ8rt305D3rzMARIqyCLU/edit?usp=sharing";

  const [nav, setNav] = useState(false);
  

  const handleClick = () => {
    setNav(!nav);
  }; 

  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#121212] text-[#29AB87]">
      <div className="relative pt-2 px-4 right-4">
        <a href='/'>
        <img href='/' src={Logo} alt="logo" style={{ width: "60px", cursor: 'pointer' }} />
        </a>
      </div>

      {/** Menu */}

      <div className={"menu " + (menuOpen && "active")}>
        <ul className="hidden md:flex font-semibold">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/** Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 text-[#29AB87] h-[25px] text-xl cursor-pointer"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/** Mobile Menu // py-6 text-4xl */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#121212] flex flex-col justify-center items-center"
        }
      >
        <li className='py-6 text-4xl' onClick={() => setNav(!nav)}>
          <a href="#home">Home</a>
        </li>
        <li className='py-6 text-4xl' onClick={() => setNav(!nav)}>
          <a href="#about">About</a>
        </li>
        <li className='py-6 text-4xl' onClick={() => setNav(!nav)}>
          <a href="#skills">Skills</a>
        </li>
        <li className='py-6 text-4xl' onClick={() => setNav(!nav)}>
          <a href="#projects">Projects</a>
        </li>
        <li className='py-6 text-4xl' onClick={() => setNav(!nav)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/** Social Icons */}

      <div className="hidden lg:flex fixed flex-col flex-end top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded">
            <a
              onClick={() => window.open(linkedInURL, "_blank")}
              className="flex justify-between items center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded">
            <a
              onClick={() => window.open(githubURL, "_blank")}
              className="flex justify-between items center w-full text-gray-300"
              href='github'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] rounded">
            <a
              className="flex justify-between items center w-full text-gray-300"
              href="mailto:drewgomez209@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded">
            <a
              onClick={() => window.open(resumeURL, "_blank")}
              className="flex justify-between items center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
