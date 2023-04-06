import React from 'react'
import { Navbar } from './components/Navbar';
import './App.css';
import { Aboutus } from './components/Aboutus';
import { Services } from './components/Services';
import { Cta } from './components/Cta';
import { Portfolios } from './components/Portfolios';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


function App() {
  return (
      <>
      <Navbar />
      <Aboutus />
      <main id="main">   
      <Services />
      <Cta />
      <Portfolios />
      <Team />
      <Contact />
      <Footer />
  
        </main>
        
      </> 
 

  );
}

export default App;
