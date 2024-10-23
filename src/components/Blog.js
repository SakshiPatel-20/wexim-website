import React from 'react'
import './Blog.css'
import BlogImage from '../images/blog-half1.jpg'

function Blog() {
  return (
    <>
       <section id="blog" className="bg-light p-0 blog-section page-links">
            <div className="container-fluid">

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        
                        <div className="blog-half-text title m-lg-0 text-center">
                            <h6 className="third-color mb-3">January 14, 2019</h6>
                            <h2 className="mb-4">Living Your Dreams</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodt temp to the incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis a nostr a exercitation ullamco laboris nisi ut aliquip.</p>
                            <a className="btn btn-large btn-gradient mt-4">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                       
                        <div className="blog-half-image wow hover-effect fadeInRight">
                            <img src= {BlogImage} alt="image" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
      
    </>
  )
}

export default Blog
