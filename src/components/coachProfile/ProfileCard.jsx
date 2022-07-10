import React, { useState } from 'react';

import { CardComponent } from './CardComponent';

import { Dialog } from 'primereact/dialog';

export const ProfileCard = () => {
    let [client, setClient] = useState(
        {
            id: 123,
            name: 'ahmed elsokary',
            email: 'ahmedelsokary@gmail.com',
            age: '24',
            gender: 'male',
            address: {
                Country: 'Egypt',
                city: 'alexandria'
            },
            weight: 78,
            height: 185,
            mobile: '01148284808',
        }
    );

    const [displayBasic, setDisplayBasic] = useState(false);
    const [position, setPosition] = useState('center');

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const renderFooter = (name) => {
        return (
            <div>
                <button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text">yes`</button>
                <button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus >no</button>
            </div>
        );
    }

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
                        COACHHHHH
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
                <div className="text-center py-2">
                    <button className='btn btn-secondary' label="Show" icon="pi pi-external-link" onClick={() => onClick('displayBasic')}>edit profile</button>
                    <Dialog header="Header" visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Dialog>
                </div>
            </CardComponent>
        </>
    );
}