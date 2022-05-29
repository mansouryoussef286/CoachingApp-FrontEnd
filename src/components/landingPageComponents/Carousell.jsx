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
            className="d-block w-100"
            src="https://cutewallpaper.org/21/plain-background-hd/Plain-Light-Blue-Background-1920x1080-Drkenfreedmanblog.xyz.png"
            alt="Third slide"
            style={{height: '100vh'}}
          />
          <Carousel.Caption>
            <h3 className='Pictitle'></h3>
            <p  className='PicInfo'></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="https://cdn.wallpapersafari.com/5/73/oHC9by.jpg"
            alt="Second slide"
            style={{height: '100vh'}}
          />
          <Carousel.Caption>
            <h3 className='Pictitle'></h3>
            <p  className='PicInfo'></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  )
}
