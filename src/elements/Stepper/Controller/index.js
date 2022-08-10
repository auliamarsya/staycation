import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Controller(props) {
  return (
    <Fade>
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-3">{props.children}</div>
                </div>
            </div>
        </section>
    </Fade>
  )
}
