import React from 'react'

export const AboutGymawy = () => {
    return (
        <div className='d-flex' id='aboutApp'>
            <div className='about-section m-5'>
                <h2 className='text-capitalize fw-bold'>
                    why would you use gymawy application?
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis eius atque qui, dolor, assumenda cumque iste ducimus sed beatae sequi temporibus officia illum. Iusto animi mollitia accusantium aliquid enim.
                </p>
                <ul className='about-list'>
                    <li>client / coach connecting</li>
                    <li>easy subscriptions</li>
                    <li>tracking progress</li>
                </ul>
            </div>
            <div className='d-flex flex-wrap justify-content-center align-items-center about-section'>
                <img src="./assets/images/grabdumbell.jpg" alt="" className='about-Images'/>
                <img src="./assets/images/gympanorama.jpg" alt="" className='about-Images'/>
                <img src="./assets/images/coachclient.jpg" alt="coach motivating a client" className='about-Images'/>
            </div>
        </div>
    );
}
