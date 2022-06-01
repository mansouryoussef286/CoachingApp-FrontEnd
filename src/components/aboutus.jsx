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
                        <Nav.Link href="/contactus">Contactus</Nav.Link>



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


        

        <div className='d-flex flex-lg-nowrap flex-md-nowrap flex-wrap  align-items-center justify-content-center my-5' id='aboutApp' >
            <div className='about-section m-5'>
                <h4 className='text-capitalize fw-bold'>
                WE ARE GYM AND FITNESS APPLICATION
                </h4>
               
                <p>
                    <h7>
                    Helping people live longer, happier and healthier lives

                    </h7>
                 </p>
                    <p>
                        <h7>
                        We aim to give a system in which everyone is respected and to provide a unique and enjoyable environment in which everyone can feel comfortable. Gymawy enables everyone to work and produce excellence. From the staff to the clients involved in the Application it is all about working for the greater good. Members at Gymawy can each select a trainer, training program and a membership option by choice and personal preferences.

                        </h7>
                     </p>
            </div>
                 <div className='d-flex flex-wrap justify-content-center align-items-center about-section '>
                 <img src="./assets/images/aboutus1.png" class="w-75" alt="..."></img>
                 </div>
        </div>

        

{/* 

        <div className='d-flex flex-lg-nowrap flex-md-nowrap flex-wrap  align-items-center justify-content-center my-5' id='aboutApp' >
            <div className='about-section m-5'>
                <h4 className='text-capitalize fw-bold'>
                Our Promise To You
                </h4>
               
                <p>
                    <h7>
                        We make every one of our members a promise and you’re no exception. Gymawy is about more than just additional facilities and services. Our culture and brand promise, Gymawy offers everyone an opportunity to enjoy a fitness workout in an accessible and inclusive environment.

                    </h7>
                 </p>
            </div>
                 <div className='d-flex flex-wrap justify-content-center align-items-center about-section '>
                 <img src="./assets/images/gymm.jpg" class="w-75"  alt="..."></img>
                 </div>
        </div>



        <div className='d-flex flex-lg-nowrap flex-md-nowrap flex-wrap  align-items-center justify-content-center my-5' id='aboutApp' >
            
            <div className='d-flex flex-wrap justify-content-center align-items-center about-section '>
            <img src="./assets/images/coachclient.jpg"class="w-75"  alt="..."></img>
                 </div>
                    <div className='about-section m-5'>
                <h4 className='text-capitalize fw-bold'>
                     OUR CULTURE
                </h4>
               
                <p>
                    <h7>
                    We know that building a positive culture is incredibly important. We believe in encouraging, supporting, challenging, learning and growing to be the best! Our flexible working solutions, gym rebates and educational opportunities create a positive work/life balance for all our employees. 

                    </h7>
                 </p>
            </div>
        </div>

        <div className='d-flex flex-lg-nowrap flex-md-nowrap flex-wrap  align-items-center justify-content-center my-5' id='aboutApp' >
            
            
                    <div className='about-section m-5'>
                <h4 className='text-capitalize fw-bold'>
                Join The Movement
                </h4>
               
                <p>
                    <h7>
                    You would like to improve your fitness level, to surpass your professional athlete goals, or you would like either to continue with your recreational fitness routine or start off as a beginner? This sport facility is the right place for your productive workout and tangible exercising results. At Gymawy any form of discrimination, harassment or prejudice is not tolerated. Here we welcome both male and female members.

                    </h7>
                 </p>
            </div>

            <div className='d-flex flex-wrap justify-content-center align-items-center about-section '>
            <img src="./assets/images/grabDumbell.jpg" class="w-75" alt="..."></img>
                 </div>
        </div> */}
    


    
    </>


    
    );
}