import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Send, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Exchange Button */}
        <div className="mb-12">
          <Link
            to="/exchange"
            className="w-full block py-4 text-center text-lg font-semibold rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 transition-all duration-300"
          >
            Қазір Сауда Жасаңыз
            <ArrowRight className="inline-block ml-2 w-6 h-6" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Біз туралы</h3>
            <p className="text-gray-400">
              Odyssey Exchange - 0% спот комиссиясы және 777x дейін леверидж ұсынатын алғашқы мемкоин сауда платформасы.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Жылдам сілтемелер</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Басты бет</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">Біз туралы</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-white">Мүмкіндіктер</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-white">Серіктестер</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Байланыс</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/t_dmi3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://t.me/t_dmi3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Send className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Odyssey Exchange. Барлық құқықтар қорғалған.</p>
        </div>
      </div>
    </footer>
  );
}