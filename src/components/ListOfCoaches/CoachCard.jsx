import React,{ useState }  from 'react';

import { Rating } from 'primereact/rating';
import { Card } from 'primereact/card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons'

export const CoachCard = () => {
    let [coaches, setCoaches]= useState([
        {
            id: 123,
            name:'ahmed elsokary',
            clients:'ahmedelsokary@gmail.com',
            age:'24',
            gender:'male',
            rate: 4.5,
            ratings:200,
            about:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities:["body building"],
            clients: 300
        },
        {
            id: 123,
            name:'ahmed elsokary',
            clients:'ahmedelsokary@gmail.com',
            age:'24',
            gender:'male',
            rate: 4.5,
            ratings:200,
            about:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities:["body building"],
            clients: 300
        },
        {
            id: 123,
            name:'ahmed elsokary',
            clients:'ahmedelsokary@gmail.com',
            age:'24',
            gender:'male',
            rate: 4.5,
            ratings:200,
            about:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities:["body building"],
            clients: 300
        },
        {
            id: 123,
            name:'ahmed elsokary',
            clients:'ahmedelsokary@gmail.com',
            age:'24',
            gender:'male',
            rate: 4.5,
            ratings:200,
            about:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities:["body building"],
            clients: 300
        },
        {
            id: 123,
            name:'ahmed elsokary',
            clients:'ahmedelsokary@gmail.com',
            age:'24',
            gender:'male',
            rate: 4.5,
            ratings:200,
            about:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities:["body building"],
            clients: 300
        },{
            id: 123,
            name:'ahmed elsokary',
            clients:'ahmedelsokary@gmail.com',
            age:'24',
            gender:'male',
            rate: 4.5,
            ratings:200,
            about:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities:["body building"],
            clients: 300
        },
        {
            id: 123,
            name:'ahmed elsokary',
            clients:'ahmedelsokary@gmail.com',
            age:'24',
            gender:'male',
            rate: 4.5,
            ratings:200,
            about:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities:["body building"],
            clients: 300
        },
        {
            id: 123,
            name:'ahmed elsokary',
            clients:'ahmedelsokary@gmail.com',
            age:'24',
            gender:'male',
            rate: 4.5,
            ratings:200,
            about:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities:["body building"],
            clients: 300
        },
        {
            id: 123,
            name:'ahmed elsokary',
            clients:'ahmedelsokary@gmail.com',
            age:'24',
            gender:'male',
            rate: 4.5,
            ratings:200,
            about:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities:["body building"],
            clients: 300
        },
        {
            id: 123,
            name:'ahmed elsokary',
            clients:'ahmedelsokary@gmail.com',
            age:'24',
            gender:'male',
            rate: 4.5,
            ratings:200,
            about:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities:["body building"],
            clients: 300
        },
        
    ]);

    const printCoachCards = (coaches)=>{
        return(
            coaches.map((item, index)=>{
                return(
                    <Card className='cardbox' key={index}>
                        <div className="">
                            <img className="coverImage" src="https://cutewallpaper.org/21/plain-background-hd/Plain-Light-Blue-Background-1920x1080-Drkenfreedmanblog.xyz.png" alt="" />
                        </div>
                        <div className='d-flex flex-column coachCardAbout'>
                            <div className="coachImageDiv">
                                <img className='w-100 h-100' alt="Card" src="assets/images/coach.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                            </div>
                            <div>
                                {item.name}, {item.age}
                                <br/>
                                {item.specialities[0]}
                                <br/>
                                {item.gender}
                                <br/>
                                {item.email}
                                <div className="coachCardRating d-flex justify-content-start align-items-center">
                                    <Rating className='coachCardRating' value={item.rate} readOnly stars={5} cancel={false} />
                                    <span className='text-secondary'>{item.ratings} ratings</span>
                                </div>
                                {/* <h6 className='CoachRatings'>2K Ratings</h6> */}
                            </div>
                        </div>
                        
                        <div>
                            <hr className='p-0 m-1'/>
                            <div className='coachCardAbout'>
                                {item.about}
                            </div>
                            <hr className='p-0 m-1'/>
                            <div className="coachCardAbout text-lowercase coachCardFooter d-flex align-items-center justify-content-around">
                                <span>years of experience: {item.yearsOfExperience}</span>&nbsp;
                                <span>clients: {item.clients}</span>
                            </div>
                        </div>
                    </Card>
                );
            })
        )
    }

    return (
        <div className='CoachesContainer d-flex flex-wrap justify-content-around align-items-center'>
            {printCoachCards(coaches)}
        </div>
    );
}
