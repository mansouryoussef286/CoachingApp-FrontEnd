import React from 'react'
import { Subscribers } from './coachProfile/Subscribers'
import { NutritionCard } from './coachProfile/NutritionCard'
import { ProfileCard } from './coachProfile/ProfileCard'
import { Sidebar } from './coachProfile/Sidebar'
import { WorkoutCard } from './coachProfile/WorkoutCard'
import { ExcersiceCard } from './coachProfile/ExcersiceCard'
import { AssignWorkouts } from './coachProfile/AssignWorkouts'

export const CoachProfile = () => {
    return (
        <>
            <div className='sidebarDiv'>
                <Sidebar></Sidebar>
            </div>
            <div className='d-flex profile flex-wrap flex-lg-nowrap flex-md-nowrap justify-content-around'>
                <ProfileCard></ProfileCard>
                <div className='w-100 px-3 d-flex flex-column  align-items-center'>
                    <Subscribers></Subscribers>
                    <WorkoutCard id='workouts'></WorkoutCard>
                    <ExcersiceCard id='excercises'></ExcersiceCard>
                    <AssignWorkouts></AssignWorkouts>
                </div>
            </div>
        </>
    )
}
