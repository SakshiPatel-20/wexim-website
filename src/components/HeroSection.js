import React, { useEffect } from 'react';
import './HeroSection.css';

function HeroSection() {
  useEffect(() => {
    const parallax = () => {
      const parallax = document.getElementById("parallax");
      if (parallax) {
        parallax.style.backgroundPositionY = -(window.scrollY / 4) + 'px';
        parallax.style.top = -(window.scrollY / 4) + 'px';
      }
    };
    window.addEventListener("scroll", parallax);
    return () => {
      window.removeEventListener("scroll", parallax);
    };
  }, []);

  return (
    <section id="home" className="p-0 center-block hero-section page-links">
      <div
        id="parallax"
        className="fullscreen parallax bg-img8">
        <div className="bg-overlay bg-dark opacity-3"></div>
        <div className="col-sm-12 text-center center-col">
          <div className="classic-box">
            <a href="https://www.youtube.com/watch?v=hpeYWdkUtcE" className="button-play">
              <i className="fa fa-play"></i>
            </a>
            <h2 className="alt-font text-white">Most Flexible One Page HTML5 Template</h2>
            <p className="text-white mb-2">
              The integration of web fonts has always been one of the largest contributing factors to diversity in the overall look and feel of websites today vs. yesterday.
            </p>
            <a className="btn btn-large btn-blue mt-4 mr-2">Learn More</a>
            <a className="btn btn-large btn-transparent-white mt-4">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
