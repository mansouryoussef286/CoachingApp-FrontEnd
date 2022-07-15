import React from 'react'
import { CardComponent } from './CardComponent'
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { DialogAssignWorkout } from './DialogAssignWorkout';

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

    return (
        <CardComponent classes='workout-Card text-primary' >
            <h3>Assign Workouts to clients</h3>
            <table class="table table-striped" id='Assign'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">operations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto@gmail.khod</td>
                        <td>
                            <button className='btn btn-warning' label="Show" icon="pi pi-external-link" onClick={() => onClick('displayResponsive2')}>edit</button>
                            <Dialog visible={displayResponsive2} onHide={() => onHide('displayResponsive2')} breakpoints={{ '960px': '75vw' }} style={{ width: '80vw' }} >
                                <DialogAssignWorkout />
                            </Dialog>
                        </td>
                    </tr>
                </tbody>
            </table>
        </CardComponent>
    );
}
