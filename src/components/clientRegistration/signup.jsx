import React,{useState} from 'react'
import { Link,useNavigate  } from 'react-router-dom';

export const Signup = () => {
  const navigate = useNavigate();

  const [register, setregister] = useState({
    Name:'',
    Age:'',
    Email:'',
    Mobile:'',
    gender:'',
    street:'',
    City:'',
    Pass:'',
    ConfPass:''
  });
  const [errors, setError] = useState({
    NameError:'',
    AgeError:'',
    EmailError:'',
    MobileError:'',
    genderError:'',
    streetError:'',
    CityError:'',
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
        Age:x.Age,
        Email:x.Email,
        Mobile:x.Mobile,
        gender:x.gender,
        street:x.street,
        City:x.City,
        Pass:x.Pass,
        ConfPass:x.ConfPass
  //  [eventObject.target.name]:eventObject.target.value
  })
  
  }

  const checkRegister =(e)=>
  {
    e.preventDefault();
    let name='', age='',email='',mobile='',gender='',street='',city='',pass='',conpass='';
    console.log('register');
    console.log(name, email, mobile,gender);
    console.log(register);

    if(register.Name=="" || register.Name== null)
    name="Enter Name";
    if(register.Age=="" || register.Age== null)
    age="Enter Age";
    if(register.Email=="" || register.Email== null)
    email="enter Email";
    if(register.Mobile=="" || register.Mobile== null)
    mobile="enter mobile";
    if(register.gender=="" || register.gender== null )
    gender="Choose Gender";
    if(register.street=="" || register.street== null)
    street="enter sterrt";
    if(register.City=="" || register.City== null)
    city="enter City";
    if(register.Pass=="" || register.Pass== null)
    pass="enter password";
    if(register.ConfPass=="" || register.ConfPass== null)
    conpass="enter confirm password";

    if(register.Pass!=register.ConfPass)
    conpass="Password and confirm password must be the same";

    setError({
    NameError:name,
    AgeError:age,
    EmailError:email,
    MobileError:mobile,
    genderError:gender,
    streetError:street,
    CityError:city,
    PassError:pass,
    ConfPassError:conpass

    });
    // console.log(name, email, mobile,gender);
    // console.log(register);
    if(register.Name!="" &&register.Age!="" && register.Email!=""  && register.City!="" && register.ConfPass!="" && register.Pass!="" && register.street!="" && register.Mobile!="" && register.gender!=""&&register.Pass==register.ConfPass)
    navigate("/cleintinfo");
  }
  return (
          <section className='loginSection'>
            <div className="imgbg">
                <img src="/assets/images/LoginImage.png" alt="smartGymawyy"/>
            </div>
            <div className='cont'>
                <div className='formB signupForm'>
                    <h2>Sign Up</h2>
                    <form  action="">
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
                                  <span>Age </span>
                                  <input 
                                  type="number"
                                  id="Age"
                                  name="Age"
                                  placeholder="Enter Age"
                                  value={register.Age}
                                  onChange={handlerInput}
                                  /> 
                          </div>
                          <p className='registerError'>{errors.AgeError}</p>

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
                                
                      
                      </div>
                        
                    </form>
                    
                </div>
            </div>
      </section>
  )
}
