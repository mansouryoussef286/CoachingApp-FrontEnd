import React from 'react'
import { CardComponent } from './CardComponent'

import { useFetch } from '../../useFetch';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
export const Subscribers = () => {
    const { data, loading, error, refetch } = useFetch('https://easyfit.azurewebsites.net/api/WSubscription/WorkoutSubsCoach');

    if (loading) return (<div className='center-div'> <Spinner animation="grow" /></div>);
    if (data == null) return (<div className='center-div'> <Spinner animation="grow" /></div>);
    if (error) return (<h1>error...</h1>);
    
    // console.log(data);

    const approveSub = (cID, sID, startdate, status) => {
        const date = new Date();
        const today = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()
        ].join('-');

        // console.log(cID, sID, startdate, status, today);

        axios.put("https://easyfit.azurewebsites.net/api/WSubscription/CoachChangeSubStatus", {
            ClientId: cID,
            SubId: sID,
            StartDate: startdate,
            status: status,
            RequestDate:  today
        }).then((response) => {
            // console.log(response);
            refetch();
        }).catch(err=>console.log(err));
    }

    const printWorkouts = (clientSub) => {
        return (clientSub.map((cSub) => {
            if (!cSub.accept) {
                return (
                    <tr>
                        <th scope="row">1</th>
                        <td>{cSub.client.firstName} {cSub.client.lastName}</td>
                        <td>{cSub.client.mobileNum}</td>
                        <td>{cSub.startDate}</td>
                        <td>
                            <button className='btn btn-success' onClick={() => { approveSub(cSub.clientID, cSub.subID, cSub.startDate, true) }}>approve</button>
                        </td>
                    </tr>
                )
            } else {
                return null
            }
        }))
    }

    return (
        <CardComponent classes='workout-Card ' >
            <h3>
                New subscribers
            </h3>
            <table class="table table-striped" id='Subscriptions'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Subscribe date</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {printWorkouts(data)}
                </tbody>
            </table>
        </CardComponent>
    )
}
