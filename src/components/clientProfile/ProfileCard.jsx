import React, { useState } from 'react';

import { CardComponent } from './CardComponent';

import { Dialog } from 'primereact/dialog';

import { DialogEdit } from './DialogEdit'
import { useFetch } from '../../useFetch';
import Spinner from 'react-bootstrap/Spinner';
import { faFemale } from '@fortawesome/free-solid-svg-icons';

import { useEffect } from 'react';


export const ProfileCard = () => {

    let info=null;
    let [client, setClient] = useState(null);

    const [displayBasic, setDisplayBasic] = useState(false);
    const [position, setPosition] = useState('center');
    const [displayResponsive, setDisplayResponsive] = useState(false);

    
    // const { data, loading, error, refetch } = useFetch("https://easyfit.azurewebsites.net/api/Client/GetProfile/ClientProfile");
    // if (loading) return (<div className='center-div'> <Spinner animation="grow" /></div>);
    // if (data==null) return (<div className='center-div'> <Spinner animation="grow" /></div>);
    // else{
    //     console.log("dataaaaa"+data);

    //    info =data.result;

    //    console.log("infoo"+info);
    // }

    // if (error) return (<h1>error...</h1>);

    
   
   
    const checkgender=()=>{
        if(info.gender)
        {
            return "male";

        }
        else
        {
            return "Female";

        }
    }



    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
        'displayResponsive': setDisplayResponsive
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
        
        {info!=null?
           (<CardComponent classes='Main-Profile-Card' id='CoachProfile'>
                <img className="coverImage" src="https://cutewallpaper.org/21/plain-background-hd/Plain-Light-Blue-Background-1920x1080-Drkenfreedmanblog.xyz.png" alt="" />

                <div className='d-flex flex-column mt-3 ' id='CoachProfile'>
                    <div className="ImageDiv align-self-center">
                        <img className='w-100 h-100' alt="Card" src="assets/images/coach.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                    </div>
                    <div className='align-self-center NameDiv'>
                        {info.firstName}
                    </div>
                    <div>
                        <br />
                        {info.age}
                        <br />
                        { checkgender() }
                        <br />
                        {info.mobileNum}
                        <br />
                        {info.city}<span>,</span>{info.country}
                        <br />
                        {info.weight} <span>Kg</span>
                        <br />
                        {info.height} <span>Cm</span>
                    </div>
                </div>
                <div className="text-center py-2">
                    <button className='btn btn-secondary' label="Show" icon="pi pi-external-link" onClick={() => onClick('displayResponsive')}>edit profile</button>
                    {/* <Dialog visible={displayBasic} style={{ width: '35vw' }} onHide={() => onHide('displayBasic')}> */}
                    <Dialog visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} >
                        <DialogEdit data={info}  />
                    </Dialog>
                </div>
            </CardComponent>):
            <h1>profile not found</h1>
        }
        </>
    );
}