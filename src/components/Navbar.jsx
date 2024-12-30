import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import AuthModal from './auth/AuthModal';

function Navbar() 
{
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const location = useLocation();

  const services = [
    {
      category: "Medical Services",
      items: [
        { text: "General Medicine", path: "/services/general-medicine" },
        { text: "Specialized Care", path: "/services/specialized-care" },
        { text: "Emergency Care", path: "/services/emergency" }
      ]
    },
    {
      category: "Surgical Services",
      items: 
      [
        { text: "General Surgery", path: "/services/general-surgery" },
        { text: "Minimally Invasive", path: "/services/minimally-invasive" },
        { text: "Robotic Surgery", path: "/services/robotic-surgery" }
      ]
    }
  ];

  const specialties = [
    {
      category: " Our Specialists Physicians",
      items: [
        { text: "Cardiology", path: "/physicians/cardiology" },
        { text: "Neurology", path: "/physicians/neurology" },
        { text: "Orthopedics", path: "/physicians/orthopedics" }
      ]
    }
  ];

  const hospitals = [
    {
      category: "Our Partner Hospitals",
      items: [
        { text: "Addis Ababa", path: "/partners/addisababa" },
        { text: "Amhara Region", path: "/partners/bahirdar" },
        { text: "Oromia Region", path: "/partners/oromia" },
        { text: "Sidama Region", path: "/partners/sidama" },
        { text: "Tigray Region", path: "/partners/mekele" },
        { text: "Benshagulgumz Region", path: "/partners/benshangulgunz" },
        { text: "Dire Dawa", path: "/partners/diredawa" },
        { text: "Hareri Region", path: "/partners/hareri" },
        { text: "Somali Region", path: "/partners/somali" },
        { text: "America", path: "/partners/america" },
        { text: "Europe", path: "/partners/europ" },
        { text: "Australia", path: "/partners/australia" },
      ]
    }
  ];
  const menuItems = [
    { text: 'Home', path: '/#home' },
    { text: 'About Us', path: '/#about' },
    { text: 'Services', path: '/#services', hasDropdown: true, dropdownItems: services },
    { text: 'Physicians', path: '/physicians', hasDropdown: true, dropdownItems: specialties },
    { text: 'Our Hospitals', path: '/#partners',hasDropdown: true, dropdownItems: hospitals },
    { text: 'Pharmacies', path: '/#pharmacies' },
    { text: 'Diagnostics', path: '/#diagnostics' },
    { text: 'Consultants', path: '#consultants' },
    { text: 'Referals', path: '#referals' },
    { text: 'Contact', path: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleMouseEnter = (text) => {
    setActiveDropdown(text);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-full mx-auto px-[5%]">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/images/doctors/real_logo.jpg" 
                alt="Nova Medics Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.path}
                className="relative group "
                onMouseEnter={() => handleMouseEnter(item.text)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${isActive(item.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                    }`}
                >
                  {item.text}
                  {item.hasDropdown && (
                    <span className="ml-1">< IoIosArrowDown  className='inline'/></span>
                  )}
                </a>
                
                {item.hasDropdown && activeDropdown === item.text && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50">
                    {item.dropdownItems.map((category, idx) => (
                      <div key={idx} className="py-2">
                        <div className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-50">
                          {category.category}
                        </div>
                        {category.items.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                          >
                            {subItem.text}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => {
                  setAuthMode('login');
                  setShowAuthModal(true);
                }}
                className="px-4 py-2 border border-primary text-primary bg-white hover:bg-primary  hover:text-white transition-colors"
              >
                Sign In
              </button>
         
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {menuItems.map((item) => (
            <div key={item.path}>
              <Link
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                }`}
              >
                {item.text}
              </Link>
              {item.hasDropdown && isOpen && (
                <div className="pl-4">
                  {item.dropdownItems.map((category, idx) => (
                    <div key={idx} className="py-1">
                      <div className="px-3 py-2 text-sm font-semibold text-gray-700 bg-gray-50">
                        {category.category}
                      </div>
                      {category.items.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          to={subItem.path}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                        >
                          {subItem.text}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col space-y-2 mt-4 px-3">
            <button
              onClick={() => {
                setAuthMode('login');
                setShowAuthModal(true);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 bg-primary text-left text-gray-700  hover:text-primary transition-colors"
            >
              Sign In
            </button>
          
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </nav>
  );
}

export default Navbar;
