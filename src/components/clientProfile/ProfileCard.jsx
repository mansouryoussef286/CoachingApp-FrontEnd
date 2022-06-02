import React, { useState } from 'react';

import { Rating } from 'primereact/rating';
import { CardComponent } from './CardComponent';

export const ProfileCard = () => {
    let [client, setClient] = useState(
        {
            id: 123,
            name: 'ahmed elsokary',
            email: 'ahmedelsokary@gmail.com',
            age: '24',
            gender: 'male',
            rate: 4.5,
            ratings: 200,
            about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities: ["body building"],
            clients: 300
        }
    );

    return (
        <>
            <CardComponent classes='Main-Profile-Card'>
                <img className="coverImage" src="https://cutewallpaper.org/21/plain-background-hd/Plain-Light-Blue-Background-1920x1080-Drkenfreedmanblog.xyz.png" alt="" />

                <div className='d-flex flex-column mt-3 '>
                    <div className="ImageDiv align-self-center">
                        <img className='w-100 h-100' alt="Card" src="assets/images/coach.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                    </div>
                    <div className='align-self-center NameDiv'>
                        {client.name}
                    </div>
                    <div>
                        <br />
                        {client.specialities[0]}, {client.age}
                        <br />
                        {client.gender}
                        <br />
                        {client.email}
                        <div className="CardRating d-flex justify-content-start align-items-center">
                            <Rating className='CardRating' value={client.rate} readOnly stars={5} cancel={false} />
                            <span className='text-secondary'>{client.ratings} ratings</span>
                        </div>
                        {/* <h6 className='CoachRatings'>2K Ratings</h6> */}
                    </div>
                </div>
                
                <div>
                    <hr className='p-0 m-1' />
                    <div className=''>
                        {client.about}
                    </div>
                    <hr className='p-0 m-1' />
                    <div className=" text-lowercase CardFooter d-flex align-items-center justify-content-around">
                        <span>years of experience: {client.yearsOfExperience}</span>&nbsp;
                        <span> client.s: {client.s}</span>
                    </div>
                </div>
            </CardComponent>
        </>
    );
}