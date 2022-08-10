import React from 'react'
import Star from 'elements/Star'
import testimonyAccent from 'assets/images/testimonial-landingpages-frame.jpg'
import Button from 'elements/Button'
import Fade from 'react-reveal/Fade';

export default function Testimony(props) {
  return (
    <Fade bottom>
      <section className='container'>
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: 70 }}>
            <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
              <img src={`${process.env.REACT_APP_HOST}/${props.data.imageUrl}`} alt="testimonial" className="position-absolute" style={{ zIndex: 2 }} />
              <img src={testimonyAccent} alt="testimonial" className="position-absolute" style={{ margin: `-30px 0 0 -30px`, zIndex: 1 }} />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <h4 style={{ marignBottom: 40 }}>
              {props.data.name}
            </h4>
            <Star value={props.data.rate} height={35} width={35} spacing={4} />
            <h5 className="h2 font-weight-light line-height-2 my-3">
              {props.data.content}
            </h5>
            <span className="text-gray-500">
              {props.data.familyName}, {props.data.familyOccupation}
            </span>
            <div>
              <Button className='btn px-5 pt-2 pb-2' style={{ marginTop: 40 }} hasShadow isPrimary type='link' href={`/testimonial/${props.data._id}`}>Read Their Story</Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  )
}