import React from 'react'
import { CardComponent } from './CardComponent'

export const Subscribers = () => {
    return (
        <CardComponent classes='workout-Card ' >
            <h3>
                New subscribers
            </h3>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">status</th>
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
                            <button className='btn btn-success'>approve</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </CardComponent>
    )
}
