import React from 'react';
import '../App.css';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/Footer';
import Navbar from "../Components/Navbar"

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;