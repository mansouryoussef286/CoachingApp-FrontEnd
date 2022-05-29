// aboutApp2
// import React from 'react'
import { Header } from './shared/Header.jsx'
import { Footer } from './shared/Footer.jsx'
import React, { useEffect, useState } from 'react'
import { Navbar, Container, NavDropdown,Nav } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



export const About = () => {
    let [color, setColor] = useState(false);

    const changeColor = ()=>{
        if(window.scrollY >100){
            setColor(true);
        }else{
            setColor(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeColor);
        // console.log('event listener added');
    },[]
    )
    return (
    <>
<Navbar expand="lg" fixed='top' className={color? 'navbar-custom' :''}>
            <Container >
                <Navbar.Brand href="#Home">
                    <img src='./assets/images/musclelogo.png' className='header-logo'/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/* <Nav.Link href="#aboutApp">About</Nav.Link> */}
                        <Nav.Link href="/aboutus">Aboutus</Nav.Link>


                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>

                        {/* <Nav.Link href="#bottom" className='btn btn-primary'>sign in</Nav.Link> */}
                    </Nav>
                    
                    <form className='d-flex'>
                        {/* <input type="text" name="search" id="" className='form-control' placeholder='search'/> */}
                        <a className='btn '>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </a>
                    </form>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button className='btn  navbar-button'>sign in</button>
                        <button className='btn  navbar-button'>sign up</button>
                    </div>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>

           <div className='d-flex flex-lg-nowrap flex-md-nowrap flex-wrap  align-items-center justify-content-center my-5 ' id='aboutApp2' >
            <div className='about-section m-5'>
                <h1  className='text-capitalize fw-bold'>
                WE ARE GYM AND FITNESS APPLICATION
                </h1>
                <p>
                    <h4>
                       Helping people live longer, happier and healthier lives

                    </h4>
                </p>
               
                <img src="./assets/images/Modern-gym-ar29072020.jpg" class="img-fluid" alt="..."></img>

            </div>
            
        </div>
        <div className='d-flex flex-lg-nowrap flex-md-nowrap flex-wrap  align-items-center justify-content-center my-5 ' id='aboutApp2' >
            <div className='about-section m-5'>
                <h1  className='text-capitalize fw-bold'>
                Our Promise To You
                </h1>
                <p>
                    <h4>
                    We make every one of our members a promise and you’re no exception. Gymawy is about more than just additional facilities and services. Our culture and brand promise, Gymawy offers everyone an opportunity to enjoy a fitness workout in an accessible and inclusive environment.
                    </h4>
                </p>
               
                 <img src="./assets/images/gymm.jpg"  alt="..."></img>

            </div>
            
        </div>
             

    
    </>


    
    );
}
