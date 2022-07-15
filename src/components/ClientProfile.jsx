import React from 'react'
import { GoalsCard } from './clientProfile/GoalsCard'
import { NutritionCard } from './clientProfile/NutritionCard'
import { ProfileCard } from './clientProfile/ProfileCard'
import { Sidebar } from './clientProfile/Sidebar'
import { WorkoutCard } from './clientProfile/WorkoutCard'

export const ClientProfile = () => {
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
