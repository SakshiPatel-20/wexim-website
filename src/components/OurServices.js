    import React, { useEffect } from 'react';
    import './OurServices.css';

    function OurServices() {
        const services = [
            {
                id: '01.',
                name: 'Website Design',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing.',
                animation: 'fadeInLeft'
            },
            {
                id: '02.',
                name: 'Website Development',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing.',
                animation: 'fadeInUp'
            },
            {
                id: '03.',
                name: 'Project Management',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing.',
                animation: 'fadeInRight'
            },
        ];

        useEffect(() => {
            const parallax = () => {
              const parallax = document.getElementById("parallax");
              if (parallax) {
                parallax.style.backgroundPositionY = -(window.scrollY / 4) + 'px';
              }
            };
            window.addEventListener("scroll", parallax);
            return () => {
              window.removeEventListener("scroll", parallax);
            };
          }, []);

        return (
            <>
                <section className="bg-light text-center services-section">
                    <div className="container">
                        <div className="row wow fadeIn">
                            <div className="col-md-12">
                                <div className="title d-inline-block">
                                    <h6 className="mb-3">Basic info about company</h6>
                                    <h2 className="gradient-text1 mb-3">Our Services</h2>
                                    <p>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {services.map((service) => (
                                <div className={`col-md-4 ${service.animation}`} key={service.id}>
                                    <div className="feature-box">
                                        <span className="item-number gradient-text1">{service.id}</span>
                                        <h6 className="mb-4">{service.name}</h6>
                                        <p>{service.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Digital Service Parallax */}
                <section id="parallax" className="parallax bg-img9">
                    <div className="bg-overlay bg-dark opacity-4"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="parallax-box text-center title m-0">
                                    <h6 className="text-white font-weight-light mb-4">Unleash your creative potential with Wexim</h6>
                                    <h2 className="text-white mb-4">Looking For Exclusive Digital Services?</h2>
                                    <a className="btn btn-large btn-blue" href="#learn-more">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    export default OurServices;
