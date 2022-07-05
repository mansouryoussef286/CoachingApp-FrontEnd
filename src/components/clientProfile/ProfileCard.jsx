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
            address:{
                Country:'Egypt',
                city: 'alexandria'
            },
            weight:78,
            height:185,
            mobile: '01148284808',
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
                        {client.age}
                        <br />
                        {client.gender}
                        <br />
                        {client.email}
                        <br />
                        {client.gender}
                        <br />
                        {client.mobile}
                        <br />
                        {client.address.city}<span>,</span>{client.address.Country}
                        <br />
                        {client.weight} <span>Kg</span>
                        <br />
                        {client.height} <span>Cm</span>
                    </div>
                </div>
            </CardComponent>
        </>
    );
}