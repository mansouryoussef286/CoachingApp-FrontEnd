import React,{useState} from 'react'

export const ClientSignup2 = () => {
  const [register, setregister] = useState({
    Height:'',
    Weight:'',
    BodyType:'',

  });
  const [errors, setError] = useState({
    HeightError:'',
    WeightError:'',
    BodyTypeError:'',

  });

 let handlerInput=(eventObject)=>
  {
    let x=register;
    x[eventObject.target.name]=eventObject.target.value;
    console.log(eventObject.target.name +"  "+eventObject.target.value +" here");
    setregister({
        Height:x.Height,
        Weight:x.Weight,
        BodyType:x.BodyType,

  })
  
  }

  const checkRegister =(e)=>
  {
    e.preventDefault();
    let height='',weight='',bodyType='';
    console.log('register');
    console.log(height, weight, bodyType);
    console.log(register);

    if(register.Height=="" || register.Height== null)
    height="Enter Height";
    if(register.Weight=="" || register.Weight== null)
    weight="enter Weight";
    if(register.BodyType=="" || register.BodyType== null)
    bodyType="enter Body Type";
   
   

    setError({
    HeightError:height,
    WeightError:weight,
    BodyTypeError:bodyType,

    });
    // console.log(name, email, mobile,gender);
    // console.log(register);
  
  }
  return (
        <section>
<br></br>

          <div className="imgbg">
              <img src="/assets/images/LoginImage.png" alt="smartGymawyy"/>
          </div>
          <div className='cont'>
              <div className='formB signupForm'>

                  <h1 style={{color: 'wheat'}}>Welcome Name</h1>
                  <h2>Please Resume Your info</h2>
                  <form  action="">
                        <div className='inputB'> 
                                <span>Height </span>
                                <input 
                                 type="number"
                                 id="Height"
                                 name="Height"
                                 placeholder="Height in cm"
                                 value={register.Height}
                                 onChange={handlerInput}
                                 /> 
                        </div>
                        <p className='registerError'>{errors.HeightError}</p>

                        <div className='inputB'> 
                                <span>Weight </span>
                                <input 
                                type="number" 
                                id="Weight"
                                name="Weight"
                                placeholder="Weight in Kg"
                                value={register.Weight}
                                onChange={handlerInput}
                                /> 
                        </div>
                        <p className='registerError'>{errors.WeightError}</p>

                        <div className='inputB'> 
                                <span>Body Type </span>
                                
                              <div className='imagesGroup'>
                              <div>
                              <img src="./assets/images/grabdumbell.jpg" alt="" className='clientImages'/>
                              <input 
                              type="radio" 
                              id="BodyType1" 
                              name="BodyType"
                              value="Type1"
                              onChange={handlerInput}
                               style={{width:'20px',display:'block',marginLeft:'70px',marginTop:'5px'}}
                               />
                              </div>
                              <div>
                              <img src="./assets/images/grabdumbell.jpg" alt="" className='clientImages'/>
                              <input 
                              type="radio" 
                              id="BodyType2" 
                              name="BodyType"
                              value="Type2"
                              onChange={handlerInput}
                               style={{width:'20px',display:'block',marginLeft:'70px',marginTop:'5px'}}
                               />                              </div>
                              <div>
                              <img src="./assets/images/grabdumbell.jpg" alt="" className='clientImages'/>
                              <input 
                              type="radio" 
                              id="BodyType3" 
                              name="BodyType"
                              value="Type3"
                              onChange={handlerInput}
                               style={{width:'20px',display:'block',marginLeft:'70px',marginTop:'5px'}}
                               />                              </div>
                              </div>
                    
                        </div>
                        <p className='registerError'>{errors.BodyTypeError}</p>

                       

                          
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
  )
}
