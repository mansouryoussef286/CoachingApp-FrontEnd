import React from 'react'

export const AboutGymawy = () => {
    return (
        <div className='d-flex flex-lg-nowrap flex-md-nowrap flex-wrap  align-items-center justify-content-center my-5' id='aboutApp' >
            <div className='about-section m-5'>
                <h2 className='text-capitalize fw-bold'>
                    why would you use gymawy application?
                </h2>
                    <p>
                        Helping people live longer, happier and healthier lives
                    </p>
                    <p>
                        We aim to give a system in which everyone is respected and to provide a unique and enjoyable environment in which everyone can feel comfortable. Gymawy enables everyone to work and produce excellence. From the staff to the clients involved in the Application it is all about working for the greater good. Members at Gymawy can each select a trainer, training program and a membership option by choice and personal preferences.
                    </p>
                <ul className='about-list'>
                    <li>client / coach connecting</li>
                    <li>easy subscriptions</li>
                    <li>tracking progress</li>
                </ul>
            </div>
            <div className='d-flex flex-wrap justify-content-center align-items-center about-section '>
                <img src="./assets/images/grabdumbell.jpg" alt="" className='about-Images'/>
                <img src="./assets/images/gympanorama.jpg" alt="" className='about-Images'/>
                <img src="./assets/images/coachclient.jpg" alt="coach motivating a client" className='about-Images'/>
            </div>
        </div>
    );
}
