import React from 'react'
import { CardComponent } from './CardComponent'

export const GoalsCard = () => {
    return (
        <CardComponent classes='workout-Card ' >

            {/* <div className='d-flex flex-column h-100'>
            goal card
            </div> */}
            {/* <div>
                <p>

                </p>

            </div>
            <div className="imgbg d-flex justify-content-center">
                    <img src="./assets/images/goal.png" class="w-25" alt="..."></img>
            </div> */}
            <div className='d-flex flex-lg-nowrap flex-md-nowrap flex-wrap  align-items-center justify-content-center' id='aboutApp' style={{ height: 'auto' }}>
                <select value={""} style={{ width: '130px' }} class="form-select" aria-label="Default select example">
                    <option >Select subscription</option>
                    <option >sub One</option>
                    <option >sub Two</option>
                </select>
                <div className='about-section'>
                    <h6 className='text-capitalize fw-bold'>
                        Goals to get you started on your wellness journey
                    </h6>

                    <ul className='text-capitalize fw-bold'>
                        <li> Increase Your Flexibility</li>
                        {/* <li>Get seven to nine hours of sleep</li>
                        <li> Drink more water</li>
                        <li> Live less sedentary</li>
                        <li> Start a Walking Program</li>
                        <li>Build a Stronger Core</li>
                        <li> Learn a New Skill</li>
                        <li> Boost Your Cardio Endurance</li> */}
                    </ul>
                </div>

                <div className='d-flex flex-wrap justify-content-center align-items-center about-section '>
                    {/* <img src="./assets/images/goal6.png" class="w-100" ></img> */}
                </div>
            </div>


        </CardComponent>
    )
}
