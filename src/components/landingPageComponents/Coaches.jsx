import React, { useState, useEffect } from 'react';
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
            breakpoint: '600px',
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

    ]
    // const productService = new ProductService();


    const coachesTemplate = (coach) => {
        return (
            <div className="coach-item">
                <div className="coach-item-content">
                    <div className="mb-3">
                        <img src={`assets/images/coach.png`} onError={(e) => e.target.src='assets/images/coach.png'} alt='{product.name}' className="coach-image" />
                    </div>
                    <div>
                        <h4 className="mb-1">{coach.name}</h4>
                        <h6 className="mt-0 mb-3">Nutration</h6>
                        <span className={`coach-badge status-avialable`}>available</span>
                        <div className="car-buttons mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded mr-2" />
                            <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded mr-2" />
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='d-flex flex-column'>
            <div>
                title
            </div>
            <div className="carousel-demo">
                <div className="card">
                    <Carousel value={coaches2}  numVisible={4} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                        autoplayInterval={3000} itemTemplate={coachesTemplate} header={<h5>title</h5>} />
                </div>
            </div>
        </div>
    );
}

