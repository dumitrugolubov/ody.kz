import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          Біз сіздің тәжірибеңізді жақсарту үшін cookie файлдарын қолданамыз. Сайтты пайдалану арқылы сіз cookie саясатымызбен келісесіз.
        </p>
        <button
          onClick={acceptCookies}
          className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors whitespace-nowrap"
        >
          Қабылдау
        </button>
      </div>
    </div>
  );
}