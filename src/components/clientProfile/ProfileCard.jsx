import React, { useState } from 'react';

import { CardComponent } from './CardComponent';

import { Dialog } from 'primereact/dialog';

import {DialogEdit} from '../DialogEdit'
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
                    <Dialog  visible={displayBasic} style={{ width: '35vw' }}  onHide={() => onHide('displayBasic')}>
                        <DialogEdit data={client}/>
                    </Dialog>
                </div>
            </CardComponent>
        </>
    );
}