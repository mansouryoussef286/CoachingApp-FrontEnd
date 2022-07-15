import React from 'react'
import { GoalsCard } from './clientProfile/GoalsCard'
import { NutritionCard } from './clientProfile/NutritionCard'
import { ProfileCard } from './clientProfile/ProfileCard'
import { Sidebar } from './clientProfile/Sidebar'
import { WorkoutCard } from './clientProfile/WorkoutCard'
import axios from 'axios';

export const ClientProfile = () => {
    // axios.defaults.headers.common['credentials'] = 'include';
    // axios.get("https://localhost:7109/api/Client/GetProfile/ClientProfile").then((response) => {
    //     // console.log(data);
    //     // console.log(status);
    //     console.log(response);});

    const metadata = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "no-cors",
        credentials: "include",
    }

    const response =  fetch("https://localhost:7109/api/Client/GetProfile/ClientProfile", metadata).catch((err) => {
        console.log(err)
    });

    console.log(response);

    return (
        <>
            <div className='sidebarDiv'>
                <Sidebar></Sidebar>
            </div>
            <div className='d-flex profile flex-wrap flex-lg-nowrap flex-md-nowrap justify-content-around'>
                <ProfileCard></ProfileCard>
                <div className='w-100 px-3 d-flex flex-column  align-items-center'>
                    <GoalsCard></GoalsCard>
                    <WorkoutCard></WorkoutCard>
                    <NutritionCard ></NutritionCard>
                </div>
            </div>
        </>
    )
}
