import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./page/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import ServicesHeroSection from "./service/ServicesHeroSection";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#f3f6fb]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactSection />} />
         <Route path="/services" element={<ServicesHeroSection />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        
              </Routes>
      <Footer />
    </div>
  );
}

export default App;