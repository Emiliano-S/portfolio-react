import React, { useEffect, useState } from 'react';
import './styles/style.css';
import { Element } from 'react-scroll';
import Header from './components/sections/Header';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contacts';
import Hero from './components/sections/Hero';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulare un caricamento di 2 secondi (puoi sostituire con il tuo caricamento effettivo)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Header />
      <Element name='hero'><Hero /></Element>
      <Element name="about"><About /></Element>
      <Element name="services"><Services /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="contact"><Contact /></Element>
    </>
  );
};

export default App;
