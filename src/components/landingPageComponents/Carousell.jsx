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
            src="https://c4.wallpaperflare.com/wallpaper/134/762/381/plain-depth-hd-wallpaper-preview.jpg"
            alt="Second slide"
            style={{height: '100vh'}}
          />
          <Carousel.Caption>
            <h3 className='Pictitle'></h3>
            <p  className='PicInfo'></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.teahub.io/photos/full/59-596579_4k-plain-blurred-background-desktop-hd-wallpaper-beige.jpg"
            alt="Third slide"
            style={{height: '100vh'}}
          />
          <Carousel.Caption>
            <h3 className='Pictitle'></h3>
            <p  className='PicInfo'></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000} className=''>
          <img className="d-block w-100 carousel-image" src="https://wallpaperaccess.com/full/4153443.jpg" alt="First slide" />
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
