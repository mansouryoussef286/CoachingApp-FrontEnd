import React from 'react'
import { CardComponent } from './CardComponent'

export const WorkoutCard = () => {
    return (
        <CardComponent classes='cardd text-dark' CardwithDotsclasses='m-5'>
            <div className='d-flex flex-column h-100'>
                <div className='h-50'>
                    a new card
                </div>
                <div>
                    reusable card
                </div>
            </div>
        </CardComponent>
    )
}
