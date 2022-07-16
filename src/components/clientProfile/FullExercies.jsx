import React from 'react'
import { CardComponent } from './CardComponent'
import { Calendar } from 'antd';
import moment from 'moment';
import { useFetch } from '../../useFetch';
import { Navigate, useLocation } from 'react-router'



export const FullExercies = (props) => {
const location = useLocation();
let workoutID=location.state;
console.log(workoutID);
    const { data, loading, error, refetch } = useFetch(`https://easyfit.azurewebsites.net/api/Exercise/getExerciseByWorkOutId?WorkoutId=${workoutID}&SubId=1`);


    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    const printWorkouts = (x) => {
        return (x.map((exercies, index) => {
            return (<tr>
                <th scope="row">{index + 1}</th>
                <td>{exercies.excercise.description}</td>
                <td>{exercies.excercise.link}</td>
                <td>{exercies.sets}</td>
                <td>{exercies.reps}</td
                <td><input type="checkbox"/></td>
                
            </tr>)
        }))
    }
    return (
        <CardComponent classes='workout-Card text-primary' >
            <div className='d-flex align-items-start justify-content-center flex-wrap' id='workouts'>
                <div className="site-calendar-demo-card">
                    <Calendar fullscreen={false} onChange={onPanelChange} className='site-calendar-demo-card ' />
                </div>
                <div className='workout-text-div text-center'>
                    <table class="table table-striped" id='WorkOuts'>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Descripation</th>
                                <th scope="col">Link</th>
                                <th scope="col">Sets</th>
                                <th scope="col">Reps</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {printWorkouts(data)}
                        </tbody>
                    </table>
                </div>
            </div>
        </CardComponent>
    );
}
