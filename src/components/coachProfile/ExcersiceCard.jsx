import React from 'react'
import { CardComponent } from './CardComponent'
import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { DialogAddExcercise } from './DialogAddExcercise';

import { useFetch } from '../../useFetch';
import Spinner from 'react-bootstrap/Spinner';

export const ExcersiceCard = () => {

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

    const { data, loading, error, refetch } = useFetch('https://easyfit.azurewebsites.net/api/Exercise/coachExcercices');

    if (loading) return (<div className='center-div'> <Spinner animation="grow" /></div>);
    if (data == null) return (<div className='center-div'> <Spinner animation="grow" /></div>);
    if (error) return (<h1>error...</h1>);

    console.log(data);

    const printWorkouts = (workouts) => {
        return (workouts.map((excercise) => {
            return (
                <tr>
                    <th scope="row">1</th>
                    <td>{excercise.description}</td>
                    <td>{excercise.link}</td>
                    <td>
                        <button className='btn btn-warning' label="Show" icon="pi pi-external-link" onClick={() => onClick('displayResponsive2')}>edit</button>
                    <button className='btn btn-danger' onClick={()=>{console.log(excercise.id);}}>delete</button>
                        <Dialog visible={displayResponsive2} onHide={() => onHide('displayResponsive2')} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} >
                            <section className='coachSignupContainer dialoghieght'>
                                <div className='cont hoverForm'>
                                    <div className='formB my-1'>
                                        <h2>Add excercise</h2>
                                        <form className='height=h-100' action="">
                                            <div className='inputB'>
                                                <span>Description </span>
                                                <input type="text" id="Name" name="Name" placeholder="Enter description" />
                                            </div>

                                            <div className='inputB'>
                                                <span>Link </span>
                                                <input type="text" id="Name" name="Name" placeholder="Enter workout link" />
                                            </div>

                                            <div className="inputB">
                                                <input type="button" value="Edit" />
                                            </div>
                                            <div className="inputB">
                                                <span id="warning"></span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </Dialog>
                    </td>
                </tr>
            )
        }))
    }

    return (
        <CardComponent classes='workout-Card text-primary' >
            <h3>Excercises</h3>
            <button className='btn btn-success' label="Show" icon="pi pi-external-link" onClick={() => onClick('displayResponsive')}>add excercise</button>
            {/* <Dialog visible={displayBasic} style={{ width: '35vw' }} onHide={() => onHide('displayBasic')}> */}
            <Dialog visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} >
                <DialogAddExcercise />
            </Dialog>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">description</th>
                        <th scope="col">link</th>
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
