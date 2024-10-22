import React from 'react';
import './TestimonialSlider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial1 from '../images/testimonial1.jpg';
import Testimonial2 from '../images/testimonial-img2.jpg';
import Testimonial3 from '../images/testimonial-img3.jpg';

function TestimonialSlider() {
    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const testimonials = [
        {
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus. Nunc aliquet lacus vel posuere volutpat. Fusce ultrices sollicitudin nisl nec elementum.",
            image: Testimonial1,
            name: "Sara WIlliamson",
            position: "Project Manager, The Company Inc."
        },
        {
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus. Nunc aliquet lacus vel posuere volutpat. Fusce ultrices sollicitudin nisl nec elementum.",
            image: Testimonial2,
            name: "Jhon Amstrong",
            position: "Company CEO, The Abacus Inc."
        },
        {
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus. Nunc aliquet lacus vel posuere volutpat. Fusce ultrices sollicitudin nisl nec elementum.",
            image: Testimonial3,
            name: "Stephine Jhon",
            position: "General Manager, The Company Inc."
        }
    ];

    return (
        <section className='testimonial-slider'>
            <Slider {...sliderSettings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index}>
                        <div className="testimonial-item item">
                            <i className="fa fa-quote-right testimonial-icon gradient-text1"></i>
                            <p className="mb-4">{testimonial.quote}</p>
                            <div className="testimonial-image">
                                <img src={testimonial.image} alt="image" />
                            </div>
                            <h5 className="font-weight-500 third-color">{testimonial.name}</h5>
                            <span className="destination">{testimonial.position}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default TestimonialSlider;