import React from 'react'
import { CardComponent } from './clientProfile/CardComponent'
import { ProfileCard } from './clientProfile/ProfileCard'
import { Sidebar } from './clientProfile/Sidebar'
import { WorkoutCard } from './clientProfile/WorkoutCard'

export const ClientProfile = () => {
    return (
        <>
        <Sidebar></Sidebar>
        <div className='d-flex profile'>
        <ProfileCard></ProfileCard>
        <WorkoutCard></WorkoutCard>
        </div>
        </>
    )
}
