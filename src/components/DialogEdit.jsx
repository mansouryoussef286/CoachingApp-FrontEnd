import React,{useState} from 'react'
import { Link,useNavigate  } from 'react-router-dom';

export const DialogEdit = (props) => {
  const navigate = useNavigate(); 

  const [register, setregister] = useState({
    Name:props.data.name,
    Age:props.data.age,
    Email:props.data.email,
    Mobile:props.data.mobile,
    street:props.data.address.street,
    City:props.data.address.city,
    height:props.data.height,
    weight:props.data.weight
  });
  const [errors, setError] = useState({
    NameError:'',
    AgeError:'',
    EmailError:'',
    MobileError:'',
    streetError:'',
    CityError:'',
    height:'',
    weight:''
  });

 let handlerInput=(eventObject)=>
  {
        console.log();
    let x=register;
    x[eventObject.target.name]=eventObject.target.value;
    console.log(eventObject.target.name +"  "+eventObject.target.value);
    setregister({
        Name:x.Name,
        Age:x.Age,
        Email:x.Email,
        Mobile:x.Mobile,
        street:x.street,
        City:x.City,
        height:x.height,
        weight:x.weight
  //  [eventObject.target.name]:eventObject.target.value
  })
  
  }

  const checkRegister =(e)=>
  {
    e.preventDefault();
    let name='', age='',email='',mobile='',street='',city='',weight='',height='';
    console.log('register');
    console.log(name, email, mobile);
    console.log(register);

    if(register.Name=="" || register.Name== null)
    name="Please enter Name";
    if(register.Email=="" || register.Email== null)
    email="Please enter Email";
    if(register.age=="" || register.Age== null)
    age="Please enter Age";
    if(register.Mobile=="" || register.Mobile== null)
    mobile="Please enter mobile";
   
    if(register.street=="" || register.street== null)
    street="Please enter street";
    if(register.City=="" || register.City== null)
    city="Please enter City";

    if(register.height=="" || register.height== null)
    height="Please enter height";
    if(register.weight=="" || register.weight== null)
    weight="Please enter confirm weight";

    

    setError({
    NameError:name,
    AgeError:age,
    EmailError:email,
    MobileError:mobile,
    streetError:street,
    CityError:city,
    heightError:height,
    weightPassError:weight

    });
    // console.log(name, email, mobile,gender);
    // console.log(register);
    if(register.Name!="" &&register.Age!="" && register.Email!=""  && register.City!="" && register.ConfPass!="" && register.height!="" && register.street!="" && register.Mobile!="" && register.weight==register.weight)
    navigate("/clientinfo");
  }
  return (
    <> 
    <section className='coachSignupContainer '>
        
        <div className='cont'>
            <div className='formB'>
                <h2>Edit profile</h2>
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
                                readOnly
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
                      <span className='registerError'>{errors.AgeError}</span>

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

                       
                        
                        <div className="inputB">    
                                <span>height </span>    
                                <input 
                                type="number" 
                                id="height"name="height"
                                placeholder="height"
                                value={register.height}
                                onChange={handlerInput}
                                />                     
                        </div>
                        <span className='registerError'>{errors.PassError}</span>


                        <div className="inputB">    
                                <span>Weight </span>    
                                <input
                                type="number" 
                                id="weight"
                                name="weight"
                                placeholder="weight"
                                value={register.weight}
                                onChange={handlerInput}
                                />                     
                        </div>
                        <span className='registerError'>{errors.ConfPassError}</span>

                        
                        <div className="inputB">
                            
                                {/* <input type="button" value="Edit" onClick={checkRegister}/>    */}
                                <input type="button" value="Edit" /> 
                        </div>
                        <div className="inputB">
                            
                        <span id="warning"></span>
                    </div>
                    
                </form>
                
            </div>
        </div>
    </section>

    </>
  )
}
