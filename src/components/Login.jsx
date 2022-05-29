import React from 'react'

export const Login = () => {
  return (
        <section>

          <div className="imgbg">
              <img src="/assets/images/LoginImage.png" alt="smartGymawyy"/>
          </div>
          <div className='cont'>
              <div className='formB'>
                  <h2>Gymawy</h2>
                  <h2>Login</h2>
                  <form action="">
                        <div className='inputB'> 
                                <span>Username </span>
                                <input type="text" id="Usname"name="Usname"placeholder="User Name"/> 
                        </div>
                          <div class="inputB">    
                                <span>Password </span>    
                                  <input type="password" id="Pass"name="Pass"placeholder="Password"/>                     
                          </div>
                          {/* <!-- <div class="remember">
                              <label >
                                  <input type="checkbox" name="remember" >
                                  Remember Me
                              </label> -->

                          <!-- </div> -->  */}
                          <div class="inputB">
                              
                                  <input type="button" value="Sign In" onclick="slogin()"/>   
                          </div>
                        <div class="inputB">
                              
                        <p id="warning"></p>
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
