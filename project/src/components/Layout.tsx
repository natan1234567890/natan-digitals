import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Send } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
    { path: '/order', label: 'Order' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gray-800 p-2 rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="text-xl font-bold">
                  <span className="text-blue-400">NATAN</span>
                  <div className="text-purple-400 text-sm">{'{DIGITALS}'}</div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30 shadow-md shadow-blue-500/20'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+251933925967"
                className="inline-flex items-center px-4 py-2 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
              <Link
                to="/order"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Order Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-sm border-t border-blue-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <a
                  href="tel:+251912345678"
                  className="flex items-center justify-center px-4 py-2 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
                <Link
                  to="/order"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gray-700 p-2 rounded-lg border border-blue-500/30">
                  <div className="text-lg font-bold">
                    <span className="text-blue-400">NATAN</span>
                    <div className="text-purple-400 text-xs">{'{DIGITALS}'}</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Building digital futures for entrepreneurs and businesses in Ethiopia. 
                Professional web & app development with creative design solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="tel:+251933925967"
                  className="inline-flex items-center px-4 py-2 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </a>
                <a
                  href="https://t.me/natandigitals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-blue-400/50 text-blue-400 rounded-lg hover:bg-blue-400/10 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Telegram
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Website Development</li>
                <li>Mobile App Development</li>
                <li>E-commerce Solutions</li>
                <li>Digital Branding</li>
                <li>Social Media Management</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Natan Digitals. All rights reserved. Building Ethiopia's digital future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;