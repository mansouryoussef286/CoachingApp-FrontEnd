import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Rating } from 'primereact/rating';
import { Card } from 'primereact/card';

import { Dropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

export const CoachCard = () => {
    let [coaches, setCoaches] = useState([
        {
            id: 123,
            name: 'ahmed elsokary',
            clients: 'ahmedelsokary@gmail.com',
            age: '24',
            gender: 'male',
            rate: 4.5,
            ratings: 200,
            about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities: ["body building"],
            clients: 300
        },
        {
            id: 123,
            name: 'ahmed elsokary',
            clients: 'ahmedelsokary@gmail.com',
            age: '24',
            gender: 'male',
            rate: 4.5,
            ratings: 200,
            about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities: ["body building"],
            clients: 300
        },
        {
            id: 123,
            name: 'ahmed elsokary',
            clients: 'ahmedelsokary@gmail.com',
            age: '24',
            gender: 'male',
            rate: 4.5,
            ratings: 200,
            about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities: ["body building"],
            clients: 300
        },
        {
            id: 123,
            name: 'ahmed elsokary',
            clients: 'ahmedelsokary@gmail.com',
            age: '24',
            gender: 'male',
            rate: 4.5,
            ratings: 200,
            about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities: ["body building"],
            clients: 300
        },
        {
            id: 123,
            name: 'ahmed elsokary',
            clients: 'ahmedelsokary@gmail.com',
            age: '24',
            gender: 'male',
            rate: 4.5,
            ratings: 200,
            about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities: ["body building"],
            clients: 300
        }, {
            id: 123,
            name: 'ahmed elsokary',
            clients: 'ahmedelsokary@gmail.com',
            age: '24',
            gender: 'male',
            rate: 4.5,
            ratings: 200,
            about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities: ["body building"],
            clients: 300
        },
        {
            id: 123,
            name: 'ahmed elsokary',
            clients: 'ahmedelsokary@gmail.com',
            age: '24',
            gender: 'male',
            rate: 4.5,
            ratings: 200,
            about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities: ["body building"],
            clients: 300
        },
        {
            id: 123,
            name: 'ahmed elsokary',
            clients: 'ahmedelsokary@gmail.com',
            age: '24',
            gender: 'male',
            rate: 4.5,
            ratings: 200,
            about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities: ["body building"],
            clients: 300
        },
        {
            id: 123,
            name: 'ahmed elsokary',
            clients: 'ahmedelsokary@gmail.com',
            age: '24',
            gender: 'male',
            rate: 4.5,
            ratings: 200,
            about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities: ["body building"],
            clients: 300
        },
        {
            id: 123,
            name: 'ahmed elsokary',
            clients: 'ahmedelsokary@gmail.com',
            age: '24',
            gender: 'male',
            rate: 4.5,
            ratings: 200,
            about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ipsa quibusdam reiciendis. Veritatis nulla ut, asperiores debitis qui pariatur aut!',
            yearsOfExperience: 5,
            specialities: ["body building"],
            clients: 300
        },

    ]);

    const printCoachCards = (coaches) => {
        return (
            coaches.map((item, index) => {
                return (
                    <div style={{ position: 'relative' }} key={index}>
                        <Dropdown autoClose='outside' drop='up' rootCloseEvent='click' className='coachCardContextMenu'>
                            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                <FontAwesomeIcon icon={faEllipsis} className='threedots' />
                            </Dropdown.Toggle>

                            <Dropdown.Menu align={'end'} rootCloseEvent='mousedown' as={CustomMenu}>
                                <Dropdown.Item eventKey="1">
                                    <Link to={'/'}>go to profile</Link>
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2">add to favourites</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Card className='cardbox' key={index}>
                            <div className="">
                                <img className="coverImage" src="https://cutewallpaper.org/21/plain-background-hd/Plain-Light-Blue-Background-1920x1080-Drkenfreedmanblog.xyz.png" alt="" />
                            </div>

                            <div className='d-flex flex-column coachCardAbout'>
                                <div className="coachImageDiv">
                                    <img className='w-100 h-100' alt="Card" src="assets/images/coach.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                                </div>
                                <div>
                                    {item.name}, {item.age}
                                    <br />
                                    {item.specialities[0]}
                                    <br />
                                    {item.gender}
                                    <br />
                                    {item.email}
                                    <div className="coachCardRating d-flex justify-content-start align-items-center">
                                        <Rating className='coachCardRating' value={item.rate} readOnly stars={5} cancel={false} />
                                        <span className='text-secondary'>{item.ratings} ratings</span>
                                    </div>
                                    {/* <h6 className='CoachRatings'>2K Ratings</h6> */}
                                </div>
                            </div>

                            <div>
                                <hr className='p-0 m-1' />
                                <div className='coachCardAbout'>
                                    {item.about}
                                </div>
                                <hr className='p-0 m-1' />
                                <div className="coachCardAbout text-lowercase coachCardFooter d-flex align-items-center justify-content-around">
                                    <span>years of experience: {item.yearsOfExperience}</span>&nbsp;
                                    <span>clients: {item.clients}</span>
                                </div>
                            </div>
                            <div className="text-center py-2">
                                <button className='btn btn-danger'>subscribe</button>
                            </div>
                        </Card>
                    </div>
                );
            })
        )
    }

    return (
        <>
            <div className=''>
                <div className='textdiv px-5'><h3>coaches: </h3></div>
                <div className='CoachesContainer d-flex flex-wrap justify-content-around align-items-center'>
                    {printCoachCards(coaches)}
                </div>
            </div>
        </>
    );
}

//#region three dots of sub menu
// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                // ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);
//#endregion