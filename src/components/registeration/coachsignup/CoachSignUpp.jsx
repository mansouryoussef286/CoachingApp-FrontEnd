// import { Header } from './shared/Header.jsx'
// import { Footer } from './shared/Footer.jsx'
import React, { useEffect, useState } from 'react'
import { Navbar, Container, NavDropdown,Nav } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { Link,useNavigate} from 'react-router-dom';


export const CoachSignUpp = () => {
        const navigate = useNavigate();

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
        name="Please enter Name";
        if(register.Email=="" || register.Email== null)
        email="Please enter Email";
        if(register.YearsofExperiance=="" || register.YearsofExperiance== null)
        YearsofExperiance="Please enter Years";
        if(register.Mobile=="" || register.Mobile== null)
        mobile="Please enter mobile";
        if(register.gender=="" || register.gender== null )
        gender="Choose Gender";
        if(register.street=="" || register.street== null)
        street="Please enter street";
        if(register.City=="" || register.City== null)
        city="Please enter City";

        if(register.Certificates=="" || register.Certificates== null)
        Certificates="Uplode Certificates";
        if(register.Images=="" || register.Images== null)
        Images="Uplode Images";
        if(register.Pass=="" || register.Pass== null)
        pass="Please enter password";
        if(register.ConfPass=="" || register.ConfPass== null)
        conpass="Please enter confirm password";
    
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

        // console.log("hellllllllllllllllllllllllo");
        console.log(register.Name);
        console.log(register.Pass);
        console.log(register.Email);


//call api

        axios.post("https://easyfit.azurewebsites.net/api/Account/CoachRegister", {

        
                "id": 0,
                "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "userName": register.Name, 
                "passWord": register.Pass,
                "email": register.Email
              })
              .then((response) => {
                if(response.status==200)
                navigate("/Signin");
                
                console.log(response);
              })
                .catch((err) => {
                  console.log(err);
                  
                })
                // .finally(() => {
                //   setLoading(false);
                // });
    
    }

    return (
        <> 
        <section className='coachSignupContainer'>
            <div className="imgbg">
                <img src="/assets/images/coachMobile.png" alt="smartGymawyy" />
            </div>
            <div className='cont'>
                <div className='formB'>
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
                            <span className='registerError'>{errors.YearsofExperianceError}</span>

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
                            <span className='registerError'>{errors.MobileError}</span>

                            <div className="inputB">
                                <select name="gender" id="gender"  value={register.gender} onChange={handlerInput}>
                                <option value="">Choose Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                                </select>
                            </div>
                            <span className='registerError'>{errors.genderError}</span>

                            <div className='inputB'> 
                                    <span>Address </span>
                                    <input type="text"
                                    id="street"
                                    name="street"placeholder="1234 Main St"
                                    value={register.street}
                                    onChange={handlerInput}
                                    /> 
                            </div>
                            <span className='registerError'>{errors.streetError}</span>

                            <div className='inputB'> 
                                    <input 
                                    type="text" 
                                    id="City"name="City"
                                    placeholder="Enter City"
                                    value={register.City}
                                    onChange={handlerInput}
                                    /> 
                            </div>
                            <span className='registerError'>{errors.CityError}</span>

                            {/* <div className='inputB'> 
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
                            <span className='registerError'>{errors.CertificatesError}</span>

                            <div className='inputB'> 
                                    <span>Images </span>
                                    <input 
                                    type="file" 
                                    id="Images"
                                    name="Images"
                                    placeholder="Uplode Images"
                                    value={register.Images}
                                    onChange={handlerInput}
                                    className='btn btn-danger'
                                    /> 
                            </div>
                            <span className='registerError'>{errors.ImagesError}</span> */}

                            
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
                            <span className='registerError'>{errors.PassError}</span>


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
                            <span className='registerError'>{errors.ConfPassError}</span>

                            
                            <div className="inputB">
                                
                                    <input type="button" value="Register" onClick={checkRegister}/>   
                            </div>
                            <div className="inputB">
                                
                            <span id="warning"></span>
                        </div>
                        
                    </form>
                    
                </div>
            </div>
        </section>

        </>




);


}
// export default Coachsingup;