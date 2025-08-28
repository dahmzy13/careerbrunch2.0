import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EventStructure from './components/EventStructure';
import Speakers from './components/Speakers';
import Partners from './components/Partners';
import PastEvents from './components/PastEvents';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <EventStructure />
      <Speakers />
      <Partners />
      <PastEvents />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;