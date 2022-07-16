import React from 'react'
import { CardComponent } from './CardComponent'
import { Calendar } from 'antd';
import moment from 'moment';
import { useFetch } from '../../useFetch';
import { Link,useNavigate} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';




export const WorkoutCard = () => {
    const navigate = useNavigate();

    const { data, loading, error, refetch } = useFetch('https://easyfit.azurewebsites.net/api/Workout/workoutClientSub?SubId=4');

    if (loading) return (<div className='center-div'> <Spinner animation="grow" /></div>);
    if (data == null) return (<div className='center-div'> <Spinner animation="grow" /></div>);

    if (error) return (<h1>error...</h1>);

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    const printWorkouts = (workouts) => {
        return (workouts.map((workout, index) => {
            return (<tr>
                <th scope="row">{index + 1}</th>
                <td>{workout.name}</td>
                <td>{workout.duration}</td>
                <td>{workout.notes}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => navigate("/FullExercies" , {state: workout.id})} >open</button>
                    
                </td>
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
                                <th scope="col">Name</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Notes</th>
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
