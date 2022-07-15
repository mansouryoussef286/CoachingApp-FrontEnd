import React,{useState} from 'react'
import { CardComponent } from './CardComponent'
import axios from 'axios';
import { useFetch } from '../../useFetch';
import Spinner from 'react-bootstrap/Spinner';


export const GoalsCard = () => {
    
    const { data, loading, error, refetch } = useFetch("https://easyfit.azurewebsites.net/api/WSubscription/WorkoutSubsClient");
    if (loading) return (<div className='center-div'> <Spinner animation="grow" /></div>);
    if (data==null) return (<div className='center-div'> <Spinner animation="grow" /></div>);

    if (error) return (<h1>error...</h1>);
    
  

    return (
        <CardComponent classes='workout-Card ' >

           
            <div className='d-flex flex-lg-nowrap flex-md-nowrap flex-wrap  align-items-center justify-content-center' id='aboutApp' style={{ height: 'auto' }} >
                <select id="selectNumber" value={""} style={{ width: '130px' }} class="form-select" aria-label="Default select example">
                    <option >Select subscription</option>
                    {data.map((data) =><option>{data.subID}:{data.coach.firstName} {data.coach.lastName} </option>)}
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
