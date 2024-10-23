import React from 'react'
import './AboutSection.css'
import AboutImage from '../images/half-block1.jpg'
import Counter from './Counter';

function AboutSection() {

    const brandsData = [
        {
            title: 'Project Management',
            count: '90',
            width: '90%'
        },
        {
            title: 'Web Consulting',
            count: '75',
            width: '75%'
        },
        {
            title: 'Web Consulting',
            count: '75',
            width: '75%'
        }
    ];

 
  return (
    <>
      <section id="about" className="p-0 progress-section page-links">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="feature-skill-box">
                            <div className="title">
                                <h6 className="third-color mb-3">ALWAYS BEHIND THE BRANDS</h6>
                                <h2 className="mb-3">A Studio Helping Web 2.0 Gain Some Momentum.</h2>
                                <p>The integration of web fonts has always been one of the largest contributing factors to diversity in the overall look and feel of websites today vs. yesterday.</p>
                            </div>
                           
                            <ul className="feature-skill team-progress text-left">
                                {brandsData.map((brand, keyValue) => (
                                    <li className="progress-item" key={keyValue}>
                                    <h6>{brand.title}<span className="float-right" id='btncounter'><b className="count"><Counter targetCount={brand.count}/></b>%</span></h6>
                                    <div className="progress">
                                        <span className="progress-bar" role="progressbar" style={{width: brand.width}}></span>
                                    </div>
                                </li>
                                ))}
                            </ul>

                           
                            <a href="javascript:void(0);" className="btn btn-large btn-transparent-black mt-5">Get Started</a>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <img src={AboutImage}  className="feature-half" alt="image" />
                    </div>
                </div>
            </div>
        </section>
        
    </>
  )
}

export default AboutSection
