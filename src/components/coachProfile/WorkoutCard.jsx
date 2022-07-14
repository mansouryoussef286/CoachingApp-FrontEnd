import React, { useState } from 'react'
import { CardComponent } from './CardComponent'
import { Dialog } from 'primereact/dialog';
import { DialogAddWorkout } from './DialogAddWorkout';
import { DialogEditWorkout } from './DialogEditWorkout';

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

    return (
        <CardComponent classes='workout-Card text-primary' >
            <h3 >Workouts</h3>
            <button className='btn btn-success' label="Show" icon="pi pi-external-link" onClick={() => onClick('displayResponsive')}>Add workout</button>
            <Dialog visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} >
                <DialogAddWorkout />
            </Dialog>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Notes</th>
                        <th scope="col">operations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <button className='btn btn-warning' label="Show" icon="pi pi-external-link" onClick={() => onClick('displayResponsive2')}>edit</button>
                            <button className='btn btn-danger'>delete</button>
                            {/* <Dialog visible={displayBasic} style={{ width: '35vw' }} onHide={() => onHide('displayBasic')}> */}
                            <Dialog visible={displayResponsive2} onHide={() => onHide('displayResponsive2')} breakpoints={{ '960px': '75vw' }} style={{ width: '80vw' }} >
                                <DialogEditWorkout />
                            </Dialog>
                        </td>
                    </tr>
                </tbody>
            </table>
        </CardComponent>
    );
}
