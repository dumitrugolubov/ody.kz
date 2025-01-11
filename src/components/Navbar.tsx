import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/90 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <picture>
              <source srcSet="/logo.webp" type="image/webp" />
              <img
                src="/android-chrome-192x192.png"
                alt="Odyssey Exchange Logo"
                className="w-8 h-8"
                width="32"
                height="32"
                loading="eager"
              />
            </picture>
            <span className="text-xl font-bold">Odyssey Exchange</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Басты бет</Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">Біз туралы</Link>
            <Link to="/features" className="text-gray-300 hover:text-white transition-colors">Мүмкіндіктер</Link>
            <Link to="/partners" className="text-gray-300 hover:text-white transition-colors">Серіктестер</Link>
            <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/exchange"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 transition-all duration-300"
            >
              Сауда жасау
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Басты бет
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Біз туралы
              </Link>
              <Link
                to="/features"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Мүмкіндіктер
              </Link>
              <Link
                to="/partners"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Серіктестер
              </Link>
              <Link
                to="/faq"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}