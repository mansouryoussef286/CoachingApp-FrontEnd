import React,{useState} from 'react'
import axios from 'axios';
import { Link,useNavigate} from 'react-router-dom';


export const ClientSignup2 = (props) => {
  const navigate = useNavigate();
 // console.log(props.data);
 let data1=props.data;
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
   // console.log(eventObject.target.name +"  "+eventObject.target.value +" here");
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
    // console.log('register');
    // console.log(height, weight, bodyType);
    // console.log(register);

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

    if(register.Weight!="" &&register.BodyType!=""&&register.Height!="")
    {
      //navigate("/clientinfo",{state:register});
      console.log("helllllllllllllllllllo");
      console.log(data1.Age);
      console.log(data1.Name);
      console.log(data1.Email);
      console.log(data1.Mobile);
      console.log(data1.gender);
      console.log(data1.City);
      console.log(data1.Pass);
      console.log(data1.street);
      console.log(register.BodyType);
      console.log(register.Height);
      console.log(register.Weight);

      axios.post("https://easyfit.azurewebsites.net/api/Account/ClientRegister", {
        "id": 0,
        "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "age": data1.Age,
        "lastName": "string",
        "firstName": data1.Name,
        "mobileNum": data1.Mobile,
        "gender": true,
        "city": data1.City,
        "country": data1.street,
        "height": parseInt(register.Height) ,
        "weight": parseInt(register.Weight) ,
        "image": "string",
        "userName":  data1.Name,
        "passWord": data1.Pass,
        "email": data1.Email
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
    
  
  }
  return (
        <section className='coachSignupContainer'>
          <div className="imgbg">
              <img src="/assets/images/LoginImage.png" alt="smartGymawyy"/>
          </div>
          <div className='cont'>
              <div className='formB my-3'>

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
                                
                              <div className='imagesGroup d-flex justify-content-center align-items-center'>
                              <div className='imageInput'>
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
                              <div className='imageInput'>
                              <img src="./assets/images/grabdumbell.jpg" alt="" className='clientImages'/>
                              <input 
                              type="radio" 
                              id="BodyType2" 
                              name="BodyType"
                              value="Type2"
                              onChange={handlerInput}
                               style={{width:'20px',display:'block',marginLeft:'70px',marginTop:'5px'}}
                               />                              </div>
                              <div className='imageInput'>
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
