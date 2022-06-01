import React from 'react'

export const NotFound = () => {
  return (
    <>
    <div className="notfoundBody">

       <h1 className='notfoundTitle'>404 Error Page</h1>
      <p className="zoom-area"><b>Page Your Looking for my not be here Anymore</b></p>
      <section className="error-container">
        <span>4</span>
        <span><span className="screen-reader-text">0</span></span>
        <span>4</span>
      </section>
      <div className="link-container">
        <a  href="/" className="more-link btn">Back To main page</a>
      </div>
    </div>
    </>
  )
}
