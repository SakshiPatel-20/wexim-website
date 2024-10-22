import React from 'react'
import './HeroSection.css'

function HeroSection() {
  return (
    <>
      <section id="home" className="p-0 center-block hero-section">
        {/* <h2 className="d-none">hidden</h2> */}
        <div className="fullscreen parallax">
            <div className="bg-overlay bg-dark opacity-3"></div>
            <div className="col-sm-12 text-center center-col">
                <div className="classic-box">
                    <a href="https://www.youtube.com/watch?v=hpeYWdkUtcE" class="button-play"><i className="fa fa-play"></i></a>
                <h2 className="alt-font text-white">Most Flexible One Page HTML5 Template</h2>
                <p className="text-white mb-2">The integration of web fonts has always been one of the largest contributing factors to diversity in the overall look and feel of websites today vs. yesterday.</p>
                    <a className="btn btn-large btn-blue mt-4 mr-2">Learn More</a>
                    <a className="btn btn-large btn-transparent-white mt-4">Learn More</a>
                </div>
            </div>
        </div>
    </section>
    </>
  )     
}

export default HeroSection
