import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const DialogAddExcercise = (props) => {
        const [errors, setError] = useState({
                DescriptionError: '',
                LinkError: '',
        });

        return (
                <>
                        <section className='coachSignupContainer dialoghieght'>
                                <div className='cont hoverForm'>
                                        <div className='formB my-1'>
                                                <h2>Add excercise</h2>
                                                <form className='height=h-100' action="">
                                                        <div className='inputB'>
                                                                <span>Description </span>
                                                                <input
                                                                        type="text"
                                                                        id="Name"
                                                                        name="Name"
                                                                        placeholder="Enter description"        
                                                                />
                                                        </div>
                                                        <span className='registerError'>{errors.DescriptionError}</span>

                                                        <div className='inputB'>
                                                                <span>Link </span>
                                                                <input
                                                                        type="text"
                                                                        id="Name"
                                                                        name="Name"
                                                                        placeholder="Enter workout link"        
                                                                />
                                                        </div>
                                                        <span className='registerError'>{errors.LinkError}</span>

                                                        <div className="inputB">

                                                                {/* <input type="button" value="Edit" onClick={checkRegister}/>    */}
                                                                <input type="button" value="Add" />
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
