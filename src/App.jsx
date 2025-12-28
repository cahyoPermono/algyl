import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-text antialiased">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Footer />
    </div>
  );
}

export default App;
