import React from 'react';
import './Pricing.css';
import TestimonialSlider from './TestimonialSlider';
import Counter from './Counter';

function Pricing() {
    const details = [
        { count: '69', title: 'Award Won' },
        { count: '780', title: 'Employees' },
        { count: '456', title: 'Happy Clients' },
        { count: '599', title: 'Finished Projects' }
    ];

    const price = [
        {
            plan: 'Starter Plan',
            details: 'If you are a small business and you are interested in small rebranding, then this is a perfect plan for you.',
            currency: '29.99',
            hover: 'hvr-blue',
            currencyColor: 'third-color',
            btn: 'btn-blue',
            icon: 'fa fa-check'
        },
        {
            plan: 'Business Plan',
            details: 'If you are a small business and you are interested in small rebranding, then this is a perfect plan for you.',
            currency: '49.99',
            hover: 'hvr-gradient',
            currencyColor: 'gradient-text1',
            btn: 'btn-gradient',
            icon: 'fa fa-check'
        }
    ];

    const packages = [
        'Full access',
        'Unlimited Bandwidth',
        'Powerful Admin Panel',
        'Email Accounts',
        '8 Free Forks Every Month'
    ];

    return (
        <>
            <section id="price" className='price-section page-links'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center wow fadeIn">
                            <div className="title d-inline-block">
                                <h6 className="mb-3">Most flexible pricing</h6>
                                <h2 className="gradient-text1 mb-3">Easy Pricing</h2>
                                <p>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {price.map((pricePlan, index) => (
                            <div className="col-lg-6 mb-4 mb-lg-0" key={index}>
                                <div className={`price-two ${pricePlan.hover}`}>
                                    <h3 className="alt-font d-inline-block font-weight-normal mb-3">{pricePlan.plan}</h3>
                                    <p>{pricePlan.details}</p>
                                    <div className="price-tag-two alt-font text-dark-gray">
                                        <h3 className={`currency ${pricePlan.currencyColor}`}>
                                            <span className="sign">$</span>{pricePlan.currency}
                                        </h3>
                                        <span className="month"> MONTH</span>
                                    </div>
                                    <ul className="packages">
                                        {packages.map((item, index) => (
                                            <li key={index}>
                                                <i className={pricePlan.icon} aria-hidden="true"></i>{item}
                                            </li>
                                        ))}
                                    </ul>
                                    <a className={`btn btn-large ${pricePlan.btn}`}>Get Started</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="p-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 bg-light">
                            <TestimonialSlider />
                        </div>
                        <div className="col-md-6 p-0 count-section">
                            <div className="counters d-flex align-items-center text-left bg-img1">
                                <div className="bg-overlay gradient-bg1 opacity-8"></div>
                                <div className="counter-row">
                                    {details.map((detail, index) => (
                                        <div className="counter-item" key={index}>
                                            <Counter targetCount={detail.count} />
                                            <h6 className="text-white">{detail.title}</h6>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Pricing;
