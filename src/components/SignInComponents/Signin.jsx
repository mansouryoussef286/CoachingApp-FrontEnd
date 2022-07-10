import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-toastify/dist/ReactToastify.css';
import { faUser, faAngry } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { Header } from '../shared/Header';
import { useFetchpost } from '../../useFetchpost';

import axios from 'axios';
export const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const [message3, setMessage3] = useState('');

  const { data, loading, error, refetch } = useFetchpost("https://easyfit.azurewebsites.net/api/Account/Login",{
    userName: "yousif",
    password: "Lol00101001@"
  });
  if (loading) return (<h1>loading...</h1>);
  if (error) return (<h1>error...</h1>);
  console.log(data);

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
        setMessage3('Email us not valid');
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
    // axios.post("https://easyfit.azurewebsites.net/api/Account/Login",{
    //     userName: "yousif",
    //     password: "Lol00101001@"
    //   }).then((response) => {
    //   console.log(response.data);
    // })
    //   .catch((err) => {
    //     console.log(err);
    //   });

      // let user = {
      //       userName: "yousif",
      //       password: "Lol00101001@"
      //     };
      
      // let response = await fetch("https://easyfit.azurewebsites.net/api/Account/Login", {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json;charset=utf-8'
      //   },
      //   body: JSON.stringify(user)
      // });
      
      // let result = await response.json();
      // alert(result.message);
    if (username === "admin" && password === "123") {

      setMessage("logged in!")
      sessionStorage.setItem("role", "admin");
      setTimeout(() => {
        // this.props.setLoggedInRef();
        // this.props.history.push('/');
        setMessage("");

      }, 3000);
    }
    else {
      notify();
      setMessage2("incorrect credentials");
      setTimeout(() => {
        setMessage2('')
      }, 2000);
    }
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
                <span>  <FontAwesomeIcon icon={faUser} />	&nbsp;Email </span>
                <input type="text" id="Usname" name="Username" placeholder="Email" value={username} onChange={(e) => { onChangeHandler(e); inputValidate(e); }} />
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
