// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'primereact/carousel';
// import { Button } from 'primereact/button';


// export const Coaches = () => {
//     const [coaches, setCoaches] = useState([]);
//     const responsiveOptions = [
//         {
//             breakpoint: '1024px',
//             numVisible: 3,
//             numScroll: 3
//         },
//         {
//             breakpoint: '600px',
//             numVisible: 2,
//             numScroll: 2
//         },
//         {
//             breakpoint: '480px',
//             numVisible: 1,
//             numScroll: 1
//         }
//     ];

//     // const productService = new ProductService();

   

//     const coachesTemplate = (coache) => {
//         return (
//             <div className="coach-item">
//                 <div className="coach-item-content">
//                     <div className="mb-3">
//                         <img src={`assets/images/coach.png`} onError={(e) => e.target.src='assets/images/coach.png'} alt='{product.name}' className="coach-image" />
//                     </div>
//                     <div>
//                         <h4 className="mb-1">Coach Name</h4>
//                         <h6 className="mt-0 mb-3">Nutration</h6>
//                         <span className={`coach-badge status-avialable`}>available</span>
//                         <div className="car-buttons mt-5">
//                             <Button icon="pi pi-search" className="p-button p-button-rounded mr-2" />
//                             <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded mr-2" />
//                             <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="carousel-demo">
//             <div className="card">
//                 <Carousel  numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
//                     itemTemplate={coachesTemplate} header={<h5>Basic</h5>} />
//             </div>

//             <div className="card">
//                 <Carousel  numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
//                     autoplayInterval={3000} itemTemplate={coachesTemplate} header={<h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>} />
//             </div>

//             <div className="card">
//                 <Carousel  numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="360px"
//                     itemTemplate={coachesTemplate} header={<h5>Vertical</h5>} style={{maxWidth: '400px', marginTop: '2em'}} />
//             </div>
//         </div>
//     );
// }

import React from 'react'
import { Card } from 'antd';

export const Coaches = () => {
    return (
        <>
        <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{
            width: 300,
        }}
        >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        </Card>
    </>
    )
    }