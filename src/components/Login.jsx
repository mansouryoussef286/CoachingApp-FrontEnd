import React ,{useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-toastify/dist/ReactToastify.css';
import { faUser,faLock} from '@fortawesome/free-regular-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
  


export const Login = () => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [message, setMessage] = useState('');
  const [message2,setMessage2] = useState('');
  const [message3,setMessage3] = useState('');
  
  
  const notify = () => toast.error("incorrect credentials", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const onChangeHandler= (e)=>{
    if(e.target.name==='Username')
    {
     setUsername(e.target.value);
    }
    else
    {
     setPassword(e.target.value);
    }
  }
  const inputValidate=(e)=>{
    
      const regExEmail= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
    if(e.target.name==='Username')
    {
      if (regExEmail.test(username)===false|| username==='') {
        setMessage3('Email us not valid');
        setTimeout(() => {
          setMessage3('');
        }, 3000);
        
      }
      else{
        setMessage3('');
      }
    }
    

  }

  const onLoginHandler=(e)=>{
    e.preventDefault();
    if(username === "admin" && password === "123"){
        
            setMessage("logged in!")
        sessionStorage.setItem("role","admin");
        setTimeout(() => {
            // this.props.setLoggedInRef();
            // this.props.history.push('/');
            setMessage("");

        }, 3000);
    }
    else{
          notify();
          setMessage2("incorrect credentials");
        setTimeout(() => {
              setMessage2('')
        }, 2000);
    }
 }
  
  return (
        <section className='loginSection'>
        <ToastContainer
        />
        

          <div className="imgbg">
              <img src="/assets/images/LoginImage.png" alt="smartGymawyy"/>
          </div>
          <div className='cont'>
              <div className='formB'>
                  {/* <h2>Gymawy</h2> */}
                  <h2>Sign in</h2>
                  <form action="">
                        <div className='inputB'> 
                                <span>  <FontAwesomeIcon icon={faUser}/>	&nbsp;Email </span>
                                <input type="text" id="Usname"name="Username"placeholder="Email" value={username} onChange={(e)=>{onChangeHandler(e);inputValidate(e);}}/> 
                                <span className='text-danger mt-1'>{message3} </span>
                        </div>
                          <div className="inputB">    
                            <span><FontAwesomeIcon icon={faUser}/>	&nbsp; Password </span>    
                            <input type="password" id="Pass"name="Password"placeholder="Password" value={password} onChange={(e)=>{onChangeHandler(e);}}/>                   
                          </div>
                          {/* <!-- <div className="remember">
                              <label >
                                  <input type="checkbox" name="remember" >
                                  Remember Me
                              </label> -->

                          <!-- </div> -->  */}
                          <div className="inputB">
                              
                                  <input type="button" value="Sign In" onClick={onLoginHandler}/>   
                          </div>
                        <div className="inputB">
                              
                        <h4 className='alert-success '>{message}</h4>
                      <h4 className='alert-danger '>{message2}</h4>

                    </div>
                      
                  </form>
                  {/* <h3>Login with social media</h3>
                  <ul className="somed">
                      <li><img src="../IMG/fb.png" alt=""width="40px"></li>
                      <li><img src="../IMG/inst.png" alt=""width="40px"></li>
                      <li><img src="../IMG/twitter.png" alt=""width="40px"></li>
                  </ul>  */}
              </div>
          </div>
    </section>
  )
}
