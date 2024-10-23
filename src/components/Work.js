import React from 'react'
import './Work.css'
import Portfolio1 from '../images/portfolio-1.jpg'
import Portfolio2 from '../images/portfolio-2.jpg'
import Portfolio3 from '../images/portfolio-3.jpg'
import Portfolio4 from '../images/portfolio-4.jpg'

function Work() {
    const workData = [
        {
            img: Portfolio1,
            title: 'Latest Work',
            discription: 'See Our Amazing Work',
            class: 'portfolio1',
            style: {
                width: '540px',
                left: '0',
                top: '0',
                position: 'relative'
            }
        },
        {
            img: Portfolio2,
            title: 'Latest Work',
            discription: 'See Our Amazing Work',
            class: 'portfolio2',
            style: {
                width: '540px',
                right: '200px',
                top: '400px',
                position: 'absolute'
            }
        },
        {
            img: Portfolio3,
            title: 'Latest Work',
            discription: 'See Our Amazing Work',
            class: 'portfolio3',
            style: {
                width: '540px',
                left: '210px',
                top: '616px',
                position: 'absolute'
            }
        },
        {
            img: Portfolio4,
            title: 'Latest Work',
            discription: 'See Our Amazing Work',
            class: 'portfolio4',
            style: {
                width: '540px',
                right: '200px',
                bottom: '-30px',
                position: 'absolute'
            }
        },
    ]
  return (
    <>
      <section id="work" className="bg-light p-lg-0 work-section page-links">
            <div className="container">
                <div id="portfolio-measonry" className="cbp border-portfolio simple_overlay" style={{'height': '1570px'}}>
                    <div className="cbp-item pt-0 pt-lg-5 order" style={{'width': '540px', 'right': '200px', 'top': '100px', 'position': 'absolute'}}>
                            <div className="text_wrap wow fadeIn" data-wow-delay="350ms">
                                <div className="title mb-0 d-inline-block text-center">
                                    <h6 className="mb-3 third-color">Basic info about componay</h6>
                                    <h2 className="gradient-text1 mb-3">Creative Portfolio</h2>
                                    <p>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. </p>
                                </div>
                            </div>
                        </div>
                        {workData.map((work) => (
                             <div className={`cbp-item itemshadow ${work.class}`} style={work.style}>
                             <img src={work.img} alt="" style={{ position: 'relative', zIndex: 1 }} />
                             <div className="overlay-two center-block text-white">
                                 <a className="plus">
                                 <i class="fa-solid fa-plus"></i>
                                 </a>
                                 <h4 className="pt-3">{work.title}</h4>
                                 <p>{work.discription}</p>
                             </div>
                         </div>
                        ))}
                    <div className="cbp-item order" style={{'bottom': '120px', 'position': 'absolute'}}>
                        <div className="bottom-text">
                            <div className="cells  wow fadeIn">
                                <p className="pb-3">We’ve Completed More Than </p>
                                <h2 className="port_head alt-font third-color">682</h2>
                                <p>projects for our amazing clients,</p>
                            </div>
                            <div className="cells wow fadeIn">
                                <a href="javascript:void(0)" className="btn btn-large btn-gradient">View All Work</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default Work
