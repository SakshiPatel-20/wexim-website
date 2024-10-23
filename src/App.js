import React, { useState, useEffect } from 'react';
import './App.css';
import '../src/bootstrap.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    setShowButton(window.scrollY > 650);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
 
  }, []);


  
  

  return (
    <>
      <Loader />
      <Navbar />
      <Home />
      <Footer />
      {showButton && (
        <a className="scroll-top-arrow" href="#">
          <i className="fa-solid fa-chevron-up"></i>
        </a>
      )}
    </>
  );
}

export default App;
