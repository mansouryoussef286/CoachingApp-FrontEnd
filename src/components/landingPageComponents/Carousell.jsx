import React from 'react'
// import { Carousel } from 'antd';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


 export const Carousell = () => {
  return (
    <div style={{height:'100vh'}}>
    <Carousel className='w-100 ok'>
      <Carousel.Item interval={1000} className=''>
        <img
          className="d-block"
          src="MainCurossel.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='Pictitle'>First slide label</h3>
          <p className='PicInfo'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          {/* <Link classname='btn btn-primary' to={}></Link> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="logo512.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='Pictitle'>Second slide label</h3>
          <p  className='PicInfo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="MainCurossel.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='Pictitle'>Third slide label</h3>
          <p  className='PicInfo'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
  </div>
  )
}
