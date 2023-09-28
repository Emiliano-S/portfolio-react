import React from 'react';
import './styles/style.css';
import { Element } from 'react-scroll';
import Header from './components/sections/Header';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contacts';
import Hero from './components/sections/Hero';
import Footer from './components/sections/Footer';

const App = () => {


  return (
    <>
      <Header />
      <Element name='hero'><Hero /></Element>
      <Element name="about"><About /></Element>
      <Element name="services"><Services /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="contact"><Contact /></Element>
      <Element name="footer"><Footer /></Element>
    </>
  );
};

export default App;
