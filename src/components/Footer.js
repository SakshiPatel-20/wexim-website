import React from 'react'
import './Footer.css'

function Footer() {
  const footerIcons = [
    { icon: 'fa-brands fa-facebook-f', class: 'fadeInUp' },
    { icon: 'fa-brands fa-x-twitter', class: 'fadeInDown' },
    { icon: 'fa-brands fa-google-plus-g', class: 'fadeInUp' },
    { icon: 'fa-brands fa-linkedin-in', class: 'fadeInDown' },
    { icon: 'fa-brands fa-instagram', class: 'fadeInUp' },
    { icon: 'fa-regular fa-envelope', class: 'fadeInDown' }
];
  return (
    <>
      <section className="text-center footer-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="footer-social">
                        <ul className="list-unstyled">
                          {footerIcons.map((icon) => (
                            <li><a className={icon.class}><i className={icon.icon}></i></a></li>
                          ))}
                        </ul>
                    </div>
                    <p className="company-about fadeIn">© 2019 Wexim. Made With Love By <a>Themesindustry</a></p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer
