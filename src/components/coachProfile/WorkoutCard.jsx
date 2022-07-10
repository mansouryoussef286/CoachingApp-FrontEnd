import React from 'react'
import { CardComponent } from './CardComponent'
import { Calendar } from 'antd';
import moment from 'moment';

export const WorkoutCard = () => {

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    return (
        <CardComponent classes='workout-Card text-primary' >
            <h3>Workouts</h3>
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
                            <button className='btn btn-warning'>edit</button>
                            <button className='btn btn-danger'>delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </CardComponent>
    );
}
