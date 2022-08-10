import React from 'react'
import Button from 'elements/Button'
import IconText from 'parts/IconText'

export default function Footer() {
    return (
        <footer className='mb-10'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <IconText />
                        <p className="brand-tagline">
                            We kaboom your satisfy holiday instanly and memorable.
                        </p>
                    </div>

                    <div className="col-sm-12 col-md-8 row justify-content-end">
                        <div className="col-sm-12 col-md-3 mr-5">
                            <h6 className="mt-2">for Beginners</h6>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <Button type='link' href="/register">New Account</Button>
                                </li>
                                <li className="list-group-item">
                                    <Button type='link' href="/properties">Start Booking a Room</Button>
                                </li>
                                <li className="list-group-item">
                                    <Button type='link' href="/use-payments">Use Payments</Button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-3 mr-5">
                            <h6 className="mt-2">Explore Us</h6>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <Button type='link' href="/careers">Our Careers</Button>
                                </li>
                                <li className="list-group-item">
                                    <Button type='link' href="/privacy">Privacy</Button>
                                </li>
                                <li className="list-group-item">
                                    <Button type='link' href="/terms">Terms & Conditions</Button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <h6 className="mt-2">Connect Us</h6>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <Button isExternal type='link' href="mailto:supports@staycation.id">supports@staycation.id</Button>
                                </li>
                                <li className="list-group-item">
                                    <Button is External type='link' href="tel:+622112212313">021-1221-2313</Button>
                                </li>
                                <li className="list-group-item">
                                    <span>Staycation, Kemang Indonesia</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center copyrights">
                        Copyrights 2022 | All rights reserved | Staycation
                    </div>
                </div>
            </div>
        </footer>
    )
}
