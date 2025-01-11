import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Бет табылмады | Odyssey Exchange</title>
        <meta name="description" content="Кешіріңіз, сіз іздеген бет табылмады." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-pink-500 mb-4">404</h1>
          <p className="text-2xl mb-8">Кешіріңіз, сіз іздеген бет табылмады</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-pink-500 hover:bg-pink-600 transition-all duration-300"
            >
              <Home className="w-5 h-5 mr-2" />
              Басты бетке оралу
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Артқа қайту
            </button>
          </div>
        </div>
      </main>
    </>
  );
}