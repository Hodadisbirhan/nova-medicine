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
import Consultants from './components/Consultant';
import Pharmacies from './components/Pharmacy';
import Referals  from './components/Referals';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={
              <>
             
                <section id="home">
                <Hero />

                </section>
               <section id="services">
               <Services />
                </section> 
              <section id='about'>
              <About />
                </section>  
                <section id='partners'>

                <Partners />
                </section>
             
                <section id='diagnostics'>
                <Diagnostics />
                </section>
                
                <section id='consultants'>
                <Consultants />
                </section>
                
                <section id='pharmacies'>
                <Pharmacies />
                </section>
                <section id='referals'>
                <Referals />
                </section>
              
                <section id='news'>
                <News />
</section>
                <section id='contact'>
                <Contact />
</section>
              
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/diagnostics" element={<Diagnostics />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/consultants" element={<Consultants />} />
            <Route path="/physicians" element={<Physicians />} />
            <Route path="/referals" element={<Referals />} />
            <Route path="/news" element={<News />} />

          </Routes>
        </div>
        <WhatsAppChat />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
