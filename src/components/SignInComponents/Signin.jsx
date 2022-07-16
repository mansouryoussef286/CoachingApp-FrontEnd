import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-toastify/dist/ReactToastify.css';
import { faUser, faAngry } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { Header } from '../shared/Header';
import { useFetchpost } from '../../useFetchpost';
import axios from 'axios';
import { Link,useNavigate} from 'react-router-dom';


export const Signin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const [message3, setMessage3] = useState('');

  // const { data, loading, error, status, refetch } = useFetchpost("https://easyfit.azurewebsites.net/api/Account/Login",{
  //   userName: "1",
  //   password: "1"
  // });
  // if (loading) return (<h1>loading...</h1>);
  // if (error) return (<h1>error...</h1>);
  // console.log(data);
  // console.log(status);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const notify = () => toast.error("incorrect credentials", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const onChangeHandler = (e) => {
    if (e.target.name === 'Username') {
      setUsername(e.target.value);
    }
    else {
      setPassword(e.target.value);
    }
  }
  const inputValidate = (e) => {

    const regExEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (e.target.name === 'Username') {
      if (regExEmail.test(username) === false || username === '') {
        // setMessage3('Username us not valid');
        setTimeout(() => {
          setMessage3('');
        }, 3000);

      }
      else {
        setMessage3('');
      }
    }


  }

  const onLoginHandler = async (e) => {
    e.preventDefault();
    // api call
    // refetch({
    //   userName: username,
    //   password: password
    // });

    //add this part in case of locaal testing
    //,{ withCredentials: true }

    axios.post("https://easyfit.azurewebsites.net/api/Account/Login", {
      userName: username,
      password: password
    }).then((response) => {
      setData(response.data);
      setStatus(response.status);
      // console.log(data);
      // console.log(status);
      console.log(response);
      if (response.status == 200) {
        if(response.data.role=="Client")
        {
          console.log("client");
          navigate("/ClientProfile");
        }
        else if(response.data.role=="Coach")
        {
          console.log("coach");
          navigate("/CoachProfile");
        }

      }

    })
      .catch((err) => {
        console.log(err);
        setData(null);
        setStatus(null);
        notify();
        setMessage2("incorrect credentials");
        setTimeout(() => {
          setMessage2('')
        }, 2000);
      })
      .finally(() => {
        setLoading(false);
      });


  }

  return (
    <>
      <Header></Header>
      <section className='loginSection'>
        <ToastContainer />
        <div className="imgbg mgbg d-flex justify-content-center">
          <img src="/assets/images/LoginImage.png" alt="smartGymawyy" class="w-75" />
        </div>
        <div className='cont'>
          <div className='formB'>
            {/* <h2>Gymawy</h2> */}
            <h2>Sign in</h2>
            <form action="">
              <div className='inputB'>
                <span>  <FontAwesomeIcon icon={faUser} />	&nbsp;User Name </span>
                <input type="text" id="Usname" name="Username" placeholder="UserName" value={username} onChange={(e) => { onChangeHandler(e); inputValidate(e); }} />
                <span className='text-danger mt-1'>{message3} </span>
              </div>
              <div className="inputB">
                <span><FontAwesomeIcon icon={faLock} />	&nbsp; Password </span>
                <input type="password" id="Pass" name="Password" placeholder="Password" value={password} onChange={(e) => { onChangeHandler(e); }} />
              </div>
              {/* <!-- <div className="remember">
                              <label >
                                  <input type="checkbox" name="remember" >
                                  Remember Me
                              </label> -->

                          <!-- </div> -->  */}
              <div className="inputB">

                <input type="button" value="Sign In" onClick={onLoginHandler} />
                <hr></hr>
                <input type="button" value="Create New Account As Client" onClick={()=> navigate("/signup")} />
                <input type="button" value="Create New Account As Coach" onClick={()=> navigate("/coachsignup")} />

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
    </>
  )
}
