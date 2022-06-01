import React,{ useState }  from 'react';
import { Link } from 'react-router-dom';

import { Rating } from 'primereact/rating';
import { Card } from 'primereact/card';

import { Dropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from './CardComponent';

export const ProfileCard = () => {
    let [client, setClient]= useState(
        {
            id: 123,
            name:'ahmed elsokary',
            email:'ahmedelsokary@gmail.com',
            age:'24',
            gender:'male',
            rate: 4.5,
            ratings:200,
            about:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities:["body building"],
            clients: 300
        }
    );

    const body=()=>{
        return(
            <>
            <div className="">
            <img className="coverImage" src="https://cutewallpaper.org/21/plain-background-hd/Plain-Light-Blue-Background-1920x1080-Drkenfreedmanblog.xyz.png" alt="" />
        </div>

        <div className='d-flex flex-column coachCardAbout'>
            <div className="coachImageDiv">
                <img className='w-100 h-100' alt="Card" src="assets/images/coach.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
            </div>
            <div>
                {  client.name}, {  client.age}
                <br />
                {  client.specialities[0]}
                <br />
                {  client.gender}
                <br />
                {  client.email}
                <div className="coachCardRating d-flex justify-content-start align-items-center">
                    <Rating className='coachCardRating' value={  client.rate} readOnly stars={5} cancel={false} />
                    <span className='text-secondary'>{  client.ratings} ratings</span>
                </div>
                {/* <h6 className='CoachRatings'>2K Ratings</h6> */}
            </div>
        </div>

        <div>
            <hr className='p-0 m-1' />
            <div className='coachCardAbout'>
                {  client.about}
            </div>
            <hr className='p-0 m-1' />
            <div className="coachCardAbout text-lowercase coachCardFooter d-flex align-items-center justify-content-around">
                <span>years of experience: {  client.yearsOfExperience}</span>&nbsp;
                <span> client.s: {  client.s}</span>
            </div>
        </div>
        </>
        );
    }
    
    return (
        <>
                <CardComponent x={"ana"} body={body} ></CardComponent>
        </>
    );
}