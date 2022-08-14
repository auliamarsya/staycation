import React from 'react'
import { Fade } from 'react-reveal'
import testimonyAccent from 'assets/images/testimonial-landingpages-frame.jpg'
import Button from 'elements/Button'
import ImageProfile from 'assets/images/img-profile.jpg'


export default function PageNotFound() {
    return (
        <Fade bottom>
            <section className='container pt-5'>
                <div className="row align-items-center">
                    <div className="col-auto" style={{ marginRight: 70 }}>
                        <div className="profile-hero" style={{ margin: `30px 0 0 30px` }}>
                            <img src={ImageProfile} alt="testimonial" className="position-absolute" style={{ zIndex: 2 }} />
                            <img src={testimonyAccent} alt="testimonial" className="position-absolute" style={{ margin: `-30px 0 0 -30px`, zIndex: 1 }} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h4 style={{ marignBottom: 40 }}>
                            Oops! 404 Not Found
                        </h4>
                        <span className="text-gray-500">
                            Sorry, the page you are looking for does not exist or is temporarily unavailable. 
                            <span className='text-gray'> But! You can know me more with Click Link Below!</span> 
                        </span>
                        <div>
                            <Button className='btn mb-3' style={{ marginTop: 40 }} isLight type='link' href={`/`}>Back to Home</Button>
                            <Button className='btn mb-3 ml-2' style={{ marginTop: 40 }} type='link' target="_blank" isPrimary hasShadow isExternal href={`https://www.linkedin.com/in/auliamarsya/`} > Know Me More! </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    )
}
