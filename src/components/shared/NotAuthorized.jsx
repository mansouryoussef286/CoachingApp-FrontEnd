import React from 'react'
import { useNavigate,Link } from 'react-router-dom';

export const NotAuthorized = () => {
    const navigate= useNavigate();
    const clickHandler= (e)=>{
        navigate.back();
    }

    return (
        <div className="Authbody d-flex flex-column justify-content-center align-items-center">
            <div className="neon align-self-center">403</div>
            
            <div className='w-100 d-flex justify-content-center align-items-center flex-wrap flex-lg-nowrap flex-md-nowrap'>
                <div className='messageContainer px-3 px-lg-5'>
                    <div className="message">You are not authorized. </div> 
                    <div className="message2 ">You tried to access a page you did not have prior authorization for.</div>
                    <button onClick={clickHandler} className='btn btn-primary'>Back Home</button>
                </div>
        
        
                <div className="door-frame px-3 px-lg-5">
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
        </div>
    )
}
