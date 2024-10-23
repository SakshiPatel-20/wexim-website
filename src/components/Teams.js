import React from 'react';
import './Teams.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Member1 from '../images/team-img6.jpg';
import Member2 from '../images/team-img4.jpg';
import Member3 from '../images/team-img7.jpg';
import Member4 from '../images/team-img5.jpg';

function Teams() {
    const TeamSlider = {
        className: "center",
        centerMode: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        rows: 2,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                },
            },
        ],
    };

    const TeamData = [
        {
            img: Member1,
            name: 'Alex Walkin',
            position: 'Developer',
            quote: 'Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.',
            classname: 'team-two-block left d-flex align-items-center'
        },
        {
            img: Member2,
            name: 'Sara Smith',
            position: 'Designer',
            quote: 'Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.',
            classname: 'team-two-block  d-flex align-items-center row-reverse'
        },
        {
            img: Member3,
            name: 'John Doe',
            position: 'Developer',
            quote: 'Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.',
            classname: 'team-two-block left d-flex align-items-center'
        },
        {
            img: Member4,
            name: 'Emily Johnson',
            position: 'Project Manager',
            quote: 'Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.',
            classname: 'team-two-block d-flex align-items-center row-reverse'
        },
    ];

    const socialIcons = [
        { icon: 'fa-brands fa-facebook-f', class: 'facebook-text-hvr' },
        { icon: 'fa-brands fa-twitter', class: 'twitter-text-hvr' },
        { icon: 'fa-brands fa-pinterest', class: 'pinterest-text-hvr' },
        { icon: 'fa-brands fa-instagram', class: 'instagram-text-hvr' },
    ];

    return (
        <section id="team" className='team-slider page-links'>
            <div className="container">
                <div className="row wow fadeIn">
                    <div className="col-md-12 text-center">
                        <div className="title d-inline-block">
                            <h6 className="mb-3">Basic info about company</h6>
                            <h2 className="gradient-text1 mb-3">Creative Heads</h2>
                            <p>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Slider {...TeamSlider}>
                            {TeamData.map((team, teamId) => (
                                <div className='team-content fadeInUp' key={teamId}>
                                    <div className='team-box-two item'>
                                        <ul className={team.classname}>
                                            <li>
                                                <div className="team-image">
                                                    <img src={team.img} alt={team.name} />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="team-two-content">
                                                    <h4>{team.name}</h4>
                                                    <span className="alt-font">{team.position}</span>
                                                    <p>{team.quote}</p>
                                                    <div className="team-two-social">
                                                        {socialIcons.map((icon, iconIndex) => (
                                                            <a className={icon.class} key={iconIndex} href='javascript:void(0)'>
                                                                <i className={icon.icon}></i>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Teams;
