import { Header } from './shared/Header.jsx'
import { Footer } from './shared/Footer.jsx'
// import React, { useEffect, useState } from 'react'
// import { Navbar, Container, NavDropdown,Nav } from 'react-bootstrap';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

// export const Contact = () => {
//     let [color, setColor] = useState(false);

//     const changeColor = ()=>{
//         if(window.scrollY >100){
//             setColor(true);
//         }else{
//             setColor(false);
//         }
//     }

//     useEffect(()=>{
//         window.addEventListener('scroll', changeColor);
//         // console.log('event listener added');
//     },[])


//     return (

//         <Header></Header>

//           );
//         }
//         // =============================================================================// import { Header } from './shared/Header.jsx'
// import { Footer } from './shared/Footer.jsx'
import React, { useEffect, useState } from 'react'
import { Navbar, Container, NavDropdown,Nav } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { message } from 'antd';

export const Contact = () => {
    let [color, setColor] = useState(false);
    const [register, setregister] = useState({
        Name:'',
        Email:'',
        Message:'',
    });
    const [errors, setError] = useState({
        NameError:'',
        EmailError:'',
        MessageError:'',
    });
    
    let handlerInput=(eventObject)=>
    {
        let x=register;
        x[eventObject.target.name]=eventObject.target.value;
        console.log(eventObject.target.name +"  "+eventObject.target.value);
        setregister({
            Name:x.Name,
            Email:x.Email,
            Message:x.Message,

          
    })
    
    }
    
    const checkRegister =(e)=>
    {
        e.preventDefault();
        let name='',email='',Message='';
        console.log('register');
        console.log(name, email);        
        console.log(register);
    
        if(register.Name=="" || register.Name== null)
        name="Please enter Name";
        if(register.Email=="" || register.Email== null)
        email="Please enter Email";
        if(register.Message=="" || register.Message== null)
        Message="Please write a Message";
        
        setError({
        NameError:name,
        EmailError:email,
        MessageError:Message,
        
    
        });
        console.log(name, email);            
        console.log(register);
    
    }

    return (

        <> 
                <Header></Header>
    <div className='d-flex flex-lg-nowrap flex-md-nowrap flex-wrap  align-items-center justify-content-center py-5' id='aboutApp' >

        <section className='coachSignupContainer'>
           
            <div className='cont'>
                <div className='formB'>
                    <h2>Contact Us</h2>
                    <form className='height=h-100' action="">
                            <div className='inputB'> 
                                    <span>Name </span>
                                    <input 
                                    type="text"
                                    id="Name"
                                    name="Name"
                                    placeholder="Enter Name"
                                    value={register.Name}
                                    onChange={handlerInput}
                                    /> 
                            </div>
                            <span className='registerError'>{errors.NameError}</span>

                            <div className='inputB'> 
                                    <span>Email </span>
                                    <input 
                                    type="email" 
                                    id="Email"
                                    name="Email"
                                    placeholder="Enter Email"
                                    value={register.Email}
                                    onChange={handlerInput}
                                    /> 
                            </div>
                            <span className='registerError'>{errors.EmailError}</span>


                            <div className='inputB'> 
                                    <span>Message </span>
                                    <input 
                                    type="Textarea" 
                                    id="Message"
                                    name="Message"
                                    placeholder="Write a Message"
                                    value={register.Message}
                                    onChange={handlerInput}
                                    /> 
                            </div>
                            <span className='registerError'>{errors.MessageError}</span>
                            

                            
                            <div className="inputB">
                                
                                    <input type="button" value="Submit" onClick={checkRegister}/>   
                            </div>
                            <div className="inputB">
                                
                            <span id="warning"></span>
                        </div>
                        
                    </form>
                    
                </div>
            </div>
            <div className="imgbg">
            <img src="./assets/images/contactus3.png" class="w-75" alt="..."></img>
            </div>
        </section>
    </div>


        </>




);


}
// export default Coachsingup;
        