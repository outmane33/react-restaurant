import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiMouseScrollLight } from "react-icons/pi";
import { Menu, X } from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header({ title, background }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Top Info Bar - Hidden on mobile, visible on large screens */}
      <div className="w-full text-[#818181] h-[5vh] hidden lg:flex bg-transparent items-center max-w-7xl mx-auto px-4 justify-between z-[100]">
        <p className="text-sm">
          304 North Cardinal St. Dorchester Center, MA 02124
        </p>
        <div className="flex gap-4 text-xl">
          <FaFacebook className="cursor-pointer hover:text-white transition-colors" />
          <FaSquareXTwitter className="cursor-pointer hover:text-white transition-colors" />
          <FaInstagramSquare className="cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full h-[10vh] flex bg-transparent items-center max-w-7xl mx-auto px-4 justify-between z-[100] relative">
        {/* Logo */}
        <img
          src="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/logo-light.svg"
          alt="Restaurant Logo"
          className="w-[120px] sm:w-[150px] cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-16 text-white">
          {navItems.map((item) => (
            <div
              key={item.path}
              className={`border-b-[2px] border-transparent hover:border-white transition-all duration-300 hover:border-b-[2px] cursor-pointer pb-2 ${
                location.pathname === item.path ? "border-white" : ""
              }`}
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <button className="hidden lg:flex text-black bg-[#ffb700] px-4 py-2 hover:bg-[#4e5545] hover:text-white transition-all duration-300">
          (850) 324-7023
        </button>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="text-white w-8 h-8 cursor-pointer" />
          ) : (
            <Menu className="text-white w-8 h-8 cursor-pointer" />
          )}
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-[200] lg:hidden">
            <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-2xl">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  className="cursor-pointer hover:text-[#ffb700] transition-colors"
                  onClick={() => {
                    navigate(item.path);
                    toggleMenu();
                  }}
                >
                  {item.name}
                </div>
              ))}
              <a
                href="tel:8503247023"
                className="text-black bg-[#ffb700] px-6 py-3 rounded hover:bg-[#4e5545] hover:text-white transition-all duration-300"
              >
                (850) 324-7023
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Banner Section */}
      <div
        className="w-full h-screen relative mt-[-15vh] z-[-1] flex items-center justify-center flex-col gap-6 md:gap-10 px-4"
        style={{
          backgroundImage: `url('${background}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>

        {/* Content */}
        <p className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl text-white z-[100] max-w-5xl text-center leading-tight">
          {title}
        </p>
        <p className="text-base sm:text-xl text-white z-[100] max-w-4xl text-center px-4">
          Mauris neque nisi faucibus non elementum in convallis et eros. Sed
          pretium sem libero vel pellentesque purus ultrices.
        </p>
        <PiMouseScrollLight className="text-white text-3xl z-[100] animate-bounce" />
      </div>
    </>
  );
}
