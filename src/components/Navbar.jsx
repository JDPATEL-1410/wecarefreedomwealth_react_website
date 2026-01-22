import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Calculators", path: "/calculators" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const Logo = () => (
    <Link to="/" className="group flex items-center">
      <div className="relative overflow-hidden">
        <img
          src={logo}
          alt="WCFW Logo"
          className="w-48 h-12 sm:w-56 sm:h-14 object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-white/30 to-orange-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </Link>
  );

  return (
    <nav
      className={`fixed top-[40px] left-0 right-0 z-[100] transition-all duration-500 ${scrolled
        ? "bg-white/90 backdrop-blur-lg shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] py-2 border-b border-orange-100"
        : "bg-white py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-bold tracking-tight transition-all duration-300 group ${location.pathname === item.path
                    ? "text-orange-600"
                    : "text-slate-700 hover:text-orange-500"
                    }`}
                >
                  {item.name}
                  {/* Underline Animation */}
                  <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-orange-500 transform origin-left transition-transform duration-300 ${location.pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="group relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold py-2.5 px-8 rounded-xl transition-all duration-300 hover:shadow-[0_8px_20px_-6px_rgba(249,115,22,0.6)] hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center">
                <FaUserAlt className="mr-2 text-xs opacity-80" />
                Login
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[1000] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-screen w-[280px] bg-white shadow-2xl z-[1001] flex flex-col lg:hidden"
            >
              <div className="p-6 flex justify-between items-center border-b border-gray-100">
                <img src={logo} alt="WCFW Logo" className="h-8 object-contain" />
                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-orange-500">
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded-xl text-lg font-bold transition-all ${location.pathname === item.path
                      ? "bg-orange-50 text-orange-600"
                      : "text-slate-700 hover:bg-gray-50 hover:text-orange-500"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="p-8 border-t border-gray-100 space-y-4">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-orange-500 transition-all font-primary"
                >
                  Login
                </Link>
                <p className="text-center text-xs text-slate-400 font-medium">Serving families since 1989</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
