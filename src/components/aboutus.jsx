// aboutApp2
// import React from 'react'
import { Header } from './shared/Header'
import React from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



export const AboutUs = () => {
    return (
        <>
            <Header></Header>
            <div className='d-flex flex-lg-nowrap flex-md-nowrap flex-wrap  align-items-center justify-content-center py-5' id='aboutApp' style={{ height: '100vh' }}>
                <div className='about-section m-5'>
                    <h4 className='text-capitalize fw-bold'>
                        WE ARE GYM AND FITNESS APPLICATION
                    </h4>
                    <p>
                        Helping people live longer, happier and healthier lives
                    </p>
                    <p>
                        We aim to give a system in which everyone is respected and to provide a unique and enjoyable environment in which everyone can feel comfortable. Gymawy enables everyone to work and produce excellence. From the staff to the clients involved in the Application it is all about working for the greater good. Members at Gymawy can each select a trainer, training program and a membership option by choice and personal preferences.
                    </p>
                </div>
                <div className='d-flex flex-wrap justify-content-center align-items-center about-section '>
                    <img src="./assets/images/aboutus1.png" class="w-75" alt="..."></img>
                </div>
            </div>
        </>
    );
}
