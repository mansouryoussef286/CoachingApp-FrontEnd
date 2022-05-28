import React, { useEffect, useState } from 'react'
import { Navbar, Container, NavDropdown,Nav } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



export const Header = () => {
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
    },[])


    return (
        // <div  className='Header navbar-custom'>
        <Navbar expand="lg" fixed='top' className={color? 'navbar-custom' :''}>
            <Container >
                <Navbar.Brand href="#Home">
                    <img src='./assets/images/musclelogo.png' className='header-logo'/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#top">Home</Nav.Link>
                        <Nav.Link href="#aboutApp">About</Nav.Link>

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
                        <input type="text" name="search" id="" className='form-control' placeholder='search'/>
                        <a className='btn btn-danger'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </a>
                    </form>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button className='btn btn-primary  navbar-button'>sign in</button>
                        <button className='btn btn-primary  navbar-button'>sign up</button>
                    </div>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
        // </div>
    );
}
