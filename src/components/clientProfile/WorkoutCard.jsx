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
            <div className='d-flex align-items-start justify-content-between' id='workouts'>
                <div className="site-calendar-demo-card">
                    <Calendar  fullscreen={false} onChange={onPanelChange} className='site-calendar-demo-card ' />
                </div>
                <div className='workout-text-div text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias expedita, <br/>
                    unde ipsam eos nihil itaque laudantium illo praesentium explicabo in.<br/>
                    kbkbkbkbu <br/>
                    lnlnlniknlnin<br/>kbkbkbkbu <br/>
                    lnlnlniknlnin<br/>kbkbkbkbu <br/>
                    lnlnlniknlnin<br/>kbkbkbkbu <br/>
                    lnlnlniknlnin<br/>kbkbkbkbu <br/>
                    lnlnlniknlnin<br/>kbkbkbkbu <br/>
                    lnlnlniknlnin<br/>kbkbkbkbu <br/>
                    lnlnlniknlnin<br/>kbkbkbkbu <br/>
                    lnlnlniknlnin<br/>kbkbkbkbu <br/>
                    lnlnlniknlnin<br/>kbkbkbkbu <br/>
                    lnlnlniknlnin<br/>kbkbkbkbu <br/>
                    lnlnlniknlnin<br/>kbkbkbkbu <br/>
                    lnlnlniknlnin<br/>
                </div>
            </div>
        </CardComponent>
    );
}
