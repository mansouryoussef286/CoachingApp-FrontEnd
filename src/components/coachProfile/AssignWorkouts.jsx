import React from 'react'
import { CardComponent } from './CardComponent'
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { DialogAssignWorkout } from './DialogAssignWorkout';
import { useFetch } from '../../useFetch';
import Spinner from 'react-bootstrap/Spinner';

export const AssignWorkouts = () => {

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

    const { data, loading, error, refetch } = useFetch('https://easyfit.azurewebsites.net/api/WSubscription/WorkoutSubsCoach');

    if (loading) return (<div className='center-div'> <Spinner animation="grow" /></div>);
    if (data == null) return (<div className='center-div'> <Spinner animation="grow" /></div>);
    if (error) return (<h1>error...</h1>);

    // console.log(data);

    const printWorkouts = (clientSub) => {
        return (clientSub.map((cSub) => {
            if (cSub.accept) {
                return (
                    <tr>
                        <th scope="row">1</th>
                        <td>{cSub.client.firstName} {cSub.client.lastName}</td>
                        <td>{cSub.client.mobileNum}</td>
                        <td>{cSub.acceptDate}</td>
                        <td>
                            <button className='btn btn-warning' label="Show" icon="pi pi-external-link" onClick={() => onClick('displayResponsive2')}>edit</button>
                            <Dialog visible={displayResponsive2} onHide={() => onHide('displayResponsive2')} breakpoints={{ '960px': '75vw' }} style={{ width: '80vw' }} >
                                <DialogAssignWorkout />
                            </Dialog>
                        </td>
                    </tr>
                )
            }else{
                return null
            }
        }))
    }

    return (
        <CardComponent classes='workout-Card text-primary' >
            <h3>Assign Workouts to clients</h3>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Start date</th>
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
