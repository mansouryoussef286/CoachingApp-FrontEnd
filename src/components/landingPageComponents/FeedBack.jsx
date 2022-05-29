import React from 'react'
import { Card } from 'primereact/card';
import "@fortawesome/fontawesome-free/css/all.css"




export const FeedBack = () => {
    // first card
    const footer1 = <span style={{color:'blue'}}>
            Join Our Commuinty → 
        </span>;

    const subtitle1=<span>
        <i className="pi pi-star" style={{'fontSize': '20px'}}></i>
        <span>4.9 Rating</span>
        </span>

    //card 2
    const footer2 = <span>
        Here To motivate
        </span>;

    const subtitle2=<span>
        <i className="pi pi-check" style={{'fontSize': '20px'}}></i>
        FeedBack
        </span>;
    
    return (
        <div className='d-flex flex-lg-nowrap flex-md-nowrap flex-wrap  align-items-center justify-content-center my-5' >
            <div className='Feedback-section mx-3 w-100 '>
                <div className='w-100 d-flex align-items-stretch flex-lg-nowrap flex-md-nowrap flex-wrap justify-content-center'>
                    <Card footer={footer1}  title={subtitle1} className='cards my-2'>
                    More than 2 billion we people over countries use socibooks we to stay in touch with friends.
                    </Card>
                    <Card footer={footer2}  title={subtitle2} className='cards my-2 '>
                    More than 2 billion we people over countries use socibooks we to stay in touch with friends.
                    </Card>
                </div>
            </div>
            <div className='d-flex flex-wrap justify-content-left align-items-center about-section w-100 mx-3 my-2'>
                <span className='Primary'> Our Achievement</span>
            <h2 className='text-capitalize fw-bold'>
                    We are Connecting You to your desired coach instantly.
                </h2>
                <p className='w-75'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eveniet, voluptas nemo quo laudantium maiores repudiandae!
                </p>
                <p className='w-50'>
                <a href="#" className='btn btn-primary w-50 d-block'>Discover Me →</a>
                </p>
            </div>
        </div>
    )
}
