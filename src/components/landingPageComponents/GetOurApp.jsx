import React from 'react'

export const GetOurApp = () => {
    return (
        <div className='d-flex flex-wrap flex-lg-nowrap flex-md-nowrap align-items-center justify-content-center getapp-bg'>
            <div className='w-50 m-5'>
                
                <span className='text-primary'>get our application</span>
                <h1> <b>Coming Soon</b></h1>

                <h2>you can easily find this app!</h2>
                <p className='w-75'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam iste doloremque voluptate dolorum sint animi rem, ut accusamus eos!
                </p>
                <div className='d-flex align-items-center justify-content-lg-start justify-content-md-start justify-content-center '>
                    <a href="" className='m-2'>
                        <img src="./assets/images/iosApp.png" alt="download ios application" />
                    </a>
                    <a href="" className='m-2'>
                        <img src="./assets/images/androidApp.png" alt="download android application" />
                    </a>
                   
                </div>
            </div>
            <div className='h-100 w-50 d-flex flex-column justify-content-end align-items-center'>
                <img className='getApp-image ' src="./assets/images/mobile-muckup.png" alt="mobile image with the app login shown" />
            </div>
        </div>
    )
}
