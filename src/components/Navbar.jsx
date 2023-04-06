import React from 'react'
import logo from '../img/logo.png';

export const Navbar = () => {
  return (
    <>
    
    <header id="header" class="fixed-top ">
         <div class="container d-flex align-items-center">
        <h1 class="logo me-auto"><a href="index.html"><img class="img-fluid" alt="" src={logo} /></a></h1>
        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a class="nav-link scrollto" href="#about">About</a></li>
            <li><a class="nav-link scrollto" href="#services">Services</a></li>
            <li><a class="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
            <li><a class="nav-link scrollto" href="#team">Team</a></li>
            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
            <li><a class="getstarted scrollto" href="#about">Get Started</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
    <section id="hero" class="d-flex align-items-center">

        <div class="container">
          <div class="row">
            <div >
              <h1>The Technology Work For Tommorow</h1>
              <h4>Atech delivers the digital transformations and technology services from ideation to execution, enabling Global 20K clients to outperform the competition.</h4>
              <a href="#" class="btn-learn-more">Enquiry Now</a>
            </div>
          
          </div>
        </div>
      </section>
      
    </>
  )
}
