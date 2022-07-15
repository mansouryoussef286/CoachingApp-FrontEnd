import React, { useState } from 'react'
import { CardComponent } from './CardComponent'
import { Dialog } from 'primereact/dialog';
import { DialogAddWorkout } from './DialogAddWorkout';
import { DialogEditWorkout } from './DialogEditWorkout';
import { useFetch } from '../../useFetch';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

export const WorkoutCard = () => {

    const [displayBasic, setDisplayBasic] = useState(false);
    const [position, setPosition] = useState('center');
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [displayResponsive2, setDisplayResponsive2] = useState(false);

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
        'displayResponsive': setDisplayResponsive,
        'displayResponsive2': setDisplayResponsive2
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const { data, loading, error, refetch } = useFetch('https://easyfit.azurewebsites.net/api/Workout/Coach');
    // const { data, loading, error, refetch } = useFetch('http://localhost:8888/workouts');

    if (loading) return (<div className='center-div'> <Spinner animation="grow" /></div>);
    if (data == null) return (<div className='center-div'> <Spinner animation="grow" /></div>);

    if (error) return (<h1>error...</h1>);


    // console.log(data);


    const deleteExcercise = (id) => {
        axios.delete(`https://easyfit.azurewebsites.net/api/Workout/${id}`).then(() => {
            refetch();
            alert("deleted!");
            }).catch(err=> alert("you cannot delete a workout containing excercises"));
    }

    const printWorkouts = (workouts) => {
        return (workouts.map((workout) => {
            return (<tr>
                <th scope="row">1</th>
                <td>{workout.name}</td>
                <td>{workout.duration}</td>
                <td>{workout.notes}</td>
                <td>
                    <button className='btn btn-warning' label="Show" icon="pi pi-external-link" onClick={() => onClick('displayResponsive2')}>edit</button>
                    <button className='btn btn-danger' onClick={() => { deleteExcercise(workout.id) }}>delete</button>
                    <Dialog visible={displayResponsive2} onHide={() => onHide('displayResponsive2')} breakpoints={{ '960px': '75vw' }} style={{ width: '80vw' }} >
                        <DialogEditWorkout />
                    </Dialog>
                </td>
            </tr>)
        }))
    }

    return (
        <CardComponent classes='workout-Card text-primary' >
            <h3 >Workouts</h3>
            <button className='btn btn-success' label="Show" icon="pi pi-external-link" onClick={() => onClick('displayResponsive')}>Add workout</button>
            <Dialog visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} >
                <DialogAddWorkout close={onHide} refetch={refetch}/>
            </Dialog>
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
        </CardComponent>
    );
}
