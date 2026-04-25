import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  HiHome,
  HiUser,
  HiViewGrid,
  HiBriefcase,
  HiNewspaper,
  HiLocationMarker,
} from "react-icons/hi";
import logo from "../../assets/images/myself3.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", icon: <HiHome /> },
    { to: "/about", label: "About Me", icon: <HiUser /> },
    { to: "/services", label: "Services", icon: <HiViewGrid /> },
    { to: "/portfolio", label: "Portfolio", icon: <HiBriefcase /> },
    { to: "/blogs", label: "Blogs", icon: <HiNewspaper /> },
    { to: "/contactme", label: "Contact Me", icon: <HiLocationMarker /> },
  ];

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-50 bg-[#10101a] px-4 py-0 flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-xl">
          Emon
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 my-2 bg-green-500 flex flex-col justify-center items-center gap-1"
        >
          <span className="block w-5 h-[2px] bg-white"></span>
          <span className="block w-5 h-[2px] bg-white"></span>
          <span className="block w-5 h-[2px] bg-white"></span>
        </button>
      </div>

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full w-[250px] bg-[#0c0c14] z-40 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
      >
        <div className="flex flex-col h-full justify-between">

          {/* TOP SECTION */}
          <div>
            <div className="relative text-center pt-16 pb-6 px-4">

              {/* Overlapping background shape */}
              <div className="absolute -top-40 left-[-50px] w-[310px] h-[310px] bg-green-500 rounded-b-full z-0 pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10 mt-4">
                <div className="w-[100px] h-[100px] mx-auto rounded-full border-4 border-white overflow-hidden">
                  <img src={logo} alt="logo" className="w-full h-full object-cover" />
                </div>

                <h5 className="mt-4 text-xs tracking-[7px] uppercase text-white">
                  Emon
                </h5>
              </div>
            </div>

            {/* NAV LINKS */}
            <ul className="mt-4">
              {navLinks.map((link, index) => (
                <li key={index} className="border-t border-white/5">
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-6 py-3 text-xs uppercase tracking-[3px] transition 
                      ${
                        isActive
                          ? "text-green-500 font-semibold"
                          : "text-white/80 hover:text-white"
                      }`
                    }
                  >
                    <span className="text-lg">{link.icon}</span>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-4 pb-4 mt-4">
            <a href="https://www.facebook.com/emon.shimoul" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://github.com/emonShimoul" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/emon_shimul/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/shimoul-uddin-emon-524535159/"
              target="_blank" rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;