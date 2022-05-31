import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons'


export const JoinOurTeam = () => {
    return (
        <div className='bg-dark font-weight-bold text-light text-center p-2'  
        style={{
            backgroundColor: 'grey',
            fontSize: 20
        }}>
            <span className='text-capitalize'>
                join our community of great coaches &nbsp; &nbsp;  
                <a href='/coachsignup' style={{
                    fontSize: 'smaller',
                    textDecoration: 'underline',
                    color: 'rgb(129, 207, 223, .9)'
                }}>
                    sign up here &nbsp; <FontAwesomeIcon icon={faArrowPointer}></FontAwesomeIcon>
                </a> 
            </span>
        </div>
    )
}
