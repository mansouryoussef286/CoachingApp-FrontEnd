import React from 'react'
import { useNavigate,Link } from 'react-router-dom';

export const NotAuthorized = () => {
    const navigate= useNavigate();
    const clickHandler= (e)=>{
        navigate("/");
    }

  return (
      
        <div className="Authbody">
            <div className='messageContainer'>

                <div className="message">You are not authorized. </div> 
                <div className="message2 ">You tried to access a page you did not have prior authorization for.</div>
              
                <button onClick={clickHandler} className='btn btn-primary'>Back Home</button>
            </div>

                <div className="neon">403</div>
                <div className="door-frame">
                <div className="door">
                <div className="rectangle">
                 </div>
                <div className="handle">
                </div>
                <div className="window">
                <div className="eye">
                </div>
                <div className="eye eye2">
                </div>
                <div className="leaf">
                </div> 
                </div>
            </div>  
            </div>
        </div>
     
  )
}
