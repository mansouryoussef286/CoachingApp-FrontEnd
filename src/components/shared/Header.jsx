import React, { useEffect, useState } from 'react'
import { Navbar, Container, NavDropdown,Nav } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import axios from 'axios';





export const Header = () => {
    const navigate = useNavigate();
    let [color, setColor] = useState(false);

    let [isList, setIsList] = useState(false);
    let [signup, setSignup] = useState(false);




    
    const changeColor = ()=>{
        if(window.scrollY >50){
            setColor(true);
        }else{
            setColor(false);
        }
        
    }
    const checkCookie=()=>{
        var cookies= document.cookie.split(';').map(cook=> cook.split('=')).reduce((acc,[key,value])=>({...acc,[key.trim()]:value}),{});
     
        if(cookies.role=='Client')
        {
         navigate("/ClientProfile")
        }
        else if (cookies.role=='Coach')
        {
            navigate("/CoachProfile")
        }
        else if (cookies.role==null )
        {
          
            navigate("/signin")

        }
     }
     const checkCookie2=()=>{
        var cookies= document.cookie.split(';').map(cook=> cook.split('=')).reduce((acc,[key,value])=>({...acc,[key.trim()]:value}),{});
     
        if(cookies.role=='Client'|| cookies.role=='Coach')
    {
        setSignup(false);
        }
        else 
        {
            setSignup(true);

        }
        
     }


    useEffect(()=>{
        window.addEventListener('scroll', changeColor);
        // console.log('event listener added');
    },[])

    useEffect(()=>{
        if(window.location.href.includes("list")){
            setIsList(true);
        }
    },[])

const logoutfrom=()=>{
    axios.get("https://easyfit.azurewebsites.net/api/Account/LogOut",).then((response) => {
        document.cookie = 'role=client; expires = Thu, 21 Aug 2014 20:00:00 UTC';
        if(response.status==200)
          {navigate("/");
        }



}).catch((err) => 
console.log(err))
}

  const ifIsList = ()=>{
        if(isList){
            return(
                <div></div>
            );
        }
        function App(){

        }
    }
    return (
        <Navbar expand="lg"  fixed='top' className={color? 'navbar-custom' :''}>
            {checkCookie2()}
                <Container >
                <Navbar.Brand href="/">
                    <img src='./assets/images/musclelogo.png' className='header-logo'/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>{navigate("/")}}>Home</Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/aboutus")}}>About Us</Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/contactus")}}>Contact Us</Nav.Link>



                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}

                        {/* <Nav.Link href="#bottom" className='btn btn-primary'>sign in</Nav.Link> */}
                    </Nav>
                    
                    
                    <div className='d-flex justify-content-center align-items-center'>
                      {/* <button className='btn  navbar-button' onClick={()=>{navigate("/CoachProfile")}}> coach profile</button> */}
                        
                        <button className='btn  navbar-button' onClick={()=>{checkCookie()}}>profile</button>
                        {signup? <button className='btn  navbar-button' onClick={()=>{navigate("/signin")}}>sign in</button>: <button className='btn  navbar-button' onClick={()=>{logoutfrom()}}>Log out</button>}
                        {signup?  <button className='btn  navbar-button' onClick={()=>{navigate("/signup")}}>sign up</button> :null}
                        </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
