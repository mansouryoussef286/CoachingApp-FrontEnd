import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGem, faHome,  faPhone, faPrint } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <div className='text-center text-lg-start text-light bg-dark'>
            {/* social media */}
            <section className='d-flex justify-content-center justify-content-lg-around p-1 border-top border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href='' className='me-4 text-reset'>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </section>
            {/* mid section */}
            {/* <section className=''>
                <div className='container text-center text-md-start mt-1'>
                <div className='row mt'>
                    <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-1'>
                        <h6 className='text-uppercase fw-bold mb-1'>
                            <FontAwesomeIcon icon = {faGem}/> Company name
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                        </p>
                    </div>
        
                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-1'>
                        <h6 className='text-uppercase fw-bold mb-1'>Products</h6>
                        <p>
                            <a href='#!' className='text-reset'>
                            Angular
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                            React
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                            Vue
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                            Laravel
                            </a>
                        </p>
                    </div>
        
                    <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-1'>
                        <h6 className='text-uppercase fw-bold mb-1'>Useful links</h6>
                        <p>
                            <a href='#!' className='text-reset'>
                            Pricing
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                            Settings
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                            Orders
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                            Help
                            </a>
                        </p>
                    </div>
        
                    <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-1'>
                        <h6 className='text-uppercase fw-bold mb-1'>Contact</h6>
                        <p>
                            <FontAwesomeIcon icon = {faHome}/> New York, NY 10012, US
                        </p>
                        <p>
                            <FontAwesomeIcon icon = {faEnvelope}/> info@example.com
                        </p>
                        <p>
                            <FontAwesomeIcon icon = {faPhone}/> + 01 234 567 88
                        </p>
                        <p>
                            <FontAwesomeIcon icon = {faPrint}/> + 01 234 567 89
                        </p>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* copyright last section */}
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright: 
                <a className='text-reset fw-bold mx-1' href='https://mdbootstrap.com/'>
                    ITI PD track 42
                </a>
            </div>
        </div>    
    )
}