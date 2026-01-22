// src/App.js - COMPLETE FIXED VERSION

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import MarketTicker from './components/MarketTicker';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

// Import all your pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Videos from './pages/Videos';
import Blog from './pages/Blog';
import Calculators from './pages/Calculators';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ErrorBoundary>
      <Router future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50">
          <MarketTicker />
          <Navbar />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="pt-[120px]"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<Services />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/calculators" element={<Calculators />} />
              <Route path="/calculators/:calculatorId" element={<Calculators />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;