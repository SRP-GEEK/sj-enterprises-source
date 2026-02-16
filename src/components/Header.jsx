import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/industries', label: 'Industries' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-12 py-5 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-5">
          <img 
            src="/logo.png" 
            alt="SJ Enterprises Logo" 
            className="h-14 w-auto"
          />
          <div>
            <h1 className="text-2xl font-bold text-primary-dark tracking-tight">
              SJ Enterprises
            </h1>
            <p className="text-sm text-text-gray font-medium tracking-wide">
              Electrical Accessories & Project Supply
            </p>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-3xl text-text-dark"
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-5 py-3 rounded-lg font-medium text-[15px] tracking-wide transition-all duration-300 relative group
                ${isActive(link.path) 
                  ? 'text-accent-orange bg-orange-50' 
                  : 'text-text-dark hover:text-accent-orange hover:bg-orange-50'
                }`}
            >
              {link.label}
              <span className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-accent-orange transition-all duration-300
                ${isActive(link.path) ? 'w-3/5' : 'w-0 group-hover:w-3/5'}`}
              />
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white rounded-xl overflow-hidden shadow-sm mx-6 mb-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-6 py-4 font-medium text-text-dark hover:text-accent-orange hover:bg-orange-50 transition-colors
                ${index < navLinks.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
