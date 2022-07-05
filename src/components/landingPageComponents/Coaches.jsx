
import React ,{useState}from 'react'
import { useNavigate,Link } from 'react-router-dom';

import { Card } from 'antd';
import { Rating } from 'primereact/rating';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';

export const Coaches = () => {
    const [coaches, setCoaches] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '700px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    let coaches2 = [
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
        
    ];

    //Header for coaches carousel
    const header=<div className=' justify-content-center align-items-center d-flex flex-column '>
                    <span style={{color:'#217BF4'}}>Valuable Team</span>
                    <p style={{color:'#0A093D',fontSize:30}} className='inline my-0'><b>Our Active Coaches</b></p>
                    {/* <a href='#' className='btn btn-primary my-2'>See All</a> */}
                    <Link to={'/list'} className='btn btn-primary my-2'>See All</Link>
                </div>;

    // const productService = new ProductService();

    const coachesTemplatee = (coach) => {
        return (
            <div className="coach-item">
                <div className="coach-item-content">
            <Card className='cardbox'>
                        <div className="">
                            <img className="coverImage" src="https://cutewallpaper.org/21/plain-background-hd/Plain-Light-Blue-Background-1920x1080-Drkenfreedmanblog.xyz.png" alt="" />
                        </div>
                        <div className='d-flex flex-column coachCardAbout'>
                            <div className="coachImageDiv">
                                <img className='w-100 h-100' alt="Card" src="assets/images/coach.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                            </div>
                            <div>
                                {coach.name}, {coach.age}
                                <br/>
                                {coach.specialities[0]}
                                <br/>
                                {coach.gender}
                                <br/>
                                {coach.email}
                                <div className="coachCardRating d-flex justify-content-start align-items-center">
                                    <Rating className='coachCardRating' value={coach.rate} readOnly stars={5} cancel={false} />
                                    <span className='text-secondary'>{coach.ratings} ratings</span>
                                </div>
                                {/* <h6 className='CoachRatings'>2K Ratings</h6> */}
                            </div>
                        </div>
                        
                        <div>
                            <hr className='p-0 m-1'/>
                            <div className='coachCardAbout'>
                                {coach.about}
                            </div>
                            <hr className='p-0 m-1'/>
                            <div className="coachCardAbout text-lowercase coachCardFooter d-flex align-items-center justify-content-around">
                                <span>years of experience: {coach.yearsOfExperience}</span>&nbsp;
                                <span>clients: {coach.clients}</span>
                            </div>
                        </div>
                    </Card>
                    </div></div>
        );
    }
    const coachesTemplatee1 = (coach) => {
        return (
            
        <Card className='cardbox coach-item'>

             <div className="coach-item-content">
                 <div className=' coach-item'>
                    <div className="">
                            <img className="coverImage" src="https://cutewallpaper.org/21/plain-background-hd/Plain-Light-Blue-Background-1920x1080-Drkenfreedmanblog.xyz.png" alt="" />
                        </div>
                        <div className='d-flex flex-column coachCardAbout'>
                            <div className="coachImageDiv">
                                <img className='w-100 h-100' alt="Card" src="assets/images/coach.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                            </div>
                            <div>
                                {coach.name}, {coach.age}
                                <br/>
                                {coach.specialities[0]}
                                <br/>
                                {coach.gender}
                                <br/>
                                {coach.email}
                                <div className="coachCardRating d-flex justify-content-start align-items-center">
                                    <Rating className='coachCardRating' value={coach.rate} readOnly stars={5} cancel={false} />
                                    <span className='text-secondary'>{coach.ratings} ratings</span>
                                </div>
                                {/* <h6 className='CoachRatings'>2K Ratings</h6> */}
                            </div>
                        </div>
                        
                        <div>
                            <hr className='p-0 m-1'/>
                            <div className='coachCardAbout'>
                                {coach.about}
                            </div>
                            <hr className='p-0 m-1'/>
                            <div className="coachCardAbout text-lowercase coachCardFooter d-flex align-items-center justify-content-around">
                                <span>years of experience: {coach.yearsOfExperience}</span>&nbsp;
                                <span>clients: {coach.clients}</span>
                            </div>
                        </div>
                </div>
            </div>
        </Card>
        );
    }
    const coachesTemplate = (coach) => {
        return (
            <div className="coach-item">
                <div className="coach-item-content">
                    <div className="mb-3">
                        <img src={`assets/images/coach.png`} onError={(e) => e.target.src='assets/images/coach.png'} alt='{product.name}' className="coach-image align-self-center" />
                    </div>
                    <div>
                        <h4 className="mb-1">{coach.name}</h4>
                        <h6 className="mt-0 mb-3">Nutration</h6>
                        <span className={`coach-badge status-avialable`}>available</span>
                        <div className="car-buttons mt-2">
                            <Button icon="pi pi-search" className="p-button p-button-rounded mr-2" />
                            <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded mr-2" />
                            <Button icon="pi pi-Linkedin" className="p-button-help p-button-rounded" />

                            {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                        <div><a href='#' className='btn btn-primary mt-1'>Profile</a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
        }
    return (
        <div className='d-flex flex-column'>
            
            <div className="carousel-demo">
                <div className="card">
                    <Carousel value={coaches2}  numVisible={4} numScroll={1} responsiveOptions={responsiveOptions} circular
                        autoplayInterval={6000} itemTemplate={coachesTemplate} header={header}/>
                </div>
            </div>
        </div>
    );
}
