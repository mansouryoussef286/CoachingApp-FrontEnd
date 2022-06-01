
import React ,{useState}from 'react'
import { useNavigate,Link } from 'react-router-dom';

import { Card } from 'antd';
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
            name: 'youssef',
            image: 'assets/images/coach.png',
            status: 'available'
        },
        {
            name: 'youssef2',
            image: 'assets/images/coach.png',
            status: 'available'
        },
        {
            name: 'youssef3',
            image: 'assets/images/coach.png',
            status: 'available'
        },
        {
            name: 'youssef4',
            image: 'assets/images/coach.png',
            status: 'available'
        },
        {
            name: 'youssef5',
            image: 'assets/images/coach.png',
            status: 'available'
        },

    ];

    //Header for coaches carousel
    const header=<div className=' justify-content-center align-items-center d-flex flex-column '>
                    <span style={{color:'#217BF4'}}>Valuable Team</span>
                    <p style={{color:'#0A093D',fontSize:30}} className='inline my-0'><b>Our Active Coaches</b></p>
                    <a href='#' className='btn btn-primary my-2'>See All</a>
                </div>;

    // const productService = new ProductService();

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
                        autoplayInterval={6000} itemTemplate={coachesTemplate} header={header} />
                </div>
            </div>
        </div>
    );
}





