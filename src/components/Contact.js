import React from 'react'
import './Contact.css'

function Contact() {
    const contactForm = [
        {
            type: 'text',
            placeholder: 'First Name:',
            id: 'first_name',
            name: 'first_name'
        },
        {
            type: 'text',
            placeholder: 'Last Name:',
            id: 'last_name',
            name: 'last_name'
        },
        {
            type: 'email',
            placeholder: 'Email:',
            id: 'email',
            name: 'email'
        },
        {
            type: 'tel',
            placeholder: 'Phone:',
            id: 'phone',
            name: 'phone'
        },
    ]
    const Icons = [
        { icon: 'fa-brands fa-facebook-f', class: 'facebook-text-hvr' },
        { icon: 'fa-brands fa-twitter', class: 'twitter-text-hvr' },
        { icon: 'fa-brands fa-google-plus-g', class: 'google-text-hvr' },
        { icon: 'fa-brands fa-pinterest', class: 'pinterest-text-hvr' },
        { icon: 'fa-brands fa-instagram', class: 'instagram-text-hvr' },
    ];
  return (
    <>
        <section id="contact" className="p-0 page-links">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6 order-md-2 p-0">

                        
                        <form className="contact-form left" action='#'>
                            <div className="row m-0">
                                {contactForm.map((contact) => (
                                    <div className="col-md-6 col-sm-6" key={contact.id}>
                                        <div className="form-group">
                                            <input className="form-control" type={contact.type} placeholder={contact.placeholder} required="" 
                                            id={contact.id} name={contact.name} />
                                        </div>
                                    </div>
                                ))}
                                <div className="col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Message" id="message" name="message"></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <button type="submit" className="btn btn-large btn-gradient mt-4" id="submit_btn">
                                        <i className="fa fa-spinner fa-spin mr-2 d-none" aria-hidden="true"></i> <span>Contact Now</span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 p-0 wow fadeInLeft">
                        <div className="address-box title mb-0 bg-img4">
                           
                            <div className="bg-overlay gradient-bg1 opacity-8"></div>
                            <div className="address-text text-center text-white position-relative wow fadeInUp">
                                <h6 className="mb-3">Lorem ipsum dolor sit amet consectetur</h6>
                               
                                <h2 className="mb-4">Wexim Agency, Newyork</h2>
                              
                                <p className="mb-3 text-white">123 Stree New York City , United States Of America. </p>
                              
                                <p className="mb-3 text-white">Office Telephone : 001 01085379709
                                    Mobile : 001 63165370895 </p>
                                
                                <p className="mb-3 text-white">mail : admin@website.com
                                    Inquiries : email@website.com</p>
                               
                                <div className="address-social">
                                    <ul className="list-unstyled">
                                    {Icons.map((icon, iconIndex) => (
                                        <li key={iconIndex}>
                                            <a className={icon.class}>
                                                <i className={icon.icon}></i>
                                            </a>
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29918790405!2d72.41493012913726!3d23.020158084541748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1729153907416!5m2!1sen!2sin"
        width="100%"
        height="500px"
        style={{ border: 'none' }}
      ></iframe>
    </>
  )
}

export default Contact
