import {Header} from './shared/Header';
import React from 'react';
import { CoachCard } from './ListOfCoaches/CoachCard';

export const ListOfCoaches = () => {
    return (
        <div className='ListOfCoaches-page'>
        <Header></Header>
        <CoachCard></CoachCard>
        {/* <div>ListOfCoaches</div> */}
        </div>
    );
}
