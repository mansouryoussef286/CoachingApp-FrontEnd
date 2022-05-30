// import { Header } from './shared/Header.jsx'
// import { Footer } from './shared/Footer.jsx'
import'./coachstyle.css'
import React, { useEffect, useState } from 'react'
import { Navbar, Container, NavDropdown,Nav } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const Coachsingup = () => {
    let [color, setColor] = useState(false);
    const [register, setregister] = useState({
        Name:'',
        Email:'',
        YearsofExperiance:'',
        Mobile:'',
        gender:'',
        street:'',
        City:'',

        Certificates:'',
        Images:'',
        Pass:'',
        ConfPass:''
      });
      const [errors, setError] = useState({
        NameError:'',
        EmailError:'',
        YearsofExperianceError:'',
        MobileError:'',
        genderError:'',
        streetError:'',
        CityError:'',

        CertificatesError:'',
        ImagesError:'',
        PassError:'',
        ConfPassError:''
      });
    
     let handlerInput=(eventObject)=>
      {
        let x=register;
        x[eventObject.target.name]=eventObject.target.value;
        console.log(eventObject.target.name +"  "+eventObject.target.value);
        setregister({
            Name:x.Name,
            Email:x.Email,
            YearsofExperiance:x.YearsofExperiance,
            Mobile:x.Mobile,
            gender:x.gender,
            street:x.street,
            City:x.City,

            Certificates:x.Certificates,
            Images:x.Images,
            Pass:x.Pass,
            ConfPass:x.ConfPass
      //  [eventObject.target.name]:eventObject.target.value
      })
      
      }
    
      const checkRegister =(e)=>
      {
        e.preventDefault();
        let name='',email='',YearsofExperiance='',mobile='',gender='',street='',city='',Certificates='',Images='',pass='',conpass='';
        console.log('register');
        console.log(name, email, mobile,gender);        ////////////==============
        console.log(register);
    
        if(register.Name=="" || register.Name== null)
        name="Enter Name";
        if(register.Email=="" || register.Email== null)
        email="enter Email";
        if(register.YearsofExperiance=="" || register.YearsofExperiance== null)
        YearsofExperiance="enter Years";
        if(register.Mobile=="" || register.Mobile== null)
        mobile="enter mobile";
        if(register.gender=="" || register.gender== null )
        gender="Choose Gender";
        if(register.street=="" || register.street== null)
        street="enter sterrt";
        if(register.City=="" || register.City== null)
        city="enter City";

        if(register.Certificates=="" || register.Certificates== null)
        Certificates="Uplode Certificates";
        if(register.Images=="" || register.Images== null)
        Images="Uplode Images";
        if(register.Pass=="" || register.Pass== null)
        pass="enter password";
        if(register.ConfPass=="" || register.ConfPass== null)
        conpass="enter confirm password";
    
        if(register.Pass!=register.ConfPass)
        conpass="Password and confirm password must be the same";
    
        setError({
        NameError:name,
        EmailError:email,
        YearsofExperianceError:YearsofExperiance,
        MobileError:mobile,
        genderError:gender,
        streetError:street,
        CityError:city,
        CertificatesError:Certificates,
        ImagesError:Images,
        PassError:pass,
        ConfPassError:conpass
    
        });
        console.log(name, email, mobile,gender);            //////////////////========
        console.log(register);
      
      }

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

     //Navbar

    )
    return (
        <> 
        <Navbar className="mb-4" expand="lg" fixed='top' >
            <Container className="mb-3 d-block ">
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
        {/* do it for margin but did't work */}
        <div className="mb-3">
            <div className="pt-3">
                
                <br />
                <br />
            </div>
        </div>


        <section className='mt-2'>
    <br></br>
        
            
          <div className="imgbg">
              <img src="/assets/images/coach.jpg" alt="smartGymawyy"/>
          </div>
          <div className='cont'>
              <div className='formB'>
                  <h2>Gymawy</h2>
                  <h2>Sign Up</h2>
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
                        <p className='registerError'>{errors.NameError}</p>

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
                        <p className='registerError'>{errors.EmailError}</p>
                        <div className='inputB'> 
                                <span>Years of Experiance </span>
                                <input 
                                type="number" 
                                id="YearsofExperiance"
                                name="YearsofExperiance"
                                placeholder="Enter Years of Experiance"
                                value={register.YearsofExperiance}
                                onChange={handlerInput}
                                /> 
                        </div>
                        <p className='registerError'>{errors.YearsofExperianceError}</p>


                        <div className='inputB'> 
                                <span>Mobile </span>
                                <input
                                 type="number"
                                  id="Mobile"
                                  name="Mobile"
                                  placeholder="Enter Mobile Number"
                                  value={register.Mobile}
                                  onChange={handlerInput}
                                  /> 
                        </div>
                        <p className='registerError'>{errors.MobileError}</p>

                        <select className='gender' name="gender" id="gender"  value={register.gender} onChange={handlerInput}>
                           <option value="">Choose Gender</option>
                           <option value="Male">Male</option>
                           <option value="Female">Female</option>
                           <option value="Others">Others</option>
                         </select>
                         <p className='registerError'>{errors.genderError}</p>

                        <div className='inputB'> 
                                <span>Address </span>
                                <input type="text"
                                 id="street"
                                 name="street"placeholder="1234 Main St"
                                 value={register.street}
                                 onChange={handlerInput}
                                 /> 
   
                                <input 
                                type="text" 
                                id="City"name="City"
                                placeholder="Enter City"
                                value={register.City}
                                onChange={handlerInput}
                                /> 

                        </div>
                        <p className='registerError'>{errors.streetError}</p>
                        <p className='registerError'>{errors.CityError}</p>

                        <div className='inputB'> 
                                <span>Certificates </span>
                                <input 
                                type="file" 
                                id="Certificates"
                                name="Certificates"
                                placeholder="Uplode Certificates"
                                value={register.Certificates}
                                onChange={handlerInput}
                                /> 
                        </div>
                        <p className='registerError'>{errors.CertificatesError}</p>

                        <div className='inputB'> 
                                <span>Images </span>
                                <input 
                                type="file" 
                                id="Images"
                                name="Images"
                                placeholder="Uplode Images"
                                value={register.Images}
                                onChange={handlerInput}
                                /> 
                        </div>
                        <p className='registerError'>{errors.ImagesError}</p>

                        
                          <div className="inputB">    
                                <span>Password </span>    
                                  <input 
                                  type="password" 
                                  id="Pass"name="Pass"
                                  placeholder="Password"
                                  value={register.Pass}
                                  onChange={handlerInput}
                                  />                     
                          </div>
                          <p className='registerError'>{errors.PassError}</p>


                          <div className="inputB">    
                                <span>Confirm Password </span>    
                                  <input
                                   type="password" 
                                   id="ConfPass"
                                   name="ConfPass"
                                   placeholder="Password"
                                   value={register.ConfPass}
                                   onChange={handlerInput}
                                   />                     
                          </div>
                          <p className='registerError'>{errors.ConfPassError}</p>

                          
                          <div className="inputB">
                              
                                  <input type="button" value="Register" onClick={checkRegister}/>   
                          </div>
                        <div className="inputB">
                              
                        <p id="warning"></p>
                    </div>
                      
                  </form>
                  
              </div>
          </div>
    </section>

          </>




);


}
// export default Coachsingup;