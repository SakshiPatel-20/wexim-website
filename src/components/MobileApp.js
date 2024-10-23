import React from 'react';
import './MobileApp.css';
import Iphone from '../images/iphone-img.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IphoneSlide1 from '../images/iphone-slide1.jpg';
import IphoneSlide2 from '../images/iphone-slide2.jpg';
import IphoneSlide3 from '../images/iphone-slide3.jpg';

const featureData = [
    {
        icon: "fa-regular fa-gem",
        title: "Theme Options",
        description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit Suspendisse in orci enim gravida nibh."
    },
    {
        icon: "fa fa-edit",
        title: "Customization",
        description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit Suspendisse in orci enim gravida nibh."
    },
    {
        icon: "fa fa-code",
        title: "Powerful Code",
        description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit Suspendisse in orci enim gravida nibh."
    },
    {
        icon: "fa-regular fa-folder-open",
        title: "Documentation",
        description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit Suspendisse in orci enim gravida nibh."
    }
];

const MobileApp = () => {
    const mobileAppSliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };

    const mobileSliderData = [
        { img: IphoneSlide1 },
        { img: IphoneSlide2 },
        { img: IphoneSlide3 }
    ];

    const renderFeatures = () => (
        featureData.map((feature, index) => (
            <div className={`app-feature ${index < 2 ? 'fadeInLeft' : 'fadeInRight'}`} key={feature.title}>
                <i className={`${feature.icon} gradient-text1`}></i>
                <h4 className="mb-3">{feature.title}</h4>
                <p>{feature.description}</p>
            </div>
        ))
    );

    return (
        <section id="app" className='page-links'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center wow fadeIn">
                        <div className="title d-inline-block">
                            <h6 className="mb-3">Most reliable application</h6>
                            <h2 className="gradient-text1 mb-3">Mobile App Design</h2>
                            <p>
                                Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center text-center">
                    <div className="col-md-4">{renderFeatures().slice(0, 2)}</div>

                    <div className="col-md-4 wow fadeInUp">
                        <div className="app-image">
                            <img src={Iphone} alt="Mobile App" />
                            <div className='mobileSlider'>
                                <Slider {...mobileAppSliderSettings}>
                                    {mobileSliderData.map((appSlider, index) => (
                                        <div key={index} className="item appSlider">
                                            <img src={appSlider.img} alt={`Slide ${index + 1}`} />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">{renderFeatures().slice(2)}</div>
                </div>
            </div>
        </section>
    );
}

export default MobileApp;
