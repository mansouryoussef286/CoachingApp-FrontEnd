import React from 'react'
// import { Carousel } from 'antd';
import { Carousel } from 'react-bootstrap';
import { Link,useNavigate} from 'react-router-dom';


export const Carousell = () => {
  const navigate = useNavigate();

  return (
    <>
    <div>
      <div className='carousel-overlay'>
        <h1 className='text-capitalize fw-bold'>
          your solution for a healthy transfromation
        </h1>
        <p>
        A balanced diet supplies the nutrients your body needs to work well. Without balanced nutrition, your body is more prone to disease, infection, and fatigue.
        </p>
        <p>
        The dietary guidelines also advise limiting foods and beverages higher in added sugars, saturated fat, and sodium and limiting alcoholic beverages. The recommended limits are:        </p>
        <ol>
          <li>Added sugars: Less than 10% of your calories per day.</li>
          <li>Saturated fat: Less than 10% of your calories per day.</li>
          {/* <li>Sodium: Less than 2,300 milligrams per day (and even less for children younger than age 14).</li> */}
        </ol>
        
        <div>
          <button className='btn btn-primary m-3'onClick={()=> navigate("/aboutus")}>Learn More </button>
            
          
          <button className='btn btn-outline-primary m-3'onClick={ ()=>{ navigator.clipboard.writeText('https://coachingg.herokuapp.com');
        alert('https://coachingg.herokuapp.com')}}>Invite Friends</button>
        </div>
      </div>
      <Carousel className='w-100 ok' >
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-50"
            src="./assets/images/OnlinePersonalTrainer1.png"
            alt="first slide"
            style={{height: '100vh', opacity: 0.3, float: 'right'}}
          />
          <Carousel.Caption>
            <h3 className='Pictitle'></h3>
            <p  className='PicInfo'></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-50"
            src="./assets/images/OnlinePersonalTrainer2.png"
            alt="Second slide"
            style={{height: '100vh', opacity: 0.3, float: 'right'}}
          />
          <Carousel.Caption>
            <h3 className='Pictitle'></h3>
            <p  className='PicInfo'></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-50"
            src="./assets/images/OnlinePersonalTrainer3.png"
            alt="Second slide"
            style={{height: '100vh', opacity: 0.3, float: 'right'}}
          />
          <Carousel.Caption>
            <h3 className='Pictitle'></h3>
            <p  className='PicInfo'></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-50"
            src="./assets/images/OnlinePersonalTrainer4.png"
            alt="Second slide"
            style={{height: '100vh', opacity: 0.3, float: 'right'}}
          />
          <Carousel.Caption>
            <h3 className='Pictitle'></h3>
            <p  className='PicInfo'></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-50"
            src="./assets/images/OnlinePersonalTrainer5.png"
            alt="Second slide"
            style={{height: '100vh', opacity: 0.3, float: 'right'}}
          />
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  )
}
