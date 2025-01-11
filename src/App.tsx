import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import CookieConsent from './components/CookieConsent';
import BackToTop from './components/BackToTop';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Features = lazy(() => import('./pages/Features'));
const Partners = lazy(() => import('./pages/Partners'));
const Exchange = lazy(() => import('./pages/Exchange'));
const NotFound = lazy(() => import('./pages/NotFound'));
const FAQ = lazy(() => import('./pages/FAQ'));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white scroll-smooth">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <CookieConsent />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;