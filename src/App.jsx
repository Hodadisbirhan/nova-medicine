import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Partners from './components/Partners';
import Diagnostics from './components/Diagnostics';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import Physicians from './components/Physicians';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <About />
                <Partners />
                <Diagnostics />
                <News />
                <Contact />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/diagnostics" element={<Diagnostics />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/physicians" element={<Physicians />} />
            <Route path="/referral" element={<Contact />} />
          </Routes>
        </div>
        <WhatsAppChat />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
