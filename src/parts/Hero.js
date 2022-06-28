import React from 'react'
import ImageHeroFrame from 'assets/images/img-hero-frame.jpg'
import ImageHero from 'assets/images/img-hero.jpg'
import IconCities from 'assets/images/icon-cities.svg'
import IconTreveler from 'assets/images/icon-traveler.svg'
import IconTreasure from 'assets/images/icon-treasure.svg'
import Button from 'elements/Button'
import propTypes from 'prop-types'
import formatNumber from 'utils/formatNumber'

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth"
    })
  }

  return (
    <section className='container p-4'>
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{width:530}}>
          <h1 className="font-weight-bold line-height-1 mb-4">
            Forget Busy Work, <br /> 
            Star Next Vacation
          </h1>
          <p className="mb-4 font-weigh-light text-gray-500 w-75" style={{lineHeight:"170%"}}>
            We provided what your need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button className="btn px-5 mb-1" hasShadow isPrimary onClick={showMostPicked}> Show Me Now </Button>

          <div className="row mt-5">
            <div className="col-auto">
              <img width={36} height={36} src={IconTreveler} alt={`${props.data.travelers} Travelers`} />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)} {" "}
                <span className='text-gray-500 font-weight-light'>Travelers</span>
              </h6>
            </div>
            <div className="col-auto">
              <img width={36} height={36} src={IconTreasure} alt={`${props.data.treasures} Treasures`} />
              <h6 className="mt-3">
                {formatNumber(props.data.treasures)} {" "}
                <span className='text-gray-500 font-weight-light'>Treasures</span>
              </h6>
            </div>
            <div className="col-auto">
              <img width={36} height={36} src={IconCities} alt={`${props.data.cities} Cities`} />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)} {" "}
                <span className='text-gray-500 font-weight-light'>Cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{width:470, height:400}} className="pt-3">
            <img src={ImageHero} alt="img-hero" className='img-fluid position-absolute' style={{margin:'-30px 0 0 -30px', zIndex:1, maxHeight:'100%'}} />
            <img src={ImageHeroFrame} alt="img-hero-frame" className='img-fluid position-absolute' style={{margin:'0 -15px -15px 0', maxHeight:'100%'}} />
          </div>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  data: propTypes.object
}