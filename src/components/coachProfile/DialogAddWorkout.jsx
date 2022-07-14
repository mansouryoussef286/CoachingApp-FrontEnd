import React, { useState } from 'react';

export const DialogAddWorkout = (props) => {
        const [errors, setError] = useState({
                NotesError: '',
                DurationError: '',
                NameError: '',
        });

        return (
                <>
                        <section className='coachSignupContainer dialoghieght'>
                                <div className='cont hoverForm'>
                                        <div className='formB my-1'>
                                                <h2>Add workout</h2>
                                                <form className='height=h-100' action="">
                                                        <div className='inputB'>
                                                                <span>Name </span>
                                                                <input
                                                                        type="text"
                                                                        id="Name"
                                                                        name="Name"
                                                                        placeholder="Enter Name"        
                                                                />
                                                        </div>
                                                        <span className='registerError'>{errors.NameError}</span>

                                                        <div className='inputB'>
                                                                <span>Duration </span>
                                                                <input
                                                                        type="text"
                                                                        id="Name"
                                                                        name="Name"
                                                                        placeholder="Enter Duration"        
                                                                />
                                                        </div>
                                                        <span className='registerError'>{errors.DurationError}</span>

                                                        <div className='inputB'>
                                                                <span>Notes </span>
                                                                <input
                                                                        type="text"
                                                                        id="Name"
                                                                        name="Name"
                                                                        placeholder="Enter Notes"        
                                                                />
                                                        </div>
                                                        <span className='registerError'>{errors.NotesError}</span>

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
