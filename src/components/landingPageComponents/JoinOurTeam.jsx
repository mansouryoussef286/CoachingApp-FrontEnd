import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';


export const JoinOurTeam = () => {
    const navigate = useNavigate();

    return (
        <div className='bg-dark font-weight-bold text-light text-center p-2'
            style={{
                backgroundColor: 'grey',
                fontSize: 20
            }}>
            <span className='text-capitalize'>
                join our community of great coaches &nbsp; &nbsp;
                <div onclick={() => { navigate("/coachsignup") }}>

                    <button className='btn btn-outline' onClick={()=>{navigate("/coachsignup")}} style={{
                        fontSize: 'smaller',
                        textDecoration: 'underline',
                        color: 'rgb(129, 207, 223, .9)'

                    }}>
                        sign up here &nbsp; <FontAwesomeIcon icon={faArrowPointer}></FontAwesomeIcon>
                    </button>
                </div>
            </span>
        </div>
    )
}
