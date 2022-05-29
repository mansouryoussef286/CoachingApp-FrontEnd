import React from 'react'

export const Login = () => {
  return (
    <section>

      <div class="imgbg">
          <img src="../IMG/pill.png" alt=""/>

      </div>
      <div class="cont">
          <div class="formB">
              <h2>Pharmacy System</h2>
              <h2>Login</h2>
              <form action="">
                  <div class="inputB">
                      
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
              <ul class="somed">
                  <li><img src="../IMG/fb.png" alt=""width="40px"></li>
                  <li><img src="../IMG/inst.png" alt=""width="40px"></li>
                  <li><img src="../IMG/twitter.png" alt=""width="40px"></li>
              </ul>  */}


          </div>
      </div>

</section>
  )
}
