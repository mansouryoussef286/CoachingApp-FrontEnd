import React from 'react'
// import { Carousel } from 'antd';
import { Carousel } from 'react-bootstrap';

export const Carousell = () => {
  return (
    <>
    <div>
      <div className='carousel-overlay'>
        <h1 className='text-capitalize fw-bold'>
          your solution for a healthy transfromation
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus velit neque ullam rem corporis provident nam dolore officiis maxime eaque.
        </p>
        <div>
          <button className='btn btn-primary m-3'>Learn More</button>
          <button className='btn btn-outline-primary m-3'>Invite Friends</button>
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
